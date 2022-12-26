import React from 'react'
import styles from './button.module.scss'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'outlined' | 'focus' | 'default'
}

const Button: React.FC<Props> = ({
  variant = 'default',
  children,
  ...props
}) => {
  return (
    <button {...props} className={[styles.btn, styles[variant]].join(' ')}>
      {children}
    </button>
  )
}

export default Button
