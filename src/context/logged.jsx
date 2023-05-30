'use client'

import { createContext, useContext, useState } from 'react'

const LoggedInContext = createContext({})

export const LoggedInProvider = ({ children }) => {
  const [LoggedIn, setLoggedIn] = useState(false)

  const login = () => {
    setLoggedIn(true)
  }

  const logout = () => {
    setLoggedIn(false)
  }

  return (
    <LoggedInContext.Provider value={{ LoggedIn, login, logout }}>
      {children}
    </LoggedInContext.Provider>
  )
}

export const useLoggedInContext = () => useContext(LoggedInContext)
