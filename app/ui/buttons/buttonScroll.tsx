'use client'

import { SVGComponent } from '../svgComponent'
import styles from '@/app/ui/styles/buttons.module.scss'
import { GetSectionContext } from '@/contexts/getSection'
import { useContext } from 'react'

const ButtonScroll = () => {
  const { section, updateSection } = useContext(
    GetSectionContext
  )

  const onClick = (section: string) => {
    let id = 'home'
    switch (section) {
      case 'home':
        id = 'projects'
        break
      case 'projects':
        id = 'skills'
        break
      case 'skills':
        id = 'aboutMe'
        break

      case 'aboutMe':
        id = 'contact'
        break
      case 'contact':
        id = 'home'
        break
      default:
        id = 'home'
        break
    }

    updateSection(id)

    const targetElement =
      document.getElementById(id)

    if (targetElement)
      // Scroll to the target element
      targetElement?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
  }
  return (
    <button
      className={styles.buttonScroll}
      onClick={() => {
        onClick(section)
      }}
    >
      <p>SCROLL</p>

      <SVGComponent
        icon='scroll'
        width='16'
        height='16'
      />
    </button>
  )
}

export default ButtonScroll
