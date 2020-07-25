import React from 'react'
import DiffView from '../DiffView/DiffView'
import { useViewport } from '../../hooks/UseViewport'

const JsonDiff = (props) => {
  const { firstJson, secondJson } = props
  const { windowWidth } = useViewport()
  const fullJson = { ...firstJson, ...secondJson }
  const sections = Object.keys(fullJson)
  return (
    <div>
      {sections.map((section) => (
        <div style={{ marginTop: 40 }} key={section}>
          {/* <h3>{section}</h3> */}
          <DiffView
            maxWidth={windowWidth}
            title={section}
            newJson={firstJson[section] || {}}
            oldJson={secondJson[section] || {}}
          />
        </div>
      ))}
    </div>
  )
}

export default JsonDiff
