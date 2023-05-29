'use client'
// import { useContext } from 'react'
import { useRouter } from 'next/navigation'
// import { LoggedInContext } from '@/components/LoggerProvider'

const Home = () => {
  // ToDo: Hacer validacion de conexion con la BD y el Login
  // const { loggedIn } = useContext(LoggedInContext)
  const loggedIn = true

  const router = useRouter()

  return loggedIn
    ? (
      <>
        <main>
          Aqui va la lista de tareas y el formulariio para registrar nuevas tareas
        </main>
      </>
      )
    : (
        router.push('/login')
      )
}

export default Home
