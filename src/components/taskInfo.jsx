import { useLoggedContext } from '@/context/LoggedContext'
import styles from '@/styles/taskInfo.module.scss'
import { useRouter } from 'next/navigation'

const TaskInfo = ({ task }) => {
  const { tasksList, setTasksList } = useLoggedContext()
  const router = useRouter()

  const deleteTask = (taskID) => {
    const newTasksList = tasksList.filter(task => task.id !== taskID)
    setTasksList(newTasksList)
    router.push('/')
  }

  const completeTask = (taskID) => {
    const newTasksList = tasksList.map(taskSelected => {
      if (taskSelected.id === taskID) {
        return {
          ...task,
          state: !task.state
        }
      }
      return taskSelected
    })
    setTasksList(newTasksList)
  }

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <h2 className={styles.section_title}>Informacion De La Tarea</h2>
        <article className={styles.task_info}>
          <div className={`${styles.subsection} ${styles.subsec1}`}>
            <div className={styles.field_area}>
              <label className={styles.label}>Titulo:</label>
              <div className={styles.field_data}>
                <p className={styles.data}>{task.title}</p>
                <button><i className={`bi bi-pencil-fill ${styles.BIcon}`} /></button>
              </div>
            </div>
            <div className={styles.field_area}>
              <label className={styles.label}>Descripción:</label>
              <div className={styles.field_data}>
                <p className={styles.data}>{task.description}</p>
                <button><i className={`bi bi-pencil-fill ${styles.BIcon}`} /></button>
              </div>
            </div>
          </div>
          <div className={`${styles.subsection} ${styles.subsec2}`}>
            <div className={styles.field_area}>
              <label className={styles.label}>Prioridad:</label>
              <div className={styles.field_data}>
                <p className={styles.data}>{task.priority}</p>
                <button><i className={`bi bi-pencil-fill ${styles.BIcon}`} /></button>
              </div>
            </div>
            <div className={styles.field_area}>
              <label className={styles.label}>Estado:</label>
              <div className={styles.field_data}>
                <p className={styles.data}>{task.state ? 'Completa' : 'Incompleta'}</p>
                <button><i className={`bi bi-pencil-fill ${styles.BIcon}`} /></button>
              </div>
            </div>
            <div className={styles.btns_section}>
              <button className={styles.btn_complete} onClick={() => completeTask(task.id)}>{task.state ? 'Reactivar' : 'Completar'}</button>
              <button className={styles.btn_delete} onClick={() => deleteTask(task.id)}>Borrar Tarea</button>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default TaskInfo
