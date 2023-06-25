'use client'

import Header from '@/components/header'
import TaskInfo from '@/components/taskInfo'
import { useRouter, usePathname } from 'next/navigation'
import { useLoggedContext } from '@/context/LoggedContext'
import { useEffect } from 'react'

const TaskPage = ({ params }) => {
  const { id } = params

  const idNumber = parseInt(id)

  const { loggedIn, logout, tasksList } = useLoggedContext()
  const task = tasksList.find(taskF => taskF.id === idNumber)

  const router = useRouter()
  const pathname = usePathname()
  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  useEffect(() => {
    if (!loggedIn) router.push('/login')
  }, [])

  if (task) {
    return (
      <>
        <Header pathname={pathname} handleLogout={handleLogout} />
        <TaskInfo task={task} />
      </>
    )
  } else {
    return <h1>Tarea no encontrada</h1>
  }
}

export default TaskPage
