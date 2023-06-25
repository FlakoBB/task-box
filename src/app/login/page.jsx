'use client'

import LoginForm from '@/components/loginForm'
import { useLoggedContext } from '@/context/LoggedContext'
import { useRouter } from 'next/navigation'

const Login = () => {
  const { loggedIn, login } = useLoggedContext()

  const router = useRouter()

  // ToDo: modificar funcion para registrar usuarios a la base de datos
  const handleLogin = () => {
    login()
    router.push('/')
  }

  if (!loggedIn) {
    return (
      <LoginForm validation={handleLogin} />
    )
  } else {
    router.push('/')
    return null
  }
}

export default Login
