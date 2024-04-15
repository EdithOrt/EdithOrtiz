'use client'

import { SVGComponent } from '../svgComponent'
import styles from '@/app/ui/styles/buttons.module.scss'
import { GetSectionContext } from '@/contexts/getSection'
import { useContext } from 'react'

const ButtonScroll = () => {
  const {
    section,
    updateSection,
    updateFlow,
    flow
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

  // usar useRef acá
  const onClick = (value: string) => {
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
        onClick(flow.current)
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
