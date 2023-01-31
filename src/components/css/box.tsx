import React from 'react'
import styles from './preview.module.scss'

const Box: React.FC = (props: any) => {
  return (
    <div
      className={styles.box}
      style={{
        ...props,
        backgroundImage: props?.backgroundImage
          ? `url(${props.backgroundImage})`
          : undefined,
      }}
    />
  )
}

export default Box
