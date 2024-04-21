import styles from '@/app/ui/styles/buttons.module.scss'
import { roboto } from '../fonts'
import React from 'react'

const ButtonAction = ({
  text,
  disable,
  type,
  onClick
}: {
  text: string
  disable: boolean
  type: 'button' | 'submit'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <button
      className={`${roboto.className} ${
        styles.button
      } ${disable && styles.buttonDisable}`}
      disabled={disable}
      type={type}
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  )
}

export default ButtonAction
