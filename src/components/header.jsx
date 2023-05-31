import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Image className={styles.logo} width='200' height='100' alt='Logo de la app Task Box en color Azul' src='/TaskBox_Logo.png' />
      <div className={styles.options}>
        <span className={styles.user_name}><Link href='/profile'>UserNAme</Link></span>
        <button className={styles.btn_logout}>Cerrar Sesión</button>
      </div>
    </header>
  )
}

export default Header
