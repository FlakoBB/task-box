'use client'

import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from '@/styles/forms.module.scss'
import { useState } from 'react'
import { useLoggedContext } from '@/context/LoggedContext'
import { useRouter } from 'next/navigation'

const LoginForm = ({ obtainUsername }) => {
  const { login } = useLoggedContext()
  const router = useRouter()
  const [inputValue, setInputValue] = useState('')

  const handleChange = ({ target }) => {
    setInputValue(target.value)
  }

  // ToDo: modificar funcion para validar usuario en la base de datos
  const handleLogin = (event) => {
    event.preventDefault()
    if (inputValue.trim() === '') {
      // ToDo: Manejar los errores
      alert('rellena el campo')
    } else {
      obtainUsername(inputValue)
      login()
      router.push('/')
      setInputValue('')
    }
  }

  return (
    <section className={styles.main_container}>
      <article className={styles.form_container}>
        <h2 className={styles.form_title}>Ingresar</h2>
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.input_group}>
            <label className={styles.label} htmlFor='username'>Usuario:</label>
            <input className={styles.field} type='text' id='username' value={inputValue} onChange={handleChange} />
          </div>
          <div className={styles.input_group}>
            <label className={styles.label} htmlFor='password'>Contraseña:</label>
            <input className={styles.field} type='password' id='password' />
          </div>
          <button type='submit' className={styles.btn_form}>Entrar</button>
        </form>
        <span className={styles.option}>¿Eres nuevo usuario? <Link href='/register'>Crea una cuenta</Link>.</span>
      </article>
    </section>
  )
}

LoginForm.propTypes = {
  obtainUsername: PropTypes.func.isRequired
}

export default LoginForm
