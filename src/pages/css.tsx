import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { ColorInput, Input, Select } from '../components'
import {
  cssPropertieConfig,
  ICssPropertieConfig,
  properties,
} from '../utils/css_modules'

import styles from '../styles/css.module.scss'

const Sidebar = (props: { handleSelectProperty: (name: string) => void }) => {
  return (
    <aside className={styles.main__sidebar}>
      {properties.map((property, index) => (
        <div key={index} className={styles.main__sidebar__list}>
          <h3>{property.name}</h3>
          <ul className={styles.main__sidebar__list__item}>
            {property.properties.map((prop, index) => (
              <li key={index} onClick={() => props.handleSelectProperty(prop)}>
                {prop}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}

const CssPropertyConfigForm = ({
  handleChangeProperty,
  propertie,
  params,
}: {
  handleChangeProperty: (e: React.ChangeEvent) => void
  propertie: ICssPropertieConfig
  params: any
}) => {
  return (
    <div className={styles.main__config__content}>
      {propertie.options.map((prop) => (
        <>
          {prop.type === 'text' && (
            <Input
              onChange={handleChangeProperty}
              label={prop.label}
              name={prop.value}
              value={params[prop.value]}
            />
          )}

          {prop.type === 'select' && (
            <Select
              onChange={handleChangeProperty}
              label={prop.label}
              options={prop.options ?? []}
              name={prop.value}
              value={params[prop.value]}
            />
          )}

          {prop.type === 'color' && (
            <ColorInput
              label={prop.label}
              name={prop.value}
              value={params[prop.value]}
              onChange={handleChangeProperty}
            />
          )}
        </>
      ))}
    </div>
  )
}

const Css: NextPage = () => {
  const [selectedProperty, setSelectedProperty] =
    useState<ICssPropertieConfig>()

  const [params, setParams] = useState<any>({})

  const handleChangeConfig = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setParams({ ...params, [target.name]: target.value })
  }

  const handleSelectProperty = (name: string) => {
    const property = cssPropertieConfig.filter(
      (config) => config.name === name
    )[0]

    if (!property) return

    setSelectedProperty(property)
  }

  useEffect(() => {
    if (!selectedProperty) return
    setParams({ ...selectedProperty.initialValues })
  }, [selectedProperty])

  return (
    <div className={styles.main}>
      <Sidebar handleSelectProperty={handleSelectProperty} />

      <div className={styles.main__config}>
        <div className={styles.main__config__title}>
          <h2>Config</h2>
        </div>

        {selectedProperty && (
          <CssPropertyConfigForm
            propertie={selectedProperty}
            handleChangeProperty={handleChangeConfig}
            params={params}
          />
        )}
      </div>

      <div className={styles.main__preview}>
        <div className={styles.main__preview__title}>
          <h2>Preview</h2>
        </div>

        <div className={styles.main__preview__content}>
          {selectedProperty && <selectedProperty.render {...params} />}
        </div>

        <div className={styles.main__preview__code}>
          <h2>Code</h2>

          <div>
            <code>
              {selectedProperty?.options.map((option) => {
                return (
                  <>
                    {`${option.value}: ${params[option.value]};`}
                    <br />
                  </>
                )
              })}
            </code>
          </div>

          <button>Copy</button>
        </div>
      </div>
    </div>
  )
}

export default Css
