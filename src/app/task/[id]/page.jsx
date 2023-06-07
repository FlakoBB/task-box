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

  const { id } = params

  const task = () => {
    tasksList.forEach(task => {
      if (task.id === id) console.log(task)
    })
  }
  console.log(task)

  return (
    <div>
      <h1>Esta es la tarea {id}</h1>
      <p>Hoal</p>
    </div>
  )
}
export default TaskPage
