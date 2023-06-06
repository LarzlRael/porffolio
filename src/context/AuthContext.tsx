import { useState, createContext } from 'react'
type AuthContexsProps = {
  startSession: (token: string) => void
  isLogged: boolean
  logout: () => void
}

const AuthContext = createContext({} as AuthContexsProps)

const AuthProvider = ({ children }: any) => {
  const [isLogged, setLogged] = useState({
    isLogged: false,
    user: '',
  })

  const startSession = (token: string) => {
    window.localStorage.setItem('token', token)
    setLogged({
      ...isLogged,
      isLogged: true,
    })
  }
  const logout = () => {
    localStorage.removeItem('token')
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
