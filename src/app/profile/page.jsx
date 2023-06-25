'use client'

import Header from '@/components/header'
import { useLoggedContext } from '@/context/LoggedContext'
import { useRouter, usePathname } from 'next/navigation'
import styles from '@/styles/profile.module.scss'

const Profile = () => {
  const { loggedIn, logout } = useLoggedContext()
  const router = useRouter()

  const pathname = usePathname()
  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  if (loggedIn) {
    return (
      <>
        <Header pathname={pathname} handleLogout={handleLogout} />
        <main className={styles.main_container}>
          <section className={styles.user_data}>
            <h2 className={styles.user_title}>Datos Del Usuario</h2>
            <article className={styles.data_container}>
              <div className={styles.field_area}>
                <label className={styles.label}>Usuario:</label>
                <div className={styles.field_data}>
                  <p className={styles.data}>FlakoBB</p>
                  <button>E</button>
                </div>
              </div>
              <div className={styles.field_area}>
                <label className={styles.label}>Nombre:</label>
                <div className={styles.field_data}>
                  <p className={styles.data}>Joseph</p>
                  <button>E</button>
                </div>
              </div>
              <div className={styles.field_area}>
                <label className={styles.label}>Apellido:</label>
                <div className={styles.field_data}>
                  <p className={styles.data}>Ryan</p>
                  <button>E</button>
                </div>
              </div>
              <div className={styles.field_area}>
                <label className={styles.label}>Contraseña:</label>
                <div className={styles.field_data}>
                  <p className={styles.data}>&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;</p>
                  <button>E</button>
                </div>
              </div>
            </article>
          </section>
          <aside className={styles.danger_zone}>
            <h3 className={styles.danger_title}>Zona de Peligro</h3>
            <div className={styles.danger_btns}>
              <button>Eliminar todas las tareas</button>
              <button>Eliminar cuenta</button>
              <button>Eliminar el planeta Tierra</button>
            </div>
          </aside>
        </main>
      </>
    )
  } else {
    router.push('/login')
    return null
  }
}

export default Profile
