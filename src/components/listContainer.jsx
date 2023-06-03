import styles from '@/styles/listContainer.module.scss'

const ListContainer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.lista}>
        <ul>
          <li>Tarea 1</li>
          <li>Tarea 2</li>
          <li>Tarea 3</li>
          <li>Tarea 4</li>
        </ul>
      </div>
      <div className={styles.controles}>
        <button>Todas</button>
        <button>Pendientes</button>
        <button>Completas</button>
        <button>Normales</button>
        <button>Urgentes</button>
      </div>
    </section>
  )
}
export default ListContainer
