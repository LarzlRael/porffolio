import { useState, createContext } from 'react';
import { lightColorsTheme, ThemeColors, darkColorsTheme } from './themeColors';


type AuthContexsProps = {
    changeTheme: () => void;
    darkTheme: boolean;
    toogleMenu: boolean;
    themeColors: ThemeColors;
    ChangeToogleMenu: () => void;
}

const ThemeContext = createContext({} as AuthContexsProps);


const ThemeProvider = ({ children }: any) => {

    let themeState: boolean;
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark');
        themeState = true;
    } else {
        document.body.classList.remove('dark');
        themeState = false;
    }

    const [darkTheme, setDarkTheme] = useState(themeState);
    const [toogleMenu, SetToogleMenu] = useState(true);
    const [themeColors, setThemeColors] = useState<ThemeColors>(themeState ? lightColorsTheme : darkColorsTheme);

    const changeTheme = () => {
        setDarkTheme(!darkTheme);
        if (darkTheme) {
            setThemeColors(darkColorsTheme)
        } else {
            setThemeColors(lightColorsTheme)
        }
        localStorage.setItem('dark-mode', JSON.stringify(!darkTheme));
    }
    const ChangeToogleMenu = () => {
        SetToogleMenu(!toogleMenu);
    }
    return (
        <ThemeContext.Provider
            value={{
                changeTheme,
                darkTheme,
                toogleMenu,
                ChangeToogleMenu,
                themeColors
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }