import { createContext, useState } from "react"

const THEME_LOCAL_STORAGE_KEY = 'theme' 
const supportedThemes = ['light', 'dark']

const ThemeContext = createContext('light')
export default ThemeContext

const validateTheme = (themeValue) => {
    return supportedThemes.includes(themeValue) && themeValue
}

const getInitialTheme = () => {
    return validateTheme(localStorage.getItem(THEME_LOCAL_STORAGE_KEY) || 'light')
}

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(getInitialTheme())

    const toggleTheme = () => {
        // setTheme(theme === 'light' ? 'dark' : 'light')
        const newThemeValue = theme === 'light' ? 'dark' : 'light'
        setTheme(newThemeValue)
        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newThemeValue)
    }

    return(
        <ThemeContext.Provider value={{theme:theme, toggleTheme:toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
