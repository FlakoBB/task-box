import '../styles/globals.scss'
import { Jost } from 'next/font/google'
import { LogggedProvider } from '@/context/LoggedContext'

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
    <html className={jost.className} lang='es'>
      <body>
        <LogggedProvider>
          {children}
        </LogggedProvider>
      </body>
    </html>
  )
}

export default RootLayout
