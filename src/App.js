/* eslint-disable import/no-dynamic-require */
import React, { Component } from 'react'
import curlconverter from 'curlconverter'
import { isEmpty, isObject } from 'lodash'
import './App.css'
import { diff as DiffEditor } from 'react-ace'
import dffptch from 'dffptch'
import CurlInput from './Components/CurlInput/CurlInput'
import Button from './Components/Button/Button'
import { curl1, curl2 } from './mock/curls'
import { reArrangeObj } from './utils/helpers'
import Header from './Components/Header/Header'
import Send from './icons/Send'
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/snippets/json'
import { withTheme } from './hooks/useTheme'

const EDITOR_THEMES = {
  TEXTMATE: 'textmate',
  DRACULA: 'dracula'
}

Object.values(EDITOR_THEMES).forEach((theme) => {
  // eslint-disable-next-line global-require
  require(`ace-builds/src-noconflict/theme-${theme}`)
})

// const REQUEST_METHODS = {
//   GET: 'get',
//   POST: 'post',
//   PUT: 'put',
//   DELETE: 'delete',
//   PATCH: 'patch',
//   OPTIONS: 'options'
// }

const SECTIONS = {
  PARAMS: { label: 'params', parser: '^queries$' },
  AUTH: { label: 'auth', parser: '^auth$' },
  HEADERS: { label: 'headers', parser: '^headers$' },
  BODY: { label: 'body', parser: '^data*' },
  COOKIES: { label: 'cookies', parser: '^cookies$' }
}

const REQUEST_SECTIONS = {
  URL: { label: 'url', parser: '^url$' },
  METHOD: { label: 'method', parser: '^method$' },
  ...SECTIONS
}

