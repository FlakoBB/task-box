import styles from '@/styles/taskItem.module.scss'

const TaskItem = ({ taskData }) => {
  const { title, priority } = taskData

  return (
    <li className={styles.item}>
      <div className={styles.task_data}>
        <span className={styles.title}>{title}</span>
        <span className={`${styles.priority} ${priority === 'Normal' ? styles.normal : styles.urgent}`}>{priority}</span>
      </div>
      <div className={styles.btns_group}>
        {/* // ToDo: Poner iconos de FontAwesome a los botones */}
        <button className={`${styles.item_btn} ${styles.btn_delete}`}>B</button>
        <button className={`${styles.item_btn} ${styles.btn_complete}`}>C</button>
      </div>
    </li>
  )
}
export default TaskItem
