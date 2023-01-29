import React from 'react'
import styles from './color-input.module.scss'

// Native html input color props
interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
}

const ColorInput: React.FC<Props> = ({
  label,
  value,
  onChange,
  ...inputProps
}) => {
  // Native HTML input color element
  return (
    <div className={styles.inputContainer}>
      <label htmlFor="input">{label}</label>

      <div>
        <input type="color" value={value} onChange={onChange} {...inputProps} />
        <input type="text" value={value} onChange={onChange} {...inputProps} />
      </div>
    </div>
  )
}

export default ColorInput
