'use client'

import ButtonText from './buttons/buttonText'
import styles from '@/app/ui/styles/buttons.module.scss'

const HomeButton = () => {
  const handleClick = (id: string) => {
    const targetElement =
      document.getElementById(id)

    // Scroll to the target element
    targetElement?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  return (
    <div className={styles.buttonHome}>
      <ButtonText
        onClick={handleClick}
        id='home'
      />
    </div>
  )
}

export default HomeButton
