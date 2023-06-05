import styles from '@/styles/listContainer.module.scss'
import TaskItem from './taskItem'

const ListContainer = () => {
  return (
    <section className={styles.tasks_section}>
      <h1 className={styles.section_title}>Tus Tareas</h1>
      <div className={styles.container}>
        <ol className={styles.list}>
          {/* // ToDo: Iterar sobre un objeto que contenga las tareas y mostrar un item por cada una */}
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </ol>
        <div className={styles.controls}>
          <button>Todas</button>
          <button>Pendientes</button>
          <button>Completas</button>
          <button>Normales</button>
          <button>Urgentes</button>
        </div>
      </div>
    </section>
  )
}
export default ListContainer
