import React from 'react'
import styles from './preview.module.scss'

type Props = {
  backgroundImage?: string
  backgroundPosition?: string
  backgroundRepeat?: string
  backgroundSize?: string
}

const BackgroundImage: React.FC<Props> = ({
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
}) => {
  return (
    <div
      className={styles.backgroundImage}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: backgroundPosition,
        backgroundRepeat: backgroundRepeat,
        backgroundSize: backgroundSize,
      }}
    />
  )
}

export default BackgroundImage
