import '../styles/globals.scss'
import { Jost } from 'next/font/google'
import { LoggedProvider } from '@/context/loggedContext'

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
        <LoggedProvider>
          {children}
        </LoggedProvider>
      </body>
    </html>
  )
}

export default RootLayout
