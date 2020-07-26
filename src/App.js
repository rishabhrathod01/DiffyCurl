import React, { Component } from 'react'
import curlconverter from 'curlconverter'
import { isEmpty } from 'lodash'
import './App.css'
import CurlInput from './Components/CurlInput/CurlInput'
import JsonDiff from './Components/JsonDiff/JsonDiff'
import Button from './Components/Button/Button'
import { curl1, curl2 } from './mock/curls'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curlFirst: curl1,
      curlSecond: curl2,
      parsedFirstJson: {},
      parsedSecondJson: {},
      hideInput: false
    }
  }

  handleSubmit = () => {
    const { state } = this
    let parsedFirstJson = {}
    let parsedSecondJson = {}
    try {
      parsedFirstJson = JSON.parse(curlconverter.toJsonString(state.curlFirst))
      parsedSecondJson = JSON.parse(curlconverter.toJsonString(state.curlSecond))
    } catch (error) {}

    if (isEmpty(parsedFirstJson) || isEmpty(parsedSecondJson)) {
      alert('Please enter valid curl calls/')
      return
    }

    this.setState({
      parsedFirstJson,
      parsedSecondJson
      // hideInput: true
    })
  }

  clearValues = () => {
    this.setState({
      parsedFirstJson: {},
      parsedSecondJson: {},
      curlFirst: '',
      curlSecond: ''
    })
  }

  render() {
    const { state } = this
    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2>
            Diffy
            <span style={{ color: '#51cf66' }}>+</span>
            <span style={{ color: '#ff6b6b' }}>-</span>
            Curl🤒
          </h2>
          <h3>
            <pre> v0.0.1 </pre>
          </h3>
        </div>
        {state.hideInput ? null : (
          <div style={{ margin: 50, borderWidth: 10, borderColor: 'black' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <CurlInput
                label="First Curl 👇🏻"
                value={state.curlFirst}
                onChange={(e) => {
                  this.setState({
                    curlFirst: e.target.value
                  })
                }}
              />
              <CurlInput
                label="Second Curl ✌️"
                value={state.curlSecond}
                onChange={(e) => {
                  this.setState({
                    curlSecond: e.target.value
                  })
                }}
              />
            </div>
            <div
              style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Button label="Difference 👍" onClick={this.handleSubmit} />
              <Button label="Clear 🚽" color="#868e96" onClick={this.clearValues} />
            </div>
          </div>
        )}
        <JsonDiff key="root" level={0} firstJson={state.parsedFirstJson} secondJson={state.parsedSecondJson} />
        <div style={{ marginTop: 100 }} />
      </div>
    )
  }
}

export default App
