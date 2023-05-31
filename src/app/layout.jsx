'use client'

import '../styles/globals.css'
import { Jost } from 'next/font/google'
import Header from '@/components/header'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const jost = Jost({
  subsets: ['latin'],
  variable: '--jost-font'
})

export const metadata = {
  title: 'Task Box',
  description: 'Aplicacion de Lista de Tareas'
}

const RootLayout = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null)
  useEffect(() => {
    setLoggedIn(false)
  }, [])
  const router = useRouter()

  return (
    <html className={jost.className} lang='es'>
      <body>
        {
          loggedIn
            ? (
              <>
                <Header />
                {children}
              </>
              )
            : (
                router.push('/')
              )
        }
      </body>
    </html>
  )
}

export default RootLayout
