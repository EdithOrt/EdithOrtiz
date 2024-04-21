'use client'

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

    if (targetElement)
      // Scroll to the target element
      targetElement?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

    updateSection(id)
  }

  const handleLinks = (id: string) => {
    let path = '#'

    if (id === 'github') {
      path = 'https://github.com/EdithOrt'
    } else if (id === 'linkedin') {
      path =
        'https://www.linkedin.com/in/edithort/'
    }

    // Create an anchor element
    const a = document.createElement('a')
    a.href = path
    a.target = '_blank'

    // Programmatically trigger a click event on the anchor element
    a.click()
  }
  return (
    <nav className={styles.main}>
      <div className={styles.containerButtons}>
        <ButtonIcon
          onClick={handleLinks}
          id='github'
          iconName='github'
        />
        <ButtonIcon
          onClick={handleLinks}
          id='linkedin'
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
