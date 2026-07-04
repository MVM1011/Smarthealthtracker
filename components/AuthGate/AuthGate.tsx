"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import AuthPopup from '../AuthPopup/AuthPopup'

interface AuthGateProps {
    children: React.ReactNode
}

const AuthGate: React.FC<AuthGateProps> = ({ children }) => {
    const pathname = usePathname()
    const noopSetShowPopup: React.Dispatch<React.SetStateAction<boolean>> = () => undefined
    const [isChecking, setIsChecking] = React.useState(true)
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    const checkLogin = React.useCallback(() => {
        setIsChecking(true)
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/checklogin', {
            method: 'POST',
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => {
                const loggedIn = Boolean(data?.ok)
                setIsLoggedIn(loggedIn)
            })
            .catch(() => {
                setIsLoggedIn(false)
            })
            .finally(() => {
                setIsChecking(false)
            })
    }, [])

    React.useEffect(() => {
        if (pathname?.startsWith('/admin')) {
            return
        }
        checkLogin()
    }, [checkLogin, pathname])

    if (pathname?.startsWith('/admin')) {
        return <>{children}</>
    }

    if (isChecking) {
        return null
    }

    if (!isLoggedIn) {
        return <AuthPopup setShowpopup={noopSetShowPopup} forceOpen={true} onAuthSuccess={checkLogin} />
    }

    return <>{children}</>
}

export default AuthGate
