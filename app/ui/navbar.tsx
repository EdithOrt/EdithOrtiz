'use client'

import ButtonText from './buttons/buttonText'
import ButtonIcon from './buttons/buttonIcon'

import styles from '@/app/ui/styles/navbar.module.scss'

import { GetSectionContext } from '@/contexts/getSection'
import { useContext } from 'react'

export const Navbar = () => {
  const { updateSection } = useContext(
    GetSectionContext
  )

  const handleClick = (id: string) => {
    const targetElement =
      document.getElementById(id)

    // Scroll to the target element
    targetElement?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    updateSection(id)
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
          iconName='github'
        />
        <ButtonIcon
          onClick={handleClick}
          id='home'
          iconName='linkedin'
        />
      </div>

      <div className={styles.containerButtons}>
        <ButtonIcon
          onClick={handleClick}
          id='projects'
          withText
          text='Projects'
          iconName='projects'
        />
        <ButtonIcon
          onClick={handleClick}
          id='skills'
          withText
          text='Skills'
          iconName='skills'
        />
        <ButtonIcon
          onClick={handleClick}
          id='aboutMe'
          withText
          text='About me'
          iconName='aboutMe'
        />
        <ButtonIcon
          onClick={handleClick}
          id='contact'
          withText
          text='Contact'
          iconName='contact'
        />
      </div>
    </nav>
  )
}
