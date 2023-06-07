import Header from '@/components/header'
import TaskInfo from '@/components/taskInfo'

const TaskPage = ({ params }) => {
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
      title: 'Tarea 2',
      description: 'Descripcionde la trarea 2',
      priority: 'Urgente',
      state: false
    },
    {
      id: 3,
      title: 'Tarea 3',
      description: 'Esta es la descripcion improvisada de la TAREA 3. Es una descripcion larga para ver como se comporta el campo a diferentes tamañosd de descripciones. espero que con esto sea suficioente, si no tendre que regresar a escribir más.',
      priority: 'Normal',
      state: true
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

  const { id } = params

  const idNumber = parseInt(id)

  const task = tasksList.find(taskF => taskF.id === idNumber)

  if (task) {
    return (
      <>
        <Header />
        <TaskInfo task={task} />
      </>
    )
  } else {
    return <h1>Tarea no encontrada</h1>
  }
}

export default TaskPage
