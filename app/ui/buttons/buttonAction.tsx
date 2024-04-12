import styles from '@/app/ui/styles/buttons.module.scss'
import { roboto } from '../fonts'

const ButtonAction = ({
  text,
  disable
}: {
  text: string
  disable: boolean
}) => {
  return (
    <button
      className={`${roboto.className} ${
        styles.button
      } ${disable && styles.buttonDisable}`}
      disabled={disable}
    >
      <p>{text}</p>
    </button>
  )
}

export default ButtonAction
