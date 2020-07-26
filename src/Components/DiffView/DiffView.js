import React, { PureComponent } from 'react'
import ReactDiffViewer from 'react-diff-viewer'

const characterRatio = 102 / 1800
class DiffView extends PureComponent {
  render = () => {
    const { props } = this
    const maxStringSize = parseInt(characterRatio * props.maxWidth) // For a Line
    const newStyles = {
      variables: {
        dark: {
          highlightBackground: '#fefed5',
          highlightGutterBackground: '#ffcd3c'
        }
      },
      diffContainer: {
        // margin: 10
        // borderTopRightRadius: 10,
        // borderTopLeftRadius: 10
      },
      titleBlock: {
        fontSize: 14,
        fontWeight: '600',
        textTransform: 'capitalize'
      },
      gutter: {
        minWidth: 'unset',
        maxWidth: 8
      },
      line: {
        padding: '10px 2px',
        '&:hover': {
          background: 'unset'
        }
      },
      content: {
        width: props.maxWidth / 2 - 80
      },
      emptyLine: {
        // width: '20%'
      },
      diffAdded: {
        // backgroundColor: '#d3f9d8'
        // width: '45%'
      },
      diffRemoved: {
        // backgroundColor: '#ffe3e3'
        // width: '45%'
      },
      wordAdded: {
        // fontFamily: 'Poppins'
        // width: '45%'
      },
      marker: {
        minWidth: 8,
        maxWidth: 10
      }
    }

    const { newJson, oldJson } = props
    const oldValue = JSON.stringify(newJson, null, 4)
    const newValue = JSON.stringify(oldJson, null, 4)
    return (
      <ReactDiffViewer
        leftTitle={props.title}
        rightTitle={props.title}
        styles={newStyles}
        oldValue={oldValue}
        newValue={newValue}
        splitView
        // useDarkTheme
        renderContent={(str) => {
          const strLength = (str && str.length) || 0
          const stringArray = []
          if (strLength > maxStringSize) {
            for (let i = 0; i < strLength; i += maxStringSize) {
              stringArray.push(str.substring(i, i + maxStringSize))
            }
            return (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {stringArray.map((stringarray, i) => {
                  return (
                    <span key={`${i}-as`}>
                      {stringarray}
                      <br />
                    </span>
                  )
                })}
              </div>
            )
          }
          return <pre>{str}</pre>
        }}
      />
    )
  }
}

export default DiffView
