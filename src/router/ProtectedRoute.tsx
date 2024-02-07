

import { Navigate, useNavigate } from 'react-router-dom'

import { getAction } from '../provider/action/ActionAuthorization'
import { useEffect, useState } from 'react'
import { validateStatus } from '../utils/utils'

import LoadingWihLogo from '../components/loadings/LoadingWithLogo'
import { useAuthStore } from '../store/useAuthStore'

export const ProtectedRoutes = ({ children }: any) => {
  const { isLogged, startSession } = useAuthStore((state) => state)

  const [isTokenVerified, setIsTokenVerified] = useState(false)

  const navigate = useNavigate()
  function verifyTokenValidation() {
    getAction('auth/renew')
      .then((res: any) => {
        if (!validateStatus(res.status)) {
          navigate('/login')
        } else {
          window.localStorage.setItem('token', res.data.accessToken)
          startSession()
        }
      })
      .catch((err: any) => {
        navigate('/login')
      })
      .finally(() => {
        setIsTokenVerified(true)
      })
  }
  useEffect(() => {
    verifyTokenValidation()
  }, [isLogged])
  if (!isTokenVerified) {
    return <LoadingWihLogo />
  } else if (!isLogged) {
    return <Navigate to="/ingresar" />
  } else {
    return children
  }
}
