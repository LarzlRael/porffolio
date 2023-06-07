import { useState, createContext } from 'react'
type AuthContexsProps = {
  startSession: () => void
  isLogged: boolean
  logout: () => void
}

const AuthContext = createContext({} as AuthContexsProps)

const AuthProvider = ({ children }: any) => {
  const [isLogged, setLogged] = useState({
    isLogged: false,
    user: '',
  })

  const startSession = () => {
    setLogged({
      ...isLogged,
      isLogged: true,
    })
  }
  const logout = () => {
    window.localStorage.removeItem('token')
    setLogged({
      ...isLogged,
      isLogged: false,
    })
  }
  return (
    <AuthContext.Provider
      value={{
        startSession,
        isLogged: isLogged.isLogged,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
