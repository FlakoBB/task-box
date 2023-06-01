'use client'

import { createContext, useContext, useState } from 'react'

const LoggedContext = createContext()

export const LoggedProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)

  const login = () => {
    setLoggedIn(true)
  }

  const logout = () => {
    setLoggedIn(false)
  }

  return (
    <LoggedContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </LoggedContext.Provider>
  )
}

export const useLoggedContext = () => useContext(LoggedContext)
