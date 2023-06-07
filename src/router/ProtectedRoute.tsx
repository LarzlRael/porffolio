import React, { useContext } from 'react'

import { Navigate, useNavigate } from 'react-router-dom'

import { getAction } from '../provider/action/ActionAuthorization'
import { useEffect, useState } from 'react'
import { validateStatus } from '../utils/utils'

import { AuthContext } from '../context/AuthContext'
import LoadingWihLogo from '../components/loadings/LoadingWithLogo'

export const ProtectedRoutes = ({ children }: any) => {
  const { isLogged, startSession } = useContext(AuthContext)
  const [isTokenVerified, setIsTokenVerified] = useState(false)

  const navigate = useNavigate()
  function verifyTokenValidation() {
    getAction('auth/renew')
      .then((res: any) => {
        if (!validateStatus(res.status)) {
          navigate('/ingresar')
        } else {
          window.localStorage.setItem('token', res.data.token)
          startSession()
        }
      })
      .catch((err: any) => {
        navigate('/ingresar')
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
