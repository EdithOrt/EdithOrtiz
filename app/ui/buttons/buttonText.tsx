'use client'

import styles from '@/app/ui/styles/buttons.module.scss'

const ButtonText = ({
  onClick,
  id
}: {
  onClick: any
  id: string
}) => {
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
