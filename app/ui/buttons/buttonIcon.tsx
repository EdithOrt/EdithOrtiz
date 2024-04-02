import { SVGComponent } from '../svgComponent'
import styles from '@/app/ui/styles/buttons.module.scss'

const ButtonIcon = () => {
  return (
    <button
      className={`${styles.buttonIcon} ${styles.rightButton}`}
    >
      <SVGComponent />
    </button>
  )
}

export default ButtonIcon
