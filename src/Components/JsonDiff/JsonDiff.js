import React from 'react'
import { isObject } from 'lodash'
import DiffView from '../DiffView/DiffView'
import { useViewport } from '../../hooks/UseViewport'
import { reArrangeObj, parseJsonDate } from '../../utils/helpers'
import { FONTS } from '../../utils/constants'

const JsonDiff = (props) => {
  const { firstJson, secondJson, level } = props
  const { windowWidth } = useViewport()
  const fullJson = { ...firstJson, ...secondJson }
  const sections = Object.keys(fullJson)

  return (
    <div>
      {sections.map((section) => {
        const defaultValue = level === 0 ? {} : ''
        const firstJsonSection = firstJson[section] || defaultValue
        const secondJsonSection = secondJson[section] || defaultValue
        if (isObject(firstJsonSection) && isObject(secondJsonSection)) {
          const orderedFirstObj = reArrangeObj(firstJsonSection)
          const orderedSecondObj = reArrangeObj(secondJsonSection)

          if (section === 'data') {
            const actualFirstData = parseJsonDate(orderedFirstObj)
            const actualSecondData = parseJsonDate(orderedSecondObj)
            return (
              <div style={{ display: 'flex', flexDirection: 'column', marginTop: level === 0 ? 20 : 10 }} key={section}>
                {level > 0 ? (
                  <span style={{ fontWeight: '500', fontSize: 14, padding: 4, fontFamily: FONTS.MONOSPACE }}>
                    {section.slice(0, 80)}
                  </span>
                ) : null}
                <DiffView
                  level={level}
                  maxWidth={windowWidth}
                  title={level === 0 ? section : null}
                  newJson={actualFirstData}
                  oldJson={actualSecondData}
                />
              </div>
            )
          }
          return (
            <div key={`${section}-${level}`} style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}>
              <span style={{ fontWeight: '700', fontSize: 16, padding: 10, fontFamily: FONTS.MONOSPACE }}>
                {section.slice(0, 80)}
              </span>
              <JsonDiff
                firstJson={reArrangeObj(orderedFirstObj)}
                secondJson={reArrangeObj(orderedSecondObj)}
                level={level + 1}
              />
            </div>
          )
        }
        const firstJsonSectionOrdered = isObject(firstJsonSection) ? reArrangeObj(firstJsonSection) : firstJsonSection
        const secondJsonSectionOrdered = isObject(secondJsonSection)
          ? reArrangeObj(secondJsonSection)
          : secondJsonSection

        return (
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: level === 0 ? 20 : 10 }} key={section}>
            {level > 0 ? (
              <span style={{ fontWeight: '500', fontSize: 12, padding: 4, fontFamily: FONTS.MONOSPACE }}>
                {section.slice(0, 80)}
              </span>
            ) : null}
            <DiffView
              level={level}
              maxWidth={windowWidth}
              title={level === 0 ? section : null}
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
