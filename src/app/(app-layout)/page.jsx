'use client'

import { useLoggedInContext } from '../../context/logged'
import { useRouter } from 'next/navigation'

const Home = () => {
  // ToDo: Hacer validacion de conexion con la BD y el Login
  const { loggedIn } = useLoggedInContext()

  const router = useRouter()

  const handleRoute = () => {
    router.push('/login')
  }

  return loggedIn === true
    ? (
      <>
        <main>
          Aqui va la lista de tareas y el formulariio para registrar nuevas tareas
        </main>
      </>
      )
    : (
        handleRoute
      )
}

export default Home
