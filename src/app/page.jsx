'use client'

import Header from '@/components/header'
import { useLoggedContext } from '@/context/loggedContext'
import { useRouter } from 'next/navigation'

const Home = () => {
  const { loggedIn } = useLoggedContext()
  const router = useRouter()

  if (loggedIn) {
    return (
      <>
        <Header userName='FlakoBB' />
        <main>
          <p>Esta es la landing page</p>
        </main>
      </>
    )
  } else {
    router.push('/login')
    return null
  }
}

export default Home
