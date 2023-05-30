'use client'

import { useLoggedInContext } from '../../context/logged'
import { useRouter } from 'next/navigation'

const Login = () => {
  const { LoggedIn, login } = useLoggedInContext()
  const router = useRouter()

  const handleLogged = () => {
    login(true)
    router.push('/')
  }

  return LoggedIn
    ? (
      <>
        <h1>Login</h1>
        <button onClick={handleLogged}>Entrar</button>
      </>
      )
    : (
        router.push('/')
      )
}

export default Login
