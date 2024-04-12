import { SVGComponent } from '../svgComponent'
import styles from '@/app/ui/styles/buttons.module.scss'

const ButtonIcon = ({
  onClick,
  id,
  withText,
  text,
  iconName
}: {
  onClick: any
  id: string
  withText?: boolean
  text?: string
  iconName: string
}) => {
  return (
    <button
      className={`${styles.buttonIcon} ${
        styles.rightButton
      } ${!withText && styles.onlyIcon}`}
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
