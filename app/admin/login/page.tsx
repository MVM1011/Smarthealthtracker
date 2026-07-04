"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import styles from '../admin.module.css'

export default function AdminLoginPage() {
    const router = useRouter()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email, password }),
        })
            .then((r) => r.json())
            .then((data) => {
                if (data.ok) {
                    toast.success(data.message || 'Logged in')
                    router.replace('/admin')
                } else {
                    toast.error(data.message || 'Login failed')
                }
            })
            .catch(() => toast.error('Login failed'))
            .finally(() => setLoading(false))
    }

    return (
        <div className={styles.shell}>
            <h1 className={styles.title}>Admin login</h1>
            <p className={styles.sub}>Sign in to manage workout categories and exercises shown on the user dashboard.</p>
            <div className={styles.card}>
                <form className={styles.form} onSubmit={submit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="current-password"
                    />
                    <button className={`${styles.btn} ${styles.btnPrimary}`} type="submit" disabled={loading}>
                        {loading ? 'Signing in…' : 'Sign in'}
                    </button>
                </form>
            </div>
        </div>
    )
}
