import React, { useState } from 'react'
import { NextPage } from 'next'
import { Input, Select } from '../components'
import { cssPropertieConfig, properties } from '../utils/css_modules'
import styles from '../styles/css.module.scss'

const Sidebar = () => {
  return (
    <aside className={styles.main__sidebar}>
      {properties.map((property, index) => (
        <div key={index} className={styles.main__sidebar__list}>
          <h3>{property.name}</h3>
          <ul className={styles.main__sidebar__list__item}>
            {property.properties.map((prop, index) => (
              <li key={index}>{prop}</li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}

const CssPropertyConfigForm = ({
  handleChangeProperty,
  propertieName,
  params,
}: {
  handleChangeProperty: (e: React.ChangeEvent) => void
  propertieName: string
  params: any
}) => {
  const configInputs = cssPropertieConfig.filter(
    (config) => config.name === propertieName
  )[0]

  return (
    <div className={styles.main__config__content}>
      {configInputs.options.map((option) => (
        <>
          {option.type === 'text' ? (
            <Input
              onChange={handleChangeProperty}
              label={option.label}
              name={option.value}
              value={params[option.value]}
            />
          ) : (
            <Select
              onChange={handleChangeProperty}
              label={option.label}
              options={option.options ?? []}
              name={option.value}
              value={params[option.value]}
            />
          )}
        </>
      ))}
    </div>
  )
}

const Css: NextPage = () => {
  const configInputs = cssPropertieConfig.filter(
    (config) => config.name === 'Background Image'
  )[0]

  const [params, setParams] = useState<any>({
    backgroundImage: 'https://cdn.pixabay.com/photo/2012/09/06/21/33/landscape-56314_960_720.png',
  })

  console.log('params: ' ,params)

  const handleChangeConfig = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setParams({ ...params, [target.name]: target.value })
  }

  return (
    <div className={styles.main}>
      <Sidebar />

      <div className={styles.main__config}>
        <div className={styles.main__config__title}>
          <h2>Config</h2>
        </div>

        <CssPropertyConfigForm
          propertieName="Background Image"
          handleChangeProperty={handleChangeConfig}
          params={params}
        />
      </div>

      <div className={styles.main__preview}>
        <div className={styles.main__preview__title}>
          <h2>Preview</h2>
        </div>

        <div className={styles.main__preview__content}>
          {<configInputs.render {...params} />}
        </div>

        <div className={styles.main__preview__code}>
          <h2>Code</h2>

          <div>
            <code>
              background-color: #666666; <br />
              background-position: center; <br />
              background-size: cover; <br />
              background-repeat: no-repeat; <br />
            </code>
          </div>

          <button>Copy</button>
        </div>
      </div>
    </div>
  )
}

export default Css
