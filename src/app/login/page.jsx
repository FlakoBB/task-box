import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { LoggedInContext } from '@/components/LoggerProvider'

const Login = () => {
  const { loggedIn, logger } = useContext(LoggedInContext)

  const router = useRouter()

  return loggedIn
    ? (
      <>
        <h1>Login</h1>
        <button onClick={logger}>Iniciar Sesion</button>
      </>
      )
    : (
        router.push('/')
      )
}

export default Login
