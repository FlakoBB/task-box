'use client'
import { createContext, useState } from 'react'

export const LoggedInContext = createContext()

const LoggerProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)

  const logger = () => {
    setLoggedIn(!loggedIn)
  }

  return <LoggedInContext.Provider value={{ loggedIn, logger }}>{children}</LoggedInContext.Provider>
}

export default LoggerProvider
