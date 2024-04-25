'use client'

import React, {
  createContext,
  useState,
  useRef,
  useEffect
} from 'react'

const GetSectionContext = createContext({
  section: 'home',
  updateSection: (id: string) => {},
  updateFlow: (newFlow: string) => {},
  flow: { current: 'start' },
  direction: 'up'
})

const GetSectionProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [section, setSection] =
    useState<string>('home')
  const [direction, setDirection] =
    useState<string>('up')

  const flow = useRef<string>('start')

  const updateSection = (id: string) => {
    setSection(id)
  }

  const updateFlow = (newFlow: string) => {
    flow.current = newFlow

    if (newFlow === 'start') {
      setDirection('up')
    } else {
      setDirection('buttom')
    }
  }

  useEffect(() => {
    if (section === 'home') {
      updateFlow('start')
    } else if (section === 'contact') {
      updateFlow('end')
    }
  }, [section])

  const data = {
    section,
    updateSection,
    updateFlow,
    flow,
    direction
  }
  return (
    <GetSectionContext.Provider value={data}>
      {children}
    </GetSectionContext.Provider>
  )
}

export { GetSectionContext, GetSectionProvider }
