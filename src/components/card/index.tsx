import React from 'react'
import styles from './card.module.scss'

type Props = {
  title: string
  subtitle?: string
  content: string
  span?: string
}

const Card: React.FC<Props> = ({ title, subtitle, span, content }) => {
  return (
    <div className={styles.container}>
      <h5>{title}</h5>

      <span>{subtitle}</span>
      <br />
      {span && <span>{span}</span>}

      <p>{content}</p>
    </div>
  )
}

export default Card
