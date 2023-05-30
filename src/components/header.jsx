'use client'

import { useLoggedInContext } from '../context/logged'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/header.module.scss'

const Header = () => {
  const { logout } = useLoggedInContext()

  const router = useRouter()

  const handleLogged = () => {
    logout(false)
    router.push('/login')
  }

  return (
    <header className={styles.header}>
      <Image className={styles.logo} width='200' height='100' alt='Logo de la app Task Box en color Azul' src='/TaskBox_Logo.png' />
      <div className={styles.options}>
        <span className={styles.user_name}><Link href='/profile'>UserNAme</Link></span>
        <button className={styles.btn_logout} onClick={handleLogged}>Cerrar Sesión</button>
      </div>
    </header>
  )
}

export default Header
