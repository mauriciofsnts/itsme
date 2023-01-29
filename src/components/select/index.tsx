import React from 'react'
import styles from './select.module.scss'

// Option props
interface OptionProps {
  value: string
  label: string
}

// Native html select props
interface Props
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label: string
  options: OptionProps[]
}

const Select: React.FC<Props> = ({ label, options, ...selectProps }) => {
  return (
    <div className={styles.container}>
      <label htmlFor="select">{label}</label>

      <select className={styles.container__select} {...selectProps}>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={styles.container__select__option}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
