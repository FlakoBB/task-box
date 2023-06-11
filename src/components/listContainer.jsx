import styles from '@/styles/listContainer.module.scss'
import TaskItem from './taskItem'

const ListContainer = () => {
  const tasksList = [
    {
      id: 1,
      title: 'Tarea 1',
      description: 'Descripcionde la trarea 1',
      priority: 'Normal',
      state: false
    },
    {
      id: 2,
      title: 'Tarea 2: Titulo largo para ver si funciona el overflow y etcetera',
      description: 'Descripcionde la trarea 2',
      priority: 'Urgente',
      state: false
    },
    {
      id: 3,
      title: 'Tarea 3',
      description: 'Descripcionde la trarea 3',
      priority: 'Normal',
      state: false
    },
    {
      id: 4,
      title: 'Tarea 4',
      description: 'Descripcionde la trarea 4',
      priority: 'Urgente',
      state: false
    },
    {
      id: 5,
      title: 'Tarea 5',
      description: 'Descripcionde la trarea 5',
      priority: 'Normal',
      state: false
    },
    {
      id: 6,
      title: 'Tarea 6',
      description: 'Descripcionde la trarea 6',
      priority: 'Normal',
      state: false
    }
  ]

  return (
    <section className={styles.tasks_section}>
      <h1 className={styles.section_title}>Tus Tareas</h1>
      <div className={styles.container}>
        <ol className={styles.list}>
          {/* // ToDo: Iterar sobre un objeto que contenga las tareas y mostrar un item por cada una */}
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
