import { useState, createContext } from 'react'
import { lightColorsTheme, ThemeColors, darkColorsTheme } from './themeColors'

type AuthContexsProps = {
  changeTheme: () => void
  isDarkTheme: boolean
  toogleMenu: boolean
  themeColors: ThemeColors
  closeMenu: () => void
  openMenu: () => void
}

const ThemeContext = createContext({} as AuthContexsProps)

const ThemeProvider = ({ children }: any) => {
  let themeState: boolean
  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark')
    themeState = true
  } else {
    document.body.classList.remove('dark')
    themeState = false
  }

  const [isDarkTheme, setIsDarkTheme] = useState(themeState)
  const [toogleMenu, SetToogleMenu] = useState(true)
  /*  */
  const [themeColors, setThemeColors] = useState<ThemeColors>(
    themeState ? lightColorsTheme : darkColorsTheme,
  )

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    if (isDarkTheme) {
      setThemeColors(darkColorsTheme)
    } else {
      setThemeColors(lightColorsTheme)
    }
    localStorage.setItem('dark-mode', JSON.stringify(!isDarkTheme))
  }
  const closeMenu = () => {
    SetToogleMenu(false)
  }
  const openMenu = () => {
    SetToogleMenu(true)
  }
  return (
    <ThemeContext.Provider
      value={{
        changeTheme,
        isDarkTheme,
        toogleMenu,
        closeMenu,
        openMenu,
        themeColors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
