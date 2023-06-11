import styles from '@/styles/forms.module.scss'

const TaskForm = () => {
  const addTask = (event) => {
    event.preventDefault()
    alert('Nueva tarea agregada')
  }

  return (
    <article className={styles.form_container}>
      <h2 className={styles.form_title}>Agregar Nueva Tarea</h2>
      <form className={styles.form}>
        <div className={styles.input_group}>
          <label className={styles.label} htmlFor='title'>Titulo:</label>
          <input className={styles.field} type='text' id='title' />
        </div>
        <div className={styles.input_group}>
          <label className={styles.label} htmlFor='description'>Descripcion:</label>
          <input className={styles.field} type='text' id='description' />
        </div>
        <div className={styles.input_group}>
          <label className={styles.label} htmlFor='priority'>Prioridad:</label>
          <select className={styles.select} id='priority'>
            <option>Normal</option>
            <option>Urgente</option>
          </select>
        </div>
        <button className={styles.btn_form} onClick={addTask}>Agregar</button>
      </form>
    </article>
  )
}

export default TaskForm
