'use client'

import { createContext, useContext, useState } from 'react'

const LoggedInContext = createContext({})

export const LoggedInProvider = ({ children }) => {
  const [LoggedIn, setLoggedIn] = useState(false)

  return (
    <LoggedInContext.Provider value={{ LoggedIn, setLoggedIn }}>
      {children}
    </LoggedInContext.Provider>
  )
}

export const useLoggedInContext = () => useContext(LoggedInContext)
