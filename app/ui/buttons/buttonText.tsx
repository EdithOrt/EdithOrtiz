'use client'

import styles from '@/app/ui/styles/buttons.module.scss'

interface ButtonTextProps {
  onClick: any
  id: string
}

const ButtonText = ({
  onClick,
  id
}: ButtonTextProps) => {
  return (
    <button
      className={`${styles.buttonText} ${styles.leftButton}`}
      onClick={() => onClick(id)}
    >
      <p>INICIO</p>
    </button>
  )
}

export default ButtonText