const filterRequestSections = (requestJson) => {
  const filteredRequest = {}
  const mockRequestSections = { ...REQUEST_SECTIONS }
  Object.entries(requestJson).forEach(([sectionKey = '', sectionValue]) => {
    const sections = Object.entries(mockRequestSections)
    let matchedSectionLabel = ''
    for (let index = 0; index < sections.length; index += 1) {
      const element = sections[index]
      const [key, { label, parser }] = element
      const regex = new RegExp(parser)
      if (regex.test(sectionKey)) {
        matchedSectionLabel = label
        delete mockRequestSections[key]
        break
      }
    }
    if (matchedSectionLabel) {
      filteredRequest[matchedSectionLabel] = sectionValue
    }
  })
  return filteredRequest
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curlFirst: curl1,
      curlSecond: curl2,
      parsedFirstJson: {},
      parsedSecondJson: {},
      showDifference: false,
      activeSection: SECTIONS.HEADERS.label,
      diffEditorValue: ['', ''],
      sectionNameDiffMap: {}
    }
    this.editorRef = React.createRef()
  }

  handleSubmit = () => {
    const { state } = this
    const { activeSection } = state
    let parsedFirstJson = {}
    let parsedSecondJson = {}
    try {
      parsedFirstJson = JSON.parse(curlconverter.toJsonString(state.curlFirst))
    } catch (error) { }

    if (isEmpty(parsedFirstJson)) {
      alert('Please enter valid Original curl') // showSnackbar
      return
    }

    try {
      parsedSecondJson = JSON.parse(curlconverter.toJsonString(state.curlSecond))
    } catch (error) { }

    if (isEmpty(parsedSecondJson)) {
      alert('Please enter valid Modified curl') // showSnackbar
      return
    }

    const sectionNameDiffMap = {}
    const filterFirstJson = filterRequestSections(parsedFirstJson)
    const filterSecondJson = filterRequestSections(parsedSecondJson)

    Object.values(SECTIONS).forEach(({ label: sectionName }) => {
      let diffCount = 0

      const diffResult = dffptch.diff(filterSecondJson[sectionName] || {}, filterFirstJson[sectionName] || {})
      if (isObject(diffResult.a)) {
        const addCount = Object.keys(diffResult.a).length
        diffCount += addCount
      }
      if (isObject(diffResult.m)) {
        const modCount = Object.keys(diffResult.m).length
        diffCount += modCount
      }
      if (Array.isArray(diffResult.d)) {
        const deleteCount = diffResult.d.length
        diffCount += deleteCount
      }
      if (isObject(diffResult.r)) {
        const rCount = Object.keys(diffResult.r).length
        diffCount += rCount
      }
      sectionNameDiffMap[sectionName] = diffCount
    })

    this.setEditorValue({ parsedFirstJson, parsedSecondJson, activeSection, sectionNameDiffMap })
  }

  parseJsonModifiedData = ({ section }) => {
    let jsonString = ''
    const entries = Object.entries(section)
    if (entries.length) {
      jsonString = entries.reduce((previousValue, currentValueArray) => {
        const [currentKey, currentValue] = currentValueArray
        if (Array.isArray(previousValue)) {
          const [key, value] = previousValue
          return `${key}=${value}&${currentKey}=${currentValue}`
        }
        return previousValue + currentKey + currentValue
      })
    }
    return jsonString
  }

  setEditorValue = ({ parsedFirstJson, parsedSecondJson, activeSection, sectionNameDiffMap }) => {
    const filterFirstJson = filterRequestSections(parsedFirstJson)
    const filterSecondJson = filterRequestSections(parsedSecondJson)
    let firstSection = filterFirstJson[activeSection] || {}
    let secondSection = filterSecondJson[activeSection] || {}
    if (activeSection === 'body') {
      const firstJsonString = this.parseJsonModifiedData({ section: firstSection })
      const secondJsonString = this.parseJsonModifiedData({ section: secondSection })

      try {
        firstSection = JSON.parse(firstJsonString)
      } catch (error) {
        // console.log('not a JSON data')
      }

      try {
        secondSection = JSON.parse(secondJsonString)
      } catch (error) {
        // console.log('not a JSON data')
      }
    }
    const sortedFirstSectionJson = reArrangeObj(firstSection)
    const sortedSecondSectionJson = reArrangeObj(secondSection)

    const diffEditorValue = [
      JSON.stringify(sortedFirstSectionJson, null, 4),
      JSON.stringify(sortedSecondSectionJson, null, 4)
    ]

    let otherModState = {}
    if (sectionNameDiffMap) {
      otherModState = {
        sectionNameDiffMap
      }
    }

    this.setState(
      {
        parsedFirstJson,
        parsedSecondJson,
        showDifference: true,
        diffEditorValue,
        activeSection,
        ...otherModState
      },
      () => {
        try {
          this.editorRef.current.scrollIntoView()
        } catch (error) { }
      }
    )
  }

  changeSection = (newActionSection) => {
    const { parsedFirstJson, parsedSecondJson } = this.state
    this.setEditorValue({ parsedFirstJson, parsedSecondJson, activeSection: newActionSection })
  }
  

  render() {
    const {
      activeSection,
      showDifference,
      diffEditorValue,
      curlFirst,
      curlSecond,
      sectionNameDiffMap = {}
    } = this.state

    const enteredBothCurls = !!(curlFirst && curlSecond)
    const { theme } = this.props

    return (
      <div className="flex flex-col min-h-screen bg-white dark:bg-black-700 transition-colors">
        <Header />

        <div className="mx-6 mt-28 z-0">
          <div>
            <div>
              <div className="flex flex-row">
                <CurlInput
                  label="Original curl"
                  value={curlFirst}
                  onChange={(e) => {
                    this.setState({
                      curlFirst: e.target.value
                    })
                  }}
                  onClear={() => {
                    this.setState({
                      curlFirst: '',
                      parsedFirstJson: {},
                      showDifference: false
                    })
                  }}
                />
                <div className="w-2 h-full" />
                <CurlInput
                  label="Modified curl"
                  value={curlSecond}
                  onChange={(e) => {
                    this.setState({
                      curlSecond: e.target.value
                    })
                  }}
                  onClear={() => {
                    this.setState({
                      curlSecond: '',
                      parsedSecondJson: {},
                      showDifference: false
                    })
                  }}
                />
              </div>
              <div className="flex flex-row items-center justify-center mt-4">
                <Button
                  disable={!enteredBothCurls}
                  label="COMPARE"
                  toolTipText="Show comparison"
                  onClick={this.handleSubmit}
                  Icon={Send}
                />
              </div>
            </div>
            <div ref={this.editorRef}>
              {!!(enteredBothCurls && showDifference) && (
                <div className="mt-10 px-4 ">
                  <div className="m-2">
                    {Object.values(SECTIONS).map(({ label: sectionName }) => {
                      const count = sectionNameDiffMap[sectionName] || 0
                      return (
                        <button
                          key={sectionName}
                          className={` transition-colors capitalize text-base border-none rounded px-3 py-2 m-1 hover:font-semibold text-primary hover:text-primary-100 hover:text-gray-300
                         ${activeSection === sectionName ? 'bg-primary-100 dark:bg-black-500 ' : ''}`}
                          type="button"
                          onClick={() => this.changeSection(sectionName)}
                        >
                          {sectionName}
                          {count > 0 ? (
                            <span className="ml-1 font-normal font-mono text-sm text-yellow-800 dark:text-yellow-100">{` • ${count} `}</span>
                          ) : (
                              ''
                            )}
                        </button>
                      )
                    })}
                  </div>
                  <div className="px-4 py-4  rounded">
                    <DiffEditor
                      value={diffEditorValue}
                      mode="json"
                      // enableBasicAutocompletion
                      // enableLiveAutocompletion
                      highlightActiveLine
                      showGutter
                      showPrintMargin
                      wrapEnabled
                      readOnly
                      width="100%"
                      height="300px"
                      theme={theme === 'dark' ? 'dracula' : EDITOR_THEMES.TEXTMATE}
                      onChange={(value) => {
                        this.setState({ diffEditorValue: value })
                      }}
                      setOptions={{
                        fontFamily: 'FiraCode',
                        fontSize: 13
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mb-16" />
      </div>
    )
  }
}

export default withTheme(App)
