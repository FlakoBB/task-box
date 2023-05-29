import LoggerProvider from '@/components/LoggerProvider'
import '../styles/globals.css'
import { Jost } from 'next/font/google'

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
        <LoggerProvider>
          {children}
        </LoggerProvider>
      </body>
    </html>
  )
}

export default RootLayout
