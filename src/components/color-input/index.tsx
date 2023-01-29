import React from 'react'

// Native html input color props
interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
}

const ColorInput: React.FC<Props> = ({ label }) => {
  // Native HTML input color element
  return (
    <div>
      <label htmlFor="input">{label}</label>
      <input type="color" />
    </div>
  )
}

export default ColorInput
