'use client'

import { SVGComponent } from '../svgComponent'
import styles from '@/app/ui/styles/buttons.module.scss'
import { GetSectionContext } from '@/contexts/getSection'
import { useContext, useEffect } from 'react'

const ButtonScroll = () => {
  const {
    updateSection,
    flow,
    direction,
    updateFlow
  } = useContext(GetSectionContext)

  const handleScroll = (value: string): void => {
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

  useEffect(() => {
    const home = document.getElementById('home')
    const contact =
      document.getElementById('contact')

    const handleEvent = () => {
      const homePositionY =
        home?.getBoundingClientRect().y as number

      const contactPositionY =
        contact?.getBoundingClientRect()
          .y as number

      if (
        homePositionY >= -240 &&
        contactPositionY >= 5700
      ) {
        updateFlow('start')
        return
      }

      if (
        contactPositionY <= 240 &&
        homePositionY <= -5700
      ) {
        updateFlow('end')

        return
      }
    }

    const timeOut = setTimeout(() => {
      window.addEventListener(
        'scroll',
        handleEvent
      )
    }, 500)

    return () => {
      clearTimeout(timeOut)
      window.removeEventListener(
        'scroll',
        handleEvent
      )
    }
  }, [])

  return (
    <button
      className={styles.buttonScroll}
      onClick={() => {
        handleScroll(flow.current)
      }}
    >
      <p>{`${
        direction === 'buttom'
          ? 'Home'
          : 'Contact'
      }`}</p>

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
