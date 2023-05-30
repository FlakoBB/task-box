'use client'

import { useRouter } from 'next/navigation'
import Header from '../../components/header'
import { useLoggedInContext } from '@/context/logged'

const AppLayout = ({ children }) => {
  const { LoggedIn } = useLoggedInContext()

  const router = useRouter()

  return LoggedIn
    ? (
      <>
        <Header />
        {children}
      </>
      )
    : (
        router.push('/login')
      )
}

export default AppLayout
