import React from 'react'
import styles from './input.module.scss'

// Native html input props
interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
}

const Input: React.FC<Props> = ({ label, ...inputProps }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor="input">{label}</label>
      <input {...inputProps} />
    </div>
  )
}

export default Input
