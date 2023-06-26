'use client'

import Header from '@/components/header'
import { useLoggedContext } from '@/context/LoggedContext'
import { useRouter, usePathname } from 'next/navigation'
import styles from '@/styles/landing.module.scss'
import TaskForm from '@/components/taskForm'
import ListContainer from '@/components/listContainer'
import { useEffect, useRef } from 'react'

const Home = () => {
  const { loggedIn, logout, username } = useLoggedContext()
  const router = useRouter()

  const modal = useRef()

  const handleModal = () => {
    if (modal.current) {
      const currentDisplay = modal.current.style.display
      modal.current.style.display = currentDisplay === 'none' ? 'flex' : 'none'
    }
  }

  const pathname = usePathname()
  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  useEffect(() => {
    if (!loggedIn) router.push('/login')
  }, [])

  if (loggedIn) {
    return (
      <>
        <div className={styles.modal} ref={modal}>
          <button onClick={handleModal}>X</button>
          <div>
            <TaskForm />
          </div>
        </div>
        <Header userName={username} pathname={pathname} handleLogout={handleLogout} />
        <main className={styles.main}>
          <button className={styles.btn_new_task} onClick={handleModal}>Nueva Tarea</button>
          <ListContainer />
          <div className={styles.form_section}><TaskForm /></div>
        </main>
      </>
    )
  }
}

export default Home
