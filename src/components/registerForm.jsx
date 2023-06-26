'use client'

import Link from 'next/link'
import styles from '@/styles/forms.module.scss'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

const RegisterForm = () => {
  const router = useRouter()
  const refUser = useRef()

  // ToDo: Modificar funcion para registrar usuario a base de datos
  const register = (event) => {
    event.preventDefault()
    alert(`Usuario registrado, ahora puedes iniciar sesion como ${refUser.current.value}`)
    router.push('/login')
  }

  // ToDo: hacer funciones para validar campos del form
  return (
    <section className={styles.main_container}>
      <article className={styles.form_container}>
        <h2 className={styles.form_title}>Registrarse</h2>
        <form className={styles.form} onSubmit={register}>
          <div className={styles.input_group}>
            <label className={styles.label} htmlFor='name'>Nombre:</label>
            <input className={styles.field} type='text' id='name' />
          </div>
          <div className={styles.input_group}>
            <label className={styles.label} htmlFor='surname'>Apellido:</label>
            <input className={styles.field} type='text' id='surname' />
          </div>
          <div className={styles.input_group}>
            <label className={styles.label} htmlFor='username'>Usuario:</label>
            <input className={styles.field} type='text' id='username' ref={refUser} />
          </div>
          <div className={styles.input_group}>
            <label className={styles.label} htmlFor='password'>Contraeña:</label>
            <input className={styles.field} type='password' id='password' />
          </div>
          <button className={styles.btn_form}>Registrar</button>
        </form>
        <span className={styles.option}>¿Ya tienes una cuenta? <Link href='/login'>Ingresar</Link></span>
      </article>
    </section>
  )
}

export default RegisterForm
