import { SVGComponent } from '../svgComponent'
import styles from '@/app/ui/styles/buttons.module.scss'

const ButtonScroll = () => {
  return (
    <button className={styles.buttonScroll}>
      <p>SCROLL</p>

      <SVGComponent />
    </button>
  )
}

export default ButtonScroll
