import styles from '@/app/ui/styles/buttons.module.scss'
import { roboto } from '../fonts'

const ButtonAction = ({
  text
}: {
  text: string
}) => {
  return (
    <button
      className={`${roboto.className} ${styles.button}`}
    >
      <p>{text}</p>
    </button>
  )
}

export default ButtonAction
