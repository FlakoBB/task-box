'use client'

import { useLoggedInContext } from '../../context/logged'
import { useRouter } from 'next/navigation'

const Login = () => {
  const { loggedIn, setLoggedIn } = useLoggedInContext()

  const handleLogged = () => {
    setLoggedIn(true)
  }
  const router = useRouter()

  const handleRoute = () => {
    router.push('/')
  }
  return loggedIn
    ? (
      <>
        <h1>Login</h1>
        <button onClick={handleLogged}>Iniciar Sesion</button>
      </>
      )
    : (
        handleRoute
      )
}

export default Login
