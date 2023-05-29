import Link from 'next/link'

const Header = () => {
  return (
    <header>
      {/* // ToDo: Cambiar por imagen con texto (Logo) de la App */}
      <span>Task Box</span>
      <div>
        <Link href='/profile'>UserNAme</Link>
        <button>Cerrar Sesión</button>
      </div>
    </header>
  )
}

export default Header
