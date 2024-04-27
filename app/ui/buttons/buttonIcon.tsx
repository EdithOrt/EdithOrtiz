import { SVGComponent } from '../svgComponent'
import styles from '@/app/ui/styles/buttons.module.scss'

interface ButtonIconProps {
  onClick: any
  id: string
  withText?: boolean
  text?: string
  iconName: string
  active?: boolean
}

const ButtonIcon = ({
  onClick,
  id,
  withText,
  text,
  iconName,
  active
}: ButtonIconProps) => {
  return (
    <button
      className={`${styles.buttonIcon} ${
        styles.rightButton
      } ${!withText && styles.onlyIcon} ${
        active && styles.buttonIconActive
      }`}
      onClick={() => onClick(id)}
    >
      <div className={styles.icon}>
        <SVGComponent
          icon={iconName}
          height='36'
          width='36'
        />
      </div>

      {withText && (
        <p className={styles.text}>{text}</p>
      )}
    </button>
  )
}

export default ButtonIcon
