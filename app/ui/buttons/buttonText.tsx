import styles from '@/app/ui/styles/buttons.module.scss'

const ButtonText = () => {
  return (
    <button
      className={`${styles.buttonText} ${styles.leftButton}`}
    >
      <p>INICIO</p>
    </button>
  )
}

export default ButtonText
