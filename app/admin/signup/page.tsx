"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import styles from '../admin.module.css'

export default function AdminSignupPage() {
    const router = useRouter()
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/admin/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ name, email, password }),
        })
            .then((r) => r.json())
            .then((data) => {
                if (data.ok) {
                    toast.success(data.message || 'Account created')
                    router.replace('/admin/login')
                } else {
                    toast.error(data.message || 'Signup failed')
                }
            })
            .catch(() => toast.error('Signup failed'))
            .finally(() => setLoading(false))
    }

    return (
        <div className={styles.shell}>
            <h1 className={styles.title}>Admin signup</h1>
            <p className={styles.sub}>Create an administrator account to add exercises and manage workout categories.</p>
            <div className={styles.card}>
                <form className={styles.form} onSubmit={submit}>
                    <input
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
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
                        autoComplete="new-password"
                    />
                    <button className={`${styles.btn} ${styles.btnPrimary}`} type="submit" disabled={loading}>
                        {loading ? 'Creating…' : 'Create admin account'}
                    </button>
                </form>
            </div>
        </div>
    )
}
