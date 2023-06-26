'use client'

import LoginForm from '@/components/loginForm'
import { useLoggedContext } from '@/context/LoggedContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Login = () => {
  const { loggedIn, obtainUsername } = useLoggedContext()

  const router = useRouter()

  useEffect(() => {
    if (loggedIn) router.push('/')
  }, [])

  if (!loggedIn) {
    return (
      <LoginForm obtainUsername={obtainUsername} />
    )
  }
}

export default Login
