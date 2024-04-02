import styles from './buttonAction.module.scss'
import { roboto } from '../fonts'

const ButtonAction = () => {
  return (
    <button
      className={`${roboto.className} ${styles.button}`}
    >
      <p>Action Button</p>
    </button>
  )
}

export default ButtonAction
