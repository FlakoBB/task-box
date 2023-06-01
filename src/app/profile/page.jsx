'use client'

import Header from '@/components/header'
import { useLoggedContext } from '@/context/loggedContext'
import { useRouter } from 'next/navigation'

const Profile = () => {
  const { loggedIn } = useLoggedContext()
  const router = useRouter()
  if (loggedIn) {
    return (
      <>
        <Header />
        <h1>Este es el Perfil del usuario</h1>
      </>
    )
  } else {
    router.push('/login')
    return null
  }
}

export default Profile
