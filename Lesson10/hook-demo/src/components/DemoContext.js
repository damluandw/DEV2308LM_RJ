import React, { createContext, useState } from 'react'
import Content from './Content';
export const ThemeContext = createContext();

function DemoContext() {
    const [theme, setTheme] = useState('text-success')
    const toggleTheme = () => {
        setTheme(theme === 'text-success' ? 'text-danger' : 'text-success')
    }
    return (
        <div className='alert alert-secondary'>
            <ThemeContext.Provider value={theme}>
                <button className='btn btn-warning' onClick={toggleTheme}> toggle theme</button>
                <Content />
            </ThemeContext.Provider>
        </div>

    )
}

export default DemoContext