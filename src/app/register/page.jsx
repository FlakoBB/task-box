'use client'

import RegisterForm from '@/components/registerForm'
import { useRouter } from 'next/navigation'

const Register = () => {
  const router = useRouter()

  const register = (event) => {
    event.preventDefault()
    // alert(`Usuario registrado, ahora puedes iniciar sesion como ${refUser.current.value}`)
    alert('Usuario registrado')
    router.push('/login')
  }

  // ToDo: crear funcion para registrar usuario en la base de datos y pasarla por props al <RegisterForm />
  return (
    <RegisterForm register={register} />
  )
}

export default Register
