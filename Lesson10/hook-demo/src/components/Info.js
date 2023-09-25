import React, { useContext } from 'react'
import { ThemeContext } from './DemoContext'

export default function Info() {
    const theme = useContext(ThemeContext)
    return (
        <div>
            <p className={theme}>
                Use Context Demo
            </p>
            <p>
                Dont Use Context Demo
            </p>
        </div>
    )
}
