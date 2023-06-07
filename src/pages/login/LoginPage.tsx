import { useContext, useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import './LoginPage.scss'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/forms/Input'
import { Loading } from '../../components/loadings/Loading'
import { validateStatus } from '../../utils/utils'

/* import './../../styles/_media.scss' */
import { Button } from '../../components/Buttons/Button'
import { postAction } from '../../provider/action/ActionAuthorization'
import { AuthContext } from '../../context/AuthContext'
import Swal from 'sweetalert2'
export const LoginPage = () => {
  const { isLogged, startSession } = useContext(AuthContext)

  const [loading, setloading] = useState(false)
  const push = useNavigate()
  useEffect(() => {
    if (isLogged) {
      push('/dashboard/listar')
    }
  }, [])

  async function onSubmit({ password, username }: initialValuesI) {
    if (password === '' || username === '') {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'LLene todos los campos!',
      })
    }
    setloading(true)
    postAction('auth/signin', { password, username })
      .then((res: any) => {
        setloading(false)
        if (validateStatus(res.status)) {
          window.localStorage.setItem('token', res.data.accessToken)
          startSession()
          push('/dashboard/listar')
        } else {
          setloading(false)
          return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrectos!',
          })
        }
      })
      .catch((err) => {
        setloading(false)
        console.log(err)
      })
  }

  interface initialValuesI {
    username: string
    password: string
  }
  const initialValues = {
    username: '',
    password: '',
  }
  return (
    <div className="Form__container-main animate__animated animate__fadeIn">
      <div className="Form__container animate__animated animate__fadeInUp">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className="Form__login">
            {/* <h3 className="Form__login--title">{appName}</h3>
            <img className="Form__login--logo" src={appLogo} alt="" /> */}
            <h3 className="Form__login--title">Iniciar Sesion</h3>
            <label className="Form__label--pyme" htmlFor="">
              Usuario
            </label>
            <Input
              label=""
              className="Form__input--pyme"
              placeholder="Ingrese su usuario o email"
              name="username"
              type="text"
              disabled={loading}
            />
            <br />
            <label className="Form__label--pyme" htmlFor="">
              Contraseña
            </label>
            <Input
              label=""
              className="Form__input--pyme"
              placeholder="Ingrese su contraseña"
              name="password"
              type="password"
              disabled={loading}
            />
            {loading ? (
              <Loading />
            ) : (
              <Button
                background="var(--secondary-color)"
                type="submit"
                className="button-login pointer"
                margin="1rem 0"
                borderRadius="20px"
              >
                Iniciar Sesion
              </Button>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  )
}
