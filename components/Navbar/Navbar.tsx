"use client"
import React from 'react'
import logo from '../../app/assets/logo1.png';
import { IoIosBody } from 'react-icons/io'
import './Navbar.css'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'

const Navbar = () => {
    const pathname = usePathname()

    const handleLogout = () => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/logout', {
            method: 'POST',
            credentials: 'include',
        })
            .then(() => {
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    if (pathname?.startsWith('/admin')) {
        return null
    }

    return (
        <nav>
            <Image src={logo} alt="Logo" />
            <div className="navLinks">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/profile' title="Profile"><IoIosBody /></Link>
            </div>
            <div className="navSpacer" aria-hidden />
            <div className="navActions">
                <ThemeToggle />
                <button type="button" className="navLogout" onClick={handleLogout}>
                    Log out
                </button>
            </div>
        </nav>
    )
}

export default Navbar