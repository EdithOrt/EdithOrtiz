'use client'

import { SVGComponent } from '../svgComponent'
import styles from '@/app/ui/styles/buttons.module.scss'
import { GetSectionContext } from '@/contexts/getSection'
import { useContext } from 'react'

const ButtonScroll = () => {
  const { updateSection, flow, direction } =
    useContext(GetSectionContext)

  const handleScroll = (value: string) => {
    let id = 'home'
    if (value === 'start') {
      id = 'contact'
    } else if (value === 'end') {
      id = 'home'
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
