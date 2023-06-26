import styles from '@/styles/listContainer.module.scss'
import TaskItem from './taskItem'
import { useLoggedContext } from '@/context/LoggedContext'

const ListContainer = () => {
  const { tasksList } = useLoggedContext()

  return (
    <section className={styles.tasks_section}>
      <h1 className={styles.section_title}>Tus Tareas</h1>
      <div className={styles.container}>
        <ol className={styles.list}>
          {
            tasksList.map((task) => (
              <TaskItem key={task.id} taskData={task} />
            ))
          }
        </ol>
        <div className={styles.controls}>
          <button>Todas</button>
          <button>Pendientes</button>
          <button>Completas</button>
          <button>Normales</button>
          <button>Urgentes</button>
        </div>
        <div className={styles.controls_select}>
          <label className={styles.label}>Filtro:</label>
          <select className={styles.filter}>
            <option>Todas</option>
            <option>Pendientes</option>
            <option>Completas</option>
            <option>Normales</option>
            <option>Urgentes</option>
          </select>
        </div>
      </div>
    </section>
  )
}
export default ListContainer
