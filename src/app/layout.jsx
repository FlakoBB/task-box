'use client'
import '../styles/globals.css'
import { Jost } from 'next/font/google'
import { LoggedInProvider } from '../context/logged'

const jost = Jost({
  subsets: ['latin'],
  variable: '--jost-font'
})

export const metadata = {
  title: 'Task Box',
  description: 'Aplicacion de Lista de Tareas'
}

const RootLayout = ({ children }) => {
  return (
    <html className={jost.variable} lang='es'>
      <body>
        <LoggedInProvider>
          {children}
        </LoggedInProvider>
      </body>
    </html>
  )
}

export default RootLayout
