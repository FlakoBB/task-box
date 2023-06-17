'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLoggedContext } from '@/context/loggedContext'
import styles from '@/styles/header.module.scss'
import { usePathname, useRouter } from 'next/navigation'
import PropTypes from 'prop-types'

const Header = ({ userName }) => {
  const { logout } = useLoggedContext()
  const pathname = usePathname()
  const currentLocation = pathname === '/'
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <header className={styles.header}>
      <Link className={styles.link_logo} target='_blank' href='https://bit.ly/follow-flako'><Image className={styles.logo} width='200' height='100' alt='Logo de la app Task Box en color Azul' src='/TaskBox_Logo.png' /></Link>
      <div className={styles.options}>
        {
          currentLocation
            ? (
              <span className={styles.user_name}><Link href='/profile'>{userName}</Link></span>
              )
            : (
              <span className={styles.user_name}><Link href='/'>Volver</Link></span>
              )
        }
        <button className={styles.btn_logout} onClick={handleLogout}>Salir</button>
      </div>
    </header>
  )
}

Header.propTypes = {
  userName: PropTypes.string
}

export default Header
