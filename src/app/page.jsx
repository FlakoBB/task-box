'use client'

import Header from '@/components/header'
import { useLoggedContext } from '@/context/loggedContext'
import { useRouter } from 'next/navigation'
import styles from '@/styles/landing.module.scss'
import TaskForm from '@/components/taskForm'
import ListContainer from '@/components/listContainer'

const Home = () => {
  const { loggedIn } = useLoggedContext()
  const router = useRouter()

  if (loggedIn) {
    return (
      <>
        <Header userName='JoaquinGL' />
        <main className={styles.main}>
          <ListContainer />
          <TaskForm />
        </main>
      </>
    )
  } else {
    router.push('/login')
    return null
  }
}

export default Home
