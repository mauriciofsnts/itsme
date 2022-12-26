import React from 'react'
import styled from './progress.module.scss'

type Props = {
  value: number
  title: string
}

const Progress: React.FC<Props> = ({ value, title }) => {
  return (
    <div className={styled.container}>
      <span>{title}</span>

      <progress value={value} max="100">
        {value}%
      </progress>
    </div>
  )
}

export default Progress
