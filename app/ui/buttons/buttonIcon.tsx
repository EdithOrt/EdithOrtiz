import { Fragment } from 'react'
import { SVGComponent } from '../svgComponent'
import styles from '@/app/ui/styles/buttons.module.scss'

const ButtonIcon = ({
  onClick,
  id,
  withText,
  text
}: {
  onClick: any
  id: string
  withText?: boolean
  text?: string
}) => {
  return (
    <button
      className={`${styles.buttonIcon} ${styles.rightButton}`}
      onClick={() => onClick(id)}
    >
      <div className={styles.icon}>
        <SVGComponent />
      </div>

      {withText && (
        <p className={styles.text}>{text}</p>
      )}
    </button>
  )
}

export default ButtonIcon
