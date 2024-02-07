import { useState, createContext, useEffect } from 'react'
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
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [toogleMenu, SetToogleMenu] = useState(true)

  /*  */
  const [themeColors, setThemeColors] = useState<ThemeColors>(
    isDarkTheme ? darkColorsTheme : lightColorsTheme,
  )
  useEffect(() => {
    console.log(isDarkTheme, 'isDarkTheme')
    console.log(localStorage.getItem('dark-mode'))
    if (localStorage.getItem('dark-mode') === 'true') {
      setIsDarkTheme(true)
    } else {
      setIsDarkTheme(false)
    }
    setThemeColors(isDarkTheme ? darkColorsTheme : lightColorsTheme)
  }, [])

  const changeTheme = () => {
    const newIsDarkTheme = !isDarkTheme
    setIsDarkTheme(newIsDarkTheme)

    const newThemeColors = newIsDarkTheme ? darkColorsTheme : lightColorsTheme
    setThemeColors(newThemeColors)

    localStorage.setItem('dark-mode', JSON.stringify(newIsDarkTheme))
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
