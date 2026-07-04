"use client"
import React from 'react'
import './workoutPage.css'
import { useParams } from 'next/navigation'
import type { Exercise, WorkoutPlan } from '@/lib/workoutDefaults'
import { defaultPlansByType } from '@/lib/workoutDefaults'

const WorkoutPage = () => {
    const params = useParams<{ type: string }>()
    const normalizedType = (params?.type || 'chest').toLowerCase()
    const fallback = defaultPlansByType[normalizedType] || defaultPlansByType.chest
    const [workout, setWorkout] = React.useState<WorkoutPlan>(fallback)

    React.useEffect(() => {
        const fb = defaultPlansByType[normalizedType] || defaultPlansByType.chest
        setWorkout(fb)
        const api = process.env.NEXT_PUBLIC_BACKEND_API
        fetch(`${api}/workoutcategories/${encodeURIComponent(normalizedType)}`, {
            credentials: 'include',
        })
            .then((r) => r.json())
            .then((data) => {
                if (data.ok && data.data?.exercises?.length) {
                    const ex: Exercise[] = (data.data.exercises as Exercise[]).map((e) => ({
                        name: e.name,
                        description: e.description,
                        sets: String(e.sets),
                        reps: String(e.reps),
                        mediaUrl: e.mediaUrl,
                        mediaType: e.mediaType === 'image' ? 'image' : 'gif',
                        exerciseLink: e.exerciseLink,
                        howToDo: e.howToDo,
                    }))
                    setWorkout({
                        type: data.data.displayName || fb.type,
                        exercises: ex,
                    })
                }
            })
            .catch(() => undefined)
    }, [normalizedType])

    const renderExerciseBlock = (item: Exercise, index: number) => (
        <div
            key={`${item.name}-${index}`}
            className={index % 2 === 0 ? 'workout__exercise' : 'workout__exercise workout__exercise--reverse'}
        >
            <h3>{index + 1}</h3>
            <div className='workout__exercise__image'>
                <img src={item.mediaUrl} alt={`${item.name} ${item.mediaType === 'gif' ? 'GIF demo' : 'image demo'}`} />
            </div>
            <div className='workout__exercise__content'>
                <h2>{item.name}</h2>
                <span>{item.sets} sets X {item.reps} reps</span>
                <p>{item.description}</p>
                <p><strong>How to do:</strong> {item.howToDo}</p>
                {item.mediaType !== 'gif' && item.exerciseLink && (
                    <div className='workout__exercise__linkBox'>
                        <a href={item.exerciseLink} target='_blank' rel='noopener noreferrer'>
                            Exercise Link
                        </a>
                    </div>
                )}
            </div>
        </div>
    )

    return (
        <div className='workout'>
            <h1 className='mainhead1'>{workout.type} Workouts</h1>
            <div className='workout__exercises'>
                {workout.exercises.map(renderExerciseBlock)}
            </div>
        </div>
    )
}

export default WorkoutPage
