'use client'

import { useRef, useState } from 'react'
import { useLoggedContext } from '@/context/LoggedContext'
import styles from '@/styles/forms.module.scss'

const TaskForm = () => {
  const { addTask } = useLoggedContext()

  const taskTitle = useRef()
  const taskDescription = useRef()
  const taskPriority = useRef()

  const [incrementId, setIncrementId] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    const title = taskTitle.current.value
    const description = taskDescription.current.value
    const priority = taskPriority.current.value
    addTask(incrementId, title, description, priority, false)
    setIncrementId(incrementId + 1)
    taskTitle.current.value = ''
    taskDescription.current.value = ''
    taskPriority.current.value = 'Normal'
    alert('Nueva tarea agregada')
  }

  return (
    <article className={styles.form_container}>
      <h2 className={styles.form_title}>Nueva Tarea</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input_group}>
          <label className={styles.label} htmlFor='title'>Titulo:</label>
          <input className={styles.field} type='text' id='title' ref={taskTitle} />
        </div>
        <div className={styles.input_group}>
          <label className={styles.label} htmlFor='description'>Descripcion:</label>
          <input className={styles.field} type='text' id='description' ref={taskDescription} />
        </div>
        <div className={styles.input_group}>
          <label className={styles.label} htmlFor='priority'>Prioridad:</label>
          <select className={styles.select} id='priority' ref={taskPriority}>
            <option>Normal</option>
            <option>Urgente</option>
          </select>
        </div>
        <button className={styles.btn_form}>Agregar</button>
      </form>
    </article>
  )
}

export default TaskForm
