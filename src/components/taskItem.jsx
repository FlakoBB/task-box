import { useLoggedContext } from '@/context/LoggedContext'
import styles from '@/styles/taskItem.module.scss'
import Link from 'next/link'

const TaskItem = ({ taskData }) => {
  const { id, title, priority, state } = taskData

  const { tasksList, setTasksList } = useLoggedContext()

  const deleteTask = (taskID) => {
    const newTasksList = tasksList.filter(task => task.id !== taskID)
    setTasksList(newTasksList)
  }

  const completeTask = (taskID) => {
    const newTasksList = tasksList.map(task => {
      if (task.id === taskID) {
        return {
          ...task,
          state: !task.state
        }
      }
      return task
    })
    setTasksList(newTasksList)
  }

  return (
    <li className={`${styles.item} ${state ? styles.completed : ''}`}>
      <Link href={`/task/${id}`}>
        <div className={styles.task_data}>
          <span className={styles.title}>{title}</span>
          <span className={`${styles.priority} ${priority === 'Normal' ? styles.normal : styles.urgent}`}>{priority}</span>
        </div>
      </Link>
      <div className={styles.btns_group}>
        {/* // ToDo: Poner iconos de FontAwesome o Bootstrap a los botones */}
        <button className={`${styles.item_btn} ${styles.btn_delete}`} onClick={() => deleteTask(id)}><i className={`bi bi-trash-fill ${styles.BIcon}`} /></button>
        <button className={`${styles.item_btn} ${styles.btn_complete}`} onClick={() => completeTask(id)}>{state ? <i className={`bi bi-plus-circle-fill ${styles.BIcon}`} /> : <i className={`bi bi-check-circle-fill ${styles.BIcon}`} />}</button>
      </div>
    </li>
  )
}
export default TaskItem
