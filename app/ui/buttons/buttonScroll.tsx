'use client'

import { SVGComponent } from '../svgComponent'
import styles from '@/app/ui/styles/buttons.module.scss'
import { GetSectionContext } from '@/contexts/getSection'
import { useContext } from 'react'

const ButtonScroll = () => {
  const {
    section,
    updateSection,
    flow,
    direction
  } = useContext(GetSectionContext)

  const goUp = (value: string): string => {
    let section = ''
    switch (value) {
      case 'contact':
        section = 'aboutMe'
        break
      case 'aboutMe':
        section = 'skills'
        break
      case 'skills':
        section = 'projects'
        break
      case 'projects':
        section = 'home'
        break
      default:
        section = 'home'
        break
    }

    return section
  }

  const goBottom = (value: string): string => {
    let section = ''
    switch (value) {
      case 'home':
        section = 'projects'
        break
      case 'projects':
        section = 'skills'
        break
      case 'skills':
        section = 'aboutMe'
        break
      case 'aboutMe':
        section = 'contact'
        break
      default:
        section = 'home'
        break
    }

    return section
  }

  const handleScroll = (value: string) => {
    let id = 'home'
    if (value === 'start') {
      id = goBottom(section)
    } else if (value === 'end') {
      id = goUp(section)
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
        handleScroll(flow.current)
      }}
    >
      <p>SCROLL</p>

      <div
        className={`${
          direction === 'buttom' &&
          styles.iconScrollEnd
        } ${
          direction === 'up' &&
          styles.iconScrollStart
        }`}
      >
        <SVGComponent
          icon='scroll'
          width='16'
          height='16'
        />
      </div>
    </button>
  )
}

export default ButtonScroll
