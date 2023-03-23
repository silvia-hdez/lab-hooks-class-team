import { createContext, useCallback, useMemo, useState } from "react"
import { useLocation } from "react-router-dom"

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
    // const location = useLocation()
   
    const [theme, setTheme] = useState(getInitialTheme())

    const toggleTheme = useCallback(() => {
        // setTheme(theme === 'light' ? 'dark' : 'light')
        const newThemeValue = theme === 'light' ? 'dark' : 'light'
        setTheme(newThemeValue)
        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newThemeValue)
    }, [theme])

    const value = useMemo(() => {
        return {theme, toggleTheme}
    }, [theme, toggleTheme])

    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
