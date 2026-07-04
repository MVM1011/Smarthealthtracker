"use client"

import React from 'react'
import './ThemeToggle.css'

export default function ThemeToggle() {
    const [theme, setTheme] = React.useState<'dark' | 'light'>('dark')

    React.useEffect(() => {
        const stored = window.localStorage.getItem('theme') as 'dark' | 'light' | null
        const t = stored || 'dark'
        setTheme(t)
        document.documentElement.setAttribute('data-theme', t)
    }, [])

    const setMode = (mode: 'dark' | 'light') => {
        setTheme(mode)
        document.documentElement.setAttribute('data-theme', mode)
        window.localStorage.setItem('theme', mode)
    }

    return (
        <div className="themeToggle" role="group" aria-label="Theme">
            <button
                type="button"
                className={`themeToggle__btn ${theme === 'light' ? 'themeToggle__btn--active' : ''}`}
                onClick={() => setMode('light')}
            >
                Light
            </button>
            <button
                type="button"
                className={`themeToggle__btn ${theme === 'dark' ? 'themeToggle__btn--active' : ''}`}
                onClick={() => setMode('dark')}
            >
                Dark
            </button>
        </div>
    )
}
