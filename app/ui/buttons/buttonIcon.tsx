import { SVGComponent } from '../svgComponent'
import styles from '@/app/ui/styles/buttons.module.scss'

const ButtonIcon = ({
  onClick,
  id
}: {
  onClick: any
  id: string
}) => {
  return (
    <button
      className={`${styles.buttonIcon} ${styles.rightButton}`}
      onClick={() => onClick(id)}
    >
      <SVGComponent />
    </button>
  )
}

export default ButtonIcon
