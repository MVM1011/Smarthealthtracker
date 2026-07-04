"use client"

import React from 'react'
import styles from './profile.module.css'
import Button from '@mui/material/Button'
import { toast } from 'react-toastify'

type ProfileUser = {
  name?: string
  email?: string
  gender?: string
  dob?: string
  goal?: string
  activityLevel?: string
  isVerified?: boolean
  profilePicture?: string
  weight?: { weight: number; date?: string }[]
  height?: { height: number; date?: string }[]
  createdAt?: string
  updatedAt?: string
}

function formatGoal(g?: string) {
  if (!g) return '—'
  const map: Record<string, string> = {
    weightLoss: 'Lose weight',
    weightMaintain: 'Maintain weight',
    weightGain: 'Gain weight',
  }
  return map[g] || g
}

function formatActivity(a?: string) {
  if (!a) return '—'
  const map: Record<string, string> = {
    sedentary: 'Sedentary',
    light: 'Light',
    moderate: 'Moderate',
    active: 'Active',
    veryActive: 'Very active',
  }
  return map[a] || a
}

function formatGender(g?: string) {
  if (!g) return '—'
  return g.charAt(0).toUpperCase() + g.slice(1)
}

function latestEntry<T extends { date?: string }>(arr: T[] | undefined, pick: (x: T) => string | number) {
  if (!arr?.length) return '—'
  const sorted = [...arr].sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0
    const db = b.date ? new Date(b.date).getTime() : 0
    return da - db
  })
  const last = sorted[sorted.length - 1]
  return String(pick(last))
}

export default function ProfilePage() {
  const [user, setUser] = React.useState<ProfileUser | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)
  const [uploading, setUploading] = React.useState(false)
  const fileRef = React.useRef<HTMLInputElement>(null)

  const loadProfile = React.useCallback(() => {
    setLoading(true)
    setError(null)
    fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/profile', {
      method: 'GET',
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.ok && data.data) {
          setUser(data.data)
        } else {
          setError(data.message || 'Could not load profile')
        }
      })
      .catch(() => setError('Could not load profile'))
      .finally(() => setLoading(false))
  }, [])

  React.useEffect(() => {
    loadProfile()
  }, [loadProfile])

  const onPickPhoto = () => fileRef.current?.click()

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file || !file.type.startsWith('image/')) {
      toast.error('Please choose an image file')
      return
    }
    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('myimage', file)
      const uploadRes = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/image-upload/uploadimage', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      })
      const uploadData = await uploadRes.json()
      if (!uploadData.ok || !uploadData.imageUrl) {
        toast.error(uploadData.error || 'Upload failed')
        return
      }
      const patchRes = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ profilePicture: uploadData.imageUrl }),
      })
      const patchData = await patchRes.json()
      if (!patchData.ok) {
        toast.error(patchData.message || 'Could not save photo')
        return
      }
      setUser((prev) => (prev ? { ...prev, profilePicture: uploadData.imageUrl } : prev))
      toast.success('Profile photo updated')
    } catch {
      toast.error('Upload failed')
    } finally {
      setUploading(false)
    }
  }

  if (loading) {
    return (
      <main className={styles.wrap}>
        <p className={styles.loading}>Loading profile…</p>
      </main>
    )
  }

  if (error || !user) {
    return (
      <main className={styles.wrap}>
        <p className={styles.error}>{error || 'Profile unavailable'}</p>
      </main>
    )
  }

  const initial = (user.name || user.email || '?').charAt(0).toUpperCase()
  const dobDisplay = user.dob
    ? (() => {
        try {
          return new Date(user.dob).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        } catch {
          return user.dob
        }
      })()
    : '—'

  const memberSince = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
    : '—'

  return (
    <main className={styles.wrap}>
      <h1 className={styles.title}>Profile</h1>

      <div className={styles.card}>
        <div className={styles.avatarRow}>
          {user.profilePicture ? (
            <img className={styles.avatar} src={user.profilePicture} alt="" width={120} height={120} />
          ) : (
            <div className={styles.avatarPlaceholder} aria-hidden>
              {initial}
            </div>
          )}
          <div className={styles.uploadCol}>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className={styles.hiddenInput}
              onChange={onFileChange}
            />
            <Button variant="contained" color="warning" disabled={uploading} onClick={onPickPhoto}>
              {uploading ? 'Uploading…' : 'Add or change photo'}
            </Button>
            <p className={styles.uploadHint}>
              JPG, PNG, or GIF. Your image is stored securely and shown on this profile.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.row}>
            <span className={styles.label}>Full name</span>
            <span className={styles.value}>{user.name || '—'}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Email</span>
            <span className={styles.value}>{user.email || '—'}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Gender</span>
            <span className={styles.value}>{formatGender(user.gender)}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Date of birth</span>
            <span className={styles.value}>{dobDisplay}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Fitness goal</span>
            <span className={styles.value}>{formatGoal(user.goal)}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Activity level</span>
            <span className={styles.value}>{formatActivity(user.activityLevel)}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Current weight</span>
            <span className={styles.value}>
              {user.weight?.length
                ? `${latestEntry(user.weight, (x) => x.weight)} kg`
                : '—'}
            </span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Current height</span>
            <span className={styles.value}>
              {user.height?.length
                ? `${latestEntry(user.height, (x) => x.height)} cm`
                : '—'}
            </span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Email verified</span>
            <span className={styles.value}>{user.isVerified ? 'Yes' : 'No'}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Member since</span>
            <span className={styles.value}>{memberSince}</span>
          </div>
        </div>
      </div>
    </main>
  )
}
