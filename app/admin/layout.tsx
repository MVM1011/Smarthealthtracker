"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import './adminLayout.css'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const router = useRouter()
    const api = process.env.NEXT_PUBLIC_BACKEND_API

    const showAdminLogout = pathname === '/admin'

    const adminLogout = () => {
        fetch(api + '/admin/logout', { method: 'POST', credentials: 'include' })
            .then(() => router.replace('/admin/login'))
            .catch(() => router.replace('/admin/login'))
    }

    return (
        <>
            <header className="adminLayoutNav">
                <Link href="/">← Home</Link>
                <div className="adminLayoutNav__extra">
                    {pathname === '/admin/login' && <Link href="/admin/signup">Admin signup</Link>}
                    {pathname === '/admin/signup' && <Link href="/admin/login">Admin login</Link>}
                </div>
                <div className="adminLayoutNav__spacer" aria-hidden />
                <ThemeToggle />
                {showAdminLogout && (
                    <button type="button" className="adminLayoutNav__logout" onClick={adminLogout}>
                        Log out
                    </button>
                )}
            </header>
            {children}
        </>
    )
}
