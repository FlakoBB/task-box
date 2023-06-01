import Link from 'next/link'
import styles from '@/styles/forms.module.scss'

const RegisterForm = () => {
  return (
    <main className={styles.main_container}>
      <section className={styles.form_container}>
        <form className={styles.form}>
          <h2 className={styles.form_title}>Registrarse</h2>
          <div className={styles.input_group}>
            <label className={styles.label} htmlFor='name'>Nombre:</label>
            <input className={styles.field} type='text' id='name' />
          </div>
          <div className={styles.input_group}>
            <label className={styles.label} htmlFor='surname'>Apellido:</label>
            <input className={styles.field} type='text' id='surname' />
          </div>
          <div className={styles.input_group}>
            <label className={styles.label} htmlFor='password'>Contraeña:</label>
            <input className={styles.field} type='text' id='password' />
          </div>
          <button className={styles.btn_form}>Registrar</button>
          {/* // ToDo: Poner onSubmit para registrar el usuario en la base de datos */}
        </form>
        <span className={styles.change}>¿Ya tienes una cuenta? <Link href='/login'>Ingresar</Link></span>
      </section>
    </main>
  )
}

export default RegisterForm
