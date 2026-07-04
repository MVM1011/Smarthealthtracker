"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import styles from './admin.module.css'

type CategoryListItem = {
    typeKey: string
    type: string
    displayName: string
    durationInMin: number
    imageUrl: string
    exerciseCount: number
}

type ExerciseDoc = {
    _id: string
    name: string
    description: string
    sets: string
    reps: string
    mediaUrl: string
    mediaType: string
    exerciseLink?: string
    howToDo: string
}

type CategoryDetail = {
    typeKey: string
    displayName: string
    exercises: ExerciseDoc[]
}

export default function AdminDashboardPage() {
    const router = useRouter()
    const [authChecked, setAuthChecked] = React.useState(false)
    const [categories, setCategories] = React.useState<CategoryListItem[]>([])
    const [selectedKey, setSelectedKey] = React.useState('')
    const [detail, setDetail] = React.useState<CategoryDetail | null>(null)
    const [seeding, setSeeding] = React.useState(false)

    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [sets, setSets] = React.useState('3')
    const [reps, setReps] = React.useState('10-12')
    const [mediaUrl, setMediaUrl] = React.useState('')
    const [mediaType, setMediaType] = React.useState<'gif' | 'image'>('gif')
    const [howToDo, setHowToDo] = React.useState('')
    const [exerciseLink, setExerciseLink] = React.useState('')
    const [saving, setSaving] = React.useState(false)

    const [catTypeKey, setCatTypeKey] = React.useState('')
    const [catDisplayName, setCatDisplayName] = React.useState('')
    const [catDuration, setCatDuration] = React.useState(60)
    const [catBannerFile, setCatBannerFile] = React.useState<File | null>(null)
    const [catBannerPreview, setCatBannerPreview] = React.useState<string | null>(null)
    const catBannerInputRef = React.useRef<HTMLInputElement>(null)
    const [creatingCat, setCreatingCat] = React.useState(false)

    const api = process.env.NEXT_PUBLIC_BACKEND_API

    React.useEffect(() => {
        return () => {
            if (catBannerPreview) URL.revokeObjectURL(catBannerPreview)
        }
    }, [catBannerPreview])

    const clearCatBanner = () => {
        setCatBannerFile(null)
        setCatBannerPreview(null)
        if (catBannerInputRef.current) catBannerInputRef.current.value = ''
    }

    const onCatBannerFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0]
        if (!f) return
        if (!f.type.startsWith('image/')) {
            toast.error('Please choose an image file')
            return
        }
        if (catBannerPreview) URL.revokeObjectURL(catBannerPreview)
        setCatBannerFile(f)
        setCatBannerPreview(URL.createObjectURL(f))
    }

    const refreshList = React.useCallback(() => {
        fetch(api + '/workoutcategories', { credentials: 'include' })
            .then((r) => r.json())
            .then((data) => {
                if (data.ok && Array.isArray(data.data)) {
                    setCategories(data.data)
                    if (!selectedKey && data.data[0]) {
                        setSelectedKey(data.data[0].typeKey)
                    }
                }
            })
            .catch(() => undefined)
    }, [api, selectedKey])

    const loadDetail = React.useCallback(
        (typeKey: string) => {
            if (!typeKey) return
            fetch(api + '/workoutcategories/' + encodeURIComponent(typeKey), { credentials: 'include' })
                .then((r) => r.json())
                .then((data) => {
                    if (data.ok && data.data) {
                        setDetail({
                            typeKey: data.data.typeKey,
                            displayName: data.data.displayName,
                            exercises: data.data.exercises || [],
                        })
                    }
                })
                .catch(() => undefined)
        },
        [api]
    )

    React.useEffect(() => {
        fetch(api + '/admin/checklogin', { method: 'GET', credentials: 'include' })
            .then((r) => r.json())
            .then((data) => {
                if (!data?.ok) {
                    router.replace('/admin/login')
                    return
                }
                setAuthChecked(true)
            })
            .catch(() => router.replace('/admin/login'))
    }, [api, router])

    React.useEffect(() => {
        if (!authChecked) return
        refreshList()
    }, [authChecked, refreshList])

    React.useEffect(() => {
        if (selectedKey) loadDetail(selectedKey)
    }, [selectedKey, loadDetail])

    const addCategory = async (e: React.FormEvent) => {
        e.preventDefault()
        const key = catTypeKey.trim().toLowerCase().replace(/\s+/g, '-')
        const name = catDisplayName.trim()
        if (!key || !name) {
            toast.error('Category key and display name are required')
            return
        }
        setCreatingCat(true)
        let imageUrl = ''
        if (catBannerFile) {
            try {
                const formData = new FormData()
                formData.append('myimage', catBannerFile)
                const upRes = await fetch(api + '/image-upload/uploadimage', {
                    method: 'POST',
                    body: formData,
                    credentials: 'include',
                })
                const upData = await upRes.json()
                if (!upData.ok || !upData.imageUrl) {
                    toast.error(upData.error || 'Banner image upload failed')
                    setCreatingCat(false)
                    return
                }
                imageUrl = upData.imageUrl
            } catch {
                toast.error('Banner image upload failed')
                setCreatingCat(false)
                return
            }
        }
        fetch(api + '/workoutcategories', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                typeKey: key,
                displayName: name,
                durationInMin: Number(catDuration) > 0 ? Number(catDuration) : 60,
                imageUrl,
                exercises: [],
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                if (data.ok) {
                    toast.success('Category created — add exercises below')
                    setCatTypeKey('')
                    setCatDisplayName('')
                    setCatDuration(60)
                    clearCatBanner()
                    const newKey = data.data?.typeKey || key
                    fetch(api + '/workoutcategories', { credentials: 'include' })
                        .then((r) => r.json())
                        .then((list) => {
                            if (list.ok && Array.isArray(list.data)) {
                                setCategories(list.data)
                                setSelectedKey(newKey)
                                loadDetail(newKey)
                            }
                        })
                        .catch(() => refreshList())
                } else {
                    toast.error(data.message || 'Could not create category')
                }
            })
            .catch(() => toast.error('Could not create category'))
            .finally(() => setCreatingCat(false))
    }

    const seedDefaults = () => {
        setSeeding(true)
        fetch(api + '/workoutcategories/seed-defaults', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({}),
        })
            .then((r) => r.json())
            .then((data) => {
                if (data.ok) {
                    toast.success(
                        data.message +
                            (data.data ? ` (${data.data.created} new, ${data.data.updated} updated)` : '')
                    )
                    refreshList()
                    if (selectedKey) loadDetail(selectedKey)
                } else {
                    toast.error(data.message || 'Seed failed')
                }
            })
            .catch(() => toast.error('Seed failed'))
            .finally(() => setSeeding(false))
    }

    const addExercise = (e: React.FormEvent) => {
        e.preventDefault()
        if (!selectedKey) {
            toast.error('Select a category')
            return
        }
        setSaving(true)
        fetch(api + '/workoutcategories/' + encodeURIComponent(selectedKey) + '/exercises', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                description,
                sets,
                reps,
                mediaUrl,
                mediaType,
                howToDo,
                exerciseLink: exerciseLink || undefined,
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                if (data.ok) {
                    toast.success('Exercise added')
                    setName('')
                    setDescription('')
                    setMediaUrl('')
                    setHowToDo('')
                    setExerciseLink('')
                    loadDetail(selectedKey)
                    refreshList()
                } else {
                    toast.error(data.message || 'Failed to add exercise')
                }
            })
            .catch(() => toast.error('Failed to add exercise'))
            .finally(() => setSaving(false))
    }

    const removeExercise = (exerciseId: string) => {
        if (!selectedKey) return
        fetch(
            api +
                '/workoutcategories/' +
                encodeURIComponent(selectedKey) +
                '/exercises/' +
                encodeURIComponent(exerciseId),
            { method: 'DELETE', credentials: 'include' }
        )
            .then((r) => r.json())
            .then((data) => {
                if (data.ok) {
                    toast.success('Exercise removed')
                    loadDetail(selectedKey)
                    refreshList()
                } else {
                    toast.error(data.message || 'Delete failed')
                }
            })
            .catch(() => toast.error('Delete failed'))
    }

    if (!authChecked) {
        return (
            <div className={styles.shell}>
                <p className={styles.muted}>Checking session…</p>
            </div>
        )
    }

    return (
        <div className={styles.shell}>
            <h1 className={styles.title}>Admin — workouts</h1>
            <p className={styles.sub}>
                Load the default library once, create extra categories if you need them, then add exercises. Users see
                these workouts on the home carousel and on each category page.
            </p>

            <div className={styles.card}>
                <h2>Database</h2>
                <p className={styles.muted}>
                    Inserts or updates all built-in categories (Chest, Abs, Back, …) with the default exercise lists.
                </p>
                <button
                    type="button"
                    className={`${styles.btn} ${styles.btnPrimary}`}
                    onClick={seedDefaults}
                    disabled={seeding}
                >
                    {seeding ? 'Loading…' : 'Load default workouts'}
                </button>
            </div>

            <div className={styles.card}>
                <h2>Add new category</h2>
                <p className={styles.muted}>
                    Create a custom muscle group or training type (e.g. Shoulders, Stretching). Use a short{' '}
                    <strong>URL key</strong> (letters, numbers, hyphens) — it becomes part of the workout link. Upload a
                    banner image for the home carousel (optional).
                </p>
                <form className={styles.form} onSubmit={addCategory} style={{ maxWidth: '100%' }}>
                    <input
                        placeholder="URL key (e.g. shoulders, stretching)"
                        value={catTypeKey}
                        onChange={(e) => setCatTypeKey(e.target.value)}
                        required
                        autoComplete="off"
                    />
                    <input
                        placeholder="Display name (e.g. Shoulders)"
                        value={catDisplayName}
                        onChange={(e) => setCatDisplayName(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        min={5}
                        placeholder="Typical session length (minutes)"
                        value={catDuration}
                        onChange={(e) => {
                            const v = parseInt(e.target.value, 10)
                            setCatDuration(Number.isNaN(v) ? 60 : v)
                        }}
                    />
                    <div className={styles.bannerUpload}>
                        <input
                            ref={catBannerInputRef}
                            type="file"
                            accept="image/*"
                            className={styles.hiddenFileInput}
                            onChange={onCatBannerFile}
                        />
                        <div className={styles.bannerUploadRow}>
                            <button
                                type="button"
                                className={`${styles.btn} ${styles.btnGhost}`}
                                onClick={() => catBannerInputRef.current?.click()}
                            >
                                Choose banner image
                            </button>
                            {catBannerPreview && (
                                <button type="button" className={`${styles.btn} ${styles.btnGhost}`} onClick={clearCatBanner}>
                                    Clear image
                                </button>
                            )}
                        </div>
                        <p className={styles.muted}>Optional. JPG, PNG, or WebP. Used as the slide background on the home page.</p>
                        {catBannerPreview && (
                            <div className={styles.bannerPreview}>
                                <img src={catBannerPreview} alt="Banner preview" />
                            </div>
                        )}
                    </div>
                    <button className={`${styles.btn} ${styles.btnPrimary}`} type="submit" disabled={creatingCat}>
                        {creatingCat ? 'Creating…' : 'Create category'}
                    </button>
                </form>
            </div>

            <div className={styles.card}>
                <h2>Add exercise to a category</h2>
                <p className={styles.muted}>Choose a category, then fill in the exercise. Media URL should point to a GIF or image.</p>
                <form className={styles.form} onSubmit={addExercise} style={{ maxWidth: '100%' }}>
                    <select value={selectedKey} onChange={(e) => setSelectedKey(e.target.value)} required>
                        <option value="">Select category</option>
                        {categories.map((c) => (
                            <option key={c.typeKey} value={c.typeKey}>
                                {c.displayName} ({c.exerciseCount} exercises)
                            </option>
                        ))}
                    </select>
                    <input placeholder="Exercise name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <div className={styles.row2}>
                        <input placeholder="Sets" value={sets} onChange={(e) => setSets(e.target.value)} required />
                        <input placeholder="Reps" value={reps} onChange={(e) => setReps(e.target.value)} required />
                    </div>
                    <input
                        placeholder="Media URL (gif or image)"
                        value={mediaUrl}
                        onChange={(e) => setMediaUrl(e.target.value)}
                        required
                    />
                    <select value={mediaType} onChange={(e) => setMediaType(e.target.value as 'gif' | 'image')}>
                        <option value="gif">GIF</option>
                        <option value="image">Image</option>
                    </select>
                    <input
                        placeholder="Optional: exercise link (e.g. when not a GIF)"
                        value={exerciseLink}
                        onChange={(e) => setExerciseLink(e.target.value)}
                    />
                    <textarea
                        placeholder="How to do"
                        value={howToDo}
                        onChange={(e) => setHowToDo(e.target.value)}
                        required
                    />
                    <button className={`${styles.btn} ${styles.btnPrimary}`} type="submit" disabled={saving}>
                        {saving ? 'Saving…' : 'Add exercise'}
                    </button>
                </form>
            </div>

            {detail && (
                <div className={styles.card}>
                    <h2>
                        Current exercises — {detail.displayName}
                    </h2>
                    {detail.exercises.length === 0 ? (
                        <p className={styles.muted}>No exercises yet. Load defaults or add one above.</p>
                    ) : (
                        detail.exercises.map((ex) => (
                            <div key={ex._id} className={styles.exerciseLine}>
                                <span>
                                    {ex.name}{' '}
                                    <span className={styles.muted}>
                                        ({ex.sets} × {ex.reps})
                                    </span>
                                </span>
                                <button type="button" className={styles.btnDanger} onClick={() => removeExercise(ex._id)}>
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    )
}
