import React from 'react'
import styles from './title.module.scss'

type Props = {
  children: React.ReactNode
}

const Title: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <h2 className={styles.title} {...rest}>
      {children}
    </h2>
  )
}

export default Title
