import styles from '@/styles/taskItem.module.scss'

const TaskItem = () => {
  return (
    <li className={styles.item}>
      <span className={styles.title}>Nombre de la tarea</span>
      <div className={styles.btns_group}>
        {/* // ToDo: Poner iconos de FontAwesome a los botones */}
        <button className={`${styles.item_btn} ${styles.btn_delete}`}>B</button>
        <button className={`${styles.item_btn} ${styles.btn_complete}`}>C</button>
      </div>
    </li>
  )
}
export default TaskItem
