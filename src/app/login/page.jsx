'use client'

import { useLoggedContext } from '@/context/loggedContext'
import { useRouter } from 'next/navigation'

const Login = () => {
  const { loggedIn, login } = useLoggedContext()

  const router = useRouter()

  const handleLogin = () => {
    login()
    router.push('/')
  }

  if (!loggedIn) {
    return (
      <>
        <h1>Login</h1>
        <button onClick={handleLogin}>Entrar</button>
      </>
    )
  } else {
    router.push('/')
    return null
  }
}

export default Login
