import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from '@/styles/forms.module.scss'

const LoginForm = ({ validation }) => {
  return (
    <main className={styles.main_container}>
      <section className={styles.form_container}>
        <form className={styles.form}>
          <h2 className={styles.form_title}>Ingresar</h2>
          <div className={styles.input_group}>
            <label className={styles.label} htmlFor='username'>Usuario:</label>
            <input className={styles.field} type='text' id='username' />
          </div>
          <div className={styles.input_group}>
            <label className={styles.label} htmlFor='password'>Contraseña:</label>
            <input className={styles.field} type='password' id='password' />
          </div>
          <button onClick={validation} className={styles.btn_form}>Entrar</button>
          {/* // ToDo: Cambiar por onSubmit para validar usuario con la base de datos */}
        </form>
        <span className={styles.change}>¿Eres nuevo usuario? <Link href='/register'>Crea una cuenta</Link>.</span>
      </section>
    </main>
  )
}

LoginForm.propTypes = {
  validation: PropTypes.func.isRequired
}

export default LoginForm
