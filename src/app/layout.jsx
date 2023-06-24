'use client'

import '../styles/globals.scss'
import { Jost } from 'next/font/google'
// import { LoggedProvider } from '@/context/loggedContext'
import { createContext, useContext, useState } from 'react'

const LoggedContext = createContext()

const jost = Jost({
  subsets: ['latin'],
  variable: '--jost-font'
})

export const metadata = {
  title: 'Task Box',
  description: 'Aplicacion de Lista de Tareas'
}

const RootLayout = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)

  const login = () => {
    setLoggedIn(true)
  }

  const logout = () => {
    setLoggedIn(false)
  }

  return (
    <html className={jost.className} lang='es'>
      <body>
        <LoggedContext.Provider value={{ loggedIn, login, logout }}>
          {children}
        </LoggedContext.Provider>
      </body>
    </html>
  )
}

export const useLoggedContext = () => useContext(LoggedContext)

export default RootLayout
