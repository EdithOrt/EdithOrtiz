'use client'

import ButtonText from './buttons/buttonText'
import ButtonIcon from './buttons/buttonIcon'

import styles from '@/app/ui/styles/navbar.module.scss'

export const Navbar = () => {
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
    <nav className={styles.main}>
      {/* <div className={styles.home}>
        <ButtonText />
      </div> */}

      <div className={styles.containerButtons}>
        <ButtonIcon
          onClick={handleClick}
          id='home'
        />
        <ButtonIcon
          onClick={handleClick}
          id='home'
        />
      </div>

      <div className={styles.containerButtons}>
        <ButtonIcon
          onClick={handleClick}
          id='projects'
        />
        <ButtonIcon
          onClick={handleClick}
          id='skills'
        />
        <ButtonIcon
          onClick={handleClick}
          id='aboutMe'
        />
        <ButtonIcon
          onClick={handleClick}
          id='contact'
        />
      </div>
    </nav>
  )
}
