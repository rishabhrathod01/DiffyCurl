import React from 'react'
import { isObject } from 'lodash'
import DiffView from '../DiffView/DiffView'
import { useViewport } from '../../hooks/UseViewport'
import { reArrangeObj } from '../../utils/helpers'

const JsonDiff = (props) => {
  const { firstJson, secondJson } = props
  const { windowWidth } = useViewport()
  const fullJson = { ...firstJson, ...secondJson }
  const sections = Object.keys(fullJson)

  return (
    <div>
      {sections.map((section) => {
        const firstJsonSection = firstJson[section] || {}
        const secondJsonSection = secondJson[section] || {}
        const firstJsonSectionOrdered = isObject(firstJsonSection) ? reArrangeObj(firstJsonSection) : firstJsonSection
        const secondJsonSectionOrdered = isObject(secondJsonSection)
          ? reArrangeObj(secondJsonSection)
          : secondJsonSection
        return (
          <div style={{ marginTop: 40 }} key={section}>
            <DiffView
              maxWidth={windowWidth}
              title={section}
              newJson={firstJsonSectionOrdered}
              oldJson={secondJsonSectionOrdered}
            />
          </div>
        )
      })}
    </div>
  )
}

export default JsonDiff
