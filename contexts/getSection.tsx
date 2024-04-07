'use client'

import React, {
  createContext,
  useState
} from 'react'

const GetSectionContext = createContext({
  section: 'home',
  updateSection: (id: string) => {}
})

const GetSectionProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [section, setSection] =
    useState<string>('home')

  const updateSection = (id: string) => {
    setSection(id)
  }

  const data = {
    section,
    updateSection
  }
  return (
    <GetSectionContext.Provider value={data}>
      {children}
    </GetSectionContext.Provider>
  )
}

export { GetSectionContext, GetSectionProvider }
