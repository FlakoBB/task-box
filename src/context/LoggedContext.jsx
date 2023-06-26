'use client'

import { createContext, useContext, useState } from 'react'

const LoggedContext = createContext()

export const LogggedProvider = ({ children }) => {
  // ToDo: poner la lista de tareas como un estado para agregar, eliminar y modificar tareas
  // ? Estado lista de tareas
  const [tasksList, setTasksList] = useState([])

  const addTask = (id, title, description, priority, state = false) => {
    setTasksList([
      ...tasksList,
      {
        id,
        title,
        description,
        priority,
        state
      }
    ])
  }
  // const tasksList = [
  //   {
  //     id: 1,
  //     title: 'Tarea 1',
  //     description: 'Descripcionde la trarea 1',
  //     priority: 'Normal',
  //     state: false
  //   },
  //   {
  //     id: 2,
  //     title: 'Tarea 2: Titulo largo para ver como se comporta el overview en el item de tarea',
  //     description: 'Descripcionde la trarea 2',
  //     priority: 'Urgente',
  //     state: false
  //   },
  //   {
  //     id: 3,
  //     title: 'Tarea 3',
  //     description: 'Esta es la descripcion improvisada de la TAREA 3. Es una descripcion larga para ver como se comporta el campo a diferentes tamañosd de descripciones. espero que con esto sea suficioente, si no tendre que regresar a escribir más.',
  //     priority: 'Normal',
  //     state: true
  //   },
  //   {
  //     id: 4,
  //     title: 'Tarea 4',
  //     description: 'Descripcionde la trarea 4',
  //     priority: 'Urgente',
  //     state: false
  //   },
  //   {
  //     id: 5,
  //     title: 'Tarea 5',
  //     description: 'Descripcionde la trarea 5',
  //     priority: 'Normal',
  //     state: false
  //   },
  //   {
  //     id: 6,
  //     title: 'Tarea 6',
  //     description: 'Descripcionde la trarea 6',
  //     priority: 'Normal',
  //     state: false
  //   }
  // ]

  // ? Estado de nombre de usuario
  const [username, setUsername] = useState('')

  const obtainUsername = (username) => {
    setUsername(username)
  }

  // ? Estado logeado
  const [loggedIn, setLoggedIn] = useState(false)
  const login = () => {
    setLoggedIn(true)
  }

  const logout = () => {
    setLoggedIn(false)
  }

  return (
    <LoggedContext.Provider value={{ loggedIn, login, logout, tasksList, obtainUsername, username, addTask }}>
      {children}
    </LoggedContext.Provider>
  )
}

export const useLoggedContext = () => useContext(LoggedContext)
