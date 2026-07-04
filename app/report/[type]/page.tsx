"use client"
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import './ReportPage.css'
import { AiFillEdit } from 'react-icons/ai'
import CalorieIntakePopup from '@/components/ReportFormPopup/CalorieIntake/CalorieIntakePopup';
import SleepPopup from '@/components/ReportFormPopup/Sleep/SleepPopup';
import StepPopup from '@/components/ReportFormPopup/Step/StepPopup';
import WaterPopup from '@/components/ReportFormPopup/Water/WaterPopup';
import WorkoutPopup from '@/components/ReportFormPopup/Workout/WorkoutPopup';
import WeightPopup from '@/components/ReportFormPopup/Weight/WeightPopup';
import { usePathname } from 'next/navigation';

const page = () => {
    const color = '#ffc20e'
    const pathname = usePathname();
    const reportName = decodeURIComponent(pathname.split('/').pop() || '')

    const [goalValue, setGoalValue] = React.useState<number | null>(null)
    const [todayValue, setTodayValue] = React.useState<number>(0)
    const [avg7, setAvg7] = React.useState<number>(0)
    const [avg31, setAvg31] = React.useState<number>(0)
    const [avg12Months, setAvg12Months] = React.useState<number>(0)
    const [sleepQuality, setSleepQuality] = React.useState<string>('N/A')
    const [sleepTrend, setSleepTrend] = React.useState<string>('Not enough data')
    const [showCalorieIntakePopup, setShowCalorieIntakePopup] = React.useState<boolean>(false)
    const [showSleepPopup, setShowSleepPopup] = React.useState<boolean>(false)
    const [showStepPopup, setShowStepPopup] = React.useState<boolean>(false)
    const [showWaterPopup, setShowWaterPopup] = React.useState<boolean>(false)
    const [showWorkoutPopup, setShowWorkoutPopup] = React.useState<boolean>(false)
    const [showWeightPopup, setShowWeightPopup] = React.useState<boolean>(false)

    const msPerDay = 24 * 60 * 60 * 1000

    const toYMDLocal = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    const startOfToday = () => {
        const d = new Date()
        return new Date(d.getFullYear(), d.getMonth(), d.getDate())
    }

    const calcDaysInclusive = (start: Date, end: Date) => {
        const startMs = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime()
        const endMs = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime()
        return Math.round((endMs - startMs) / msPerDay) + 1
    }

    const computeAverageForRange = (entries: any[], start: Date, end: Date, days: number) => {
        const daily: Record<string, number> = {}
        const startKey = toYMDLocal(start)
        const endKey = toYMDLocal(end)
        for (let i = 0; i < days; i++) {
            const day = new Date(start.getTime() + i * msPerDay)
            daily[toYMDLocal(day)] = 0
        }
        for (const entry of entries) {
            const d = new Date(entry.date)
            const key = toYMDLocal(d)
            if (key >= startKey && key <= endKey && daily[key] !== undefined) {
                daily[key] += Number(entry.value || 0)
            }
        }
        return Object.values(daily).reduce((a, b) => a + b, 0) / days
    }

    const computeSumForRange = (entries: any[], start: Date, end: Date, days: number) => {
        const daily: Record<string, number> = {}
        const startKey = toYMDLocal(start)
        const endKey = toYMDLocal(end)
        for (let i = 0; i < days; i++) {
            const day = new Date(start.getTime() + i * msPerDay)
            daily[toYMDLocal(day)] = 0
        }
        for (const entry of entries) {
            const d = new Date(entry.date)
            const key = toYMDLocal(d)
            if (key >= startKey && key <= endKey && daily[key] !== undefined) {
                daily[key] += Number(entry.value || 0)
            }
        }
        return Object.values(daily).reduce((a, b) => a + b, 0)
    }

    const analyzeSleepTrend = (entries: any[]) => {
        if (entries.length < 4) return 'Not enough data'
        const sorted = [...entries].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        const first = sorted.slice(0, Math.floor(sorted.length / 2))
        const second = sorted.slice(Math.floor(sorted.length / 2))
        const avg = (arr: any[]) => arr.reduce((s, e) => s + Number(e.durationInHrs || 0), 0) / arr.length
        const delta = avg(second) - avg(first)
        if (delta > 0.4) return 'Improving'
        if (delta < -0.4) return 'Declining'
        return 'Stable'
    }

    const buildCommands = (value: number, goal: number, label: string) => {
        if (reportName === 'Sleep') {
            if (value >= goal) {
                return [
                    `Great! You met/exceeded your ${label} sleep goal by ~${Math.round(value - goal)} hrs.`,
                    'Keep bedtime and wake-up time consistent each day.',
                    'Maintain a dark, cool room and avoid screens before sleep.',
                ]
            }
            return [
                `You are below your ${label} sleep goal by ~${Math.round(goal - value)} hrs.`,
                'Sleep 30-45 minutes earlier tonight and avoid late caffeine.',
                'Use a calming pre-sleep routine (stretching, low light, no phone).',
            ]
        }
        if (reportName === 'Steps') {
            if (value >= goal) {
                return [
                    `Great! You met/exceeded your ${label} step goal by ~${Math.round(value - goal)} steps.`,
                    'Maintain your activity rhythm and stay hydrated.',
                    'Add light stretching after long walks to recover better.',
                ]
            }
            return [
                `You are below your ${label} step goal by ~${Math.round(goal - value)} steps.`,
                'Take 2-3 short walks (10-15 min) through the day.',
                'Use stairs and walking breaks every hour to raise daily steps.',
            ]
        }
        if (reportName === 'Water') {
            if (value >= goal) {
                return [
                    `Great! You met/exceeded your ${label} water goal by ~${Math.round(value - goal)} ml.`,
                    'Keep it up, drinking enough water supports good health.',
                    'Spread hydration evenly throughout the day for better absorption.',
                ]
            }
            return [
                `You are below your ${label} water goal by ~${Math.round(goal - value)} ml.`,
                'Carry a bottle and drink small amounts every 30-60 minutes.',
                'Set reminders to complete at least half your goal before afternoon.',
            ]
        }
        if (reportName === 'Workout') {
            if (value >= goal) {
                return [
                    `Great! You met/exceeded your ${label} workout goal.`,
                    'Keep it up and maintain consistency.',
                    'Focus on recovery, sleep, and progressive overload.',
                ]
            }
            return [
                `You are below your ${label} workout goal.`,
                'Schedule fixed workout slots to stay consistent.',
                'Start with short sessions and build momentum day by day.',
            ]
        }

        if (reportName === 'Weight') {
            const g = Number(goal)
            const v = Number(value)
            if (!g || g <= 0) {
                return [
                    'Set or verify your height in your profile so a healthy target weight can be calculated.',
                    'Log your weight with the edit button to track progress over time.',
                    'Consider discussing a personal target with a healthcare professional.',
                ]
            }
            const diff = Math.abs(v - g)
            if (diff < 0.5) {
                return [
                    `You are on track with your ${label} target (~${g.toFixed(1)} kg).`,
                    'Keep balanced meals, stay hydrated, and move regularly.',
                    'Continue logging weight so you can adjust early if needed.',
                ]
            }
            if (v > g) {
                return [
                    `Your ${label} is above target by ~${diff.toFixed(1)} kg.`,
                    'Use a modest calorie deficit and emphasize protein, vegetables, and whole foods.',
                    'Add daily walking or cardio and review portion sizes to move toward your goal.',
                ]
            }
            return [
                `Your ${label} is below target by ~${diff.toFixed(1)} kg.`,
                'Eat nutrient-dense meals with healthy fats and lean protein.',
                'Include resistance training to support lean gain and log weight weekly.',
            ]
        }

        if (value > goal) {
            return [
                `You exceeded your ${label} goal by ~${Math.round(value - goal)} kcal.`,
                'Reduce portion sizes and choose lean proteins + veggies.',
                'Avoid sugary snacks/drinks and stay active.',
            ]
        }
        return [
            `You are short of your ${label} goal by ~${Math.round(goal - value)} kcal.`,
            'Add balanced calories (protein + complex carbs).',
            'Increase healthy portions gradually if needed.',
        ]
    }

    const chartsParams = { height: 220, borderRadius: 12, margin: { top: 10, bottom: 30, left: 60, right: 10 } }
    const goalBarColor = '#60a5fa'

    const loadReportData = React.useCallback(async () => {
        const isCalorie = reportName === 'Calorie Intake'
        const isSleep = reportName === 'Sleep'
        const isSteps = reportName === 'Steps'
        const isWater = reportName === 'Water'
        const isWorkout = reportName === 'Workout'
        const isWeight = reportName === 'Weight'
        if (!isCalorie && !isSleep && !isSteps && !isWater && !isWorkout && !isWeight) return

        const [goalRes, entriesRes] = await Promise.all(
            isCalorie
                ? [
                    fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/calorieintake/getgoalcalorieintake', { method: 'GET', credentials: 'include' }).then((r) => r.json()),
                    fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/calorieintake/getcalorieintakebylimit', {
                        method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ limit: 400 })
                    }).then((r) => r.json()),
                ]
                : isSleep ? [
                    fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/sleeptrack/getusersleep', { method: 'GET', credentials: 'include' }).then((r) => r.json()),
                    fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/sleeptrack/getsleepbylimit', {
                        method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ limit: 400 })
                    }).then((r) => r.json()),
                ] : isSteps ? [
                    fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/steptrack/getusergoalsteps', { method: 'GET', credentials: 'include' }).then((r) => r.json()),
                    fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/steptrack/getstepsbylimit', {
                        method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ limit: 400 })
                    }).then((r) => r.json()),
                ] : isWater ? [
                    fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/watertrack/getusergoalwater', { method: 'GET', credentials: 'include' }).then((r) => r.json()),
                    fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/watertrack/getwaterbylimit', {
                        method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ limit: 400 })
                    }).then((r) => r.json()),
                ] : isWeight ? [
                    fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/weighttrack/getusergoalweight', { method: 'GET', credentials: 'include' }).then((r) => r.json()),
                    fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/weighttrack/getweightbylimit', {
                        method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ limit: 400 })
                    }).then((r) => r.json()),
                ] : [
                    fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/workouttrack/getusergoalworkout', { method: 'GET', credentials: 'include' }).then((r) => r.json()),
                    fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/workouttrack/getworkoutsbylimit', {
                        method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ limit: 400 })
                    }).then((r) => r.json()),
                ]
        )

        if (!goalRes?.ok || !entriesRes?.ok) return
        const goal = Number(
            isCalorie ? goalRes?.data?.maxCalorieIntake :
            isSleep ? goalRes?.data?.goalSleep :
            isSteps ? goalRes?.data?.totalSteps :
            isWater ? goalRes?.data?.goalWater :
            isWeight ? (goalRes?.data?.goalWeight ?? 0) :
            goalRes?.data?.goal || 0
        )
        setGoalValue(goal)

        const rawEntries = entriesRes.data || []
        const entries = rawEntries.map((e: any) => ({
            date: e.date,
            value: Number(
                isCalorie ? e.calorieIntake :
                isSleep ? e.durationInHrs :
                isSteps ? e.steps :
                isWater ? e.amountInMilliliters :
                isWeight ? e.weight :
                Number(e.done ?? 0)
            )
        }))

        const end = startOfToday()
        const start7 = new Date(end.getTime()); start7.setDate(start7.getDate() - 6)
        const start31 = new Date(end.getTime()); start31.setDate(start31.getDate() - 30)
        const start12 = new Date(end.getTime()); start12.setMonth(start12.getMonth() - 11)

        const days7 = calcDaysInclusive(start7, end)
        const days31 = calcDaysInclusive(start31, end)
        const days12 = calcDaysInclusive(start12, end)

        const todayKey = toYMDLocal(end)
        let todayTotal = 0
        for (const entry of entries) {
            if (toYMDLocal(new Date(entry.date)) === todayKey) todayTotal += entry.value
        }

        const sortedByDate = [...entries].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        const latestWeight = sortedByDate.length ? sortedByDate[sortedByDate.length - 1].value : 0

        const t = isWeight
            ? Number(latestWeight.toFixed(2))
            : Number(todayTotal.toFixed(2))
        const a7 = isWorkout ? Number(computeSumForRange(entries, start7, end, days7).toFixed(2)) : Number(computeAverageForRange(entries, start7, end, days7).toFixed(2))
        const a31 = isWorkout ? Number(computeSumForRange(entries, start31, end, days31).toFixed(2)) : Number(computeAverageForRange(entries, start31, end, days31).toFixed(2))
        const a12 = isWorkout ? Number(computeSumForRange(entries, start12, end, days12).toFixed(2)) : Number(computeAverageForRange(entries, start12, end, days12).toFixed(2))

        setTodayValue(t)
        setAvg7(a7)
        setAvg31(a31)
        setAvg12Months(a12)

        if (isSleep) {
            const quality = (t >= 7 && t <= 9) ? 'Good' : ((t >= 6 && t < 7) || (t > 9 && t <= 10)) ? 'Average' : 'Poor'
            const trend = analyzeSleepTrend(rawEntries)
            setSleepQuality(quality)
            setSleepTrend(trend)
        } else {
            setSleepQuality('N/A')
            setSleepTrend('N/A')
        }
    }, [reportName])

    React.useEffect(() => { loadReportData() }, [loadReportData])

    return (
        <div className='reportpage'>
            <div className='s1'>
                {goalValue !== null && (
                    <>
                        <div className='graphBlock'>
                            <h2 className='graphTitle'>
                                {
                                    reportName === 'Sleep' ? 'Current Day Sleep' :
                                    reportName === 'Steps' ? 'Current Day Steps' :
                                    reportName === 'Water' ? 'Current Day Water Intake' :
                                    reportName === 'Workout' ? 'Current Day Workout' :
                                    reportName === 'Weight' ? 'Current vs target weight' :
                                    'Current Day Intake'
                                }
                            </h2>
                            <BarChart
                                {...chartsParams}
                                sx={{ color: 'var(--text)' }}
                                xAxis={[{ data: [reportName === 'Weight' ? 'Latest' : 'Today'], scaleType: 'band', tickLabelStyle: { fill: 'var(--text)' }, labelStyle: { fill: 'var(--text)' } }]}
                                yAxis={[{ tickLabelStyle: { fill: 'var(--text)' }, labelStyle: { fill: 'var(--text)' } }]}
                                series={[
                                    { data: [todayValue], label: reportName === 'Sleep' ? 'Sleep Hrs' : reportName === 'Steps' ? 'Steps' : reportName === 'Water' ? 'Water (ml)' : reportName === 'Workout' ? 'Workout Done (0/1)' : reportName === 'Weight' ? 'Current (kg)' : 'Intake', color: color },
                                    { data: [reportName === 'Workout' ? 1 : goalValue], label: reportName === 'Weight' ? 'Target (kg)' : 'Goal', color: goalBarColor },
                                ]}
                            />
                            <div className='graphCommands'>{buildCommands(todayValue, reportName === 'Workout' ? 1 : goalValue, reportName === 'Weight' ? 'latest weight' : 'current day').map((t, i) => <p key={i}>{t}</p>)}</div>
                            {reportName === 'Sleep' && <p className='sleepInsights'>Quality: <strong>{sleepQuality}</strong> | Trend: <strong>{sleepTrend}</strong></p>}
                        </div>

                        <div className='graphBlock'>
                            <h2 className='graphTitle'>{reportName === 'Workout' ? 'Workout done (last 7 days)' : reportName === 'Weight' ? 'Average weight (7 days)' : 'Average (7 days)'}</h2>
                            <BarChart {...chartsParams} sx={{ color: 'var(--text)' }} xAxis={[{ data: [reportName === 'Workout' ? 'Done (7d)' : 'Avg (7d)'], scaleType: 'band', tickLabelStyle: { fill: 'var(--text)' } }]} yAxis={[{ tickLabelStyle: { fill: 'var(--text)' } }]} series={[{ data: [avg7], label: reportName === 'Sleep' ? 'Avg Sleep Hrs' : reportName === 'Steps' ? 'Avg Steps' : reportName === 'Water' ? 'Avg Water (ml)' : reportName === 'Workout' ? 'Workout days done' : reportName === 'Weight' ? 'Avg weight (kg)' : 'Avg Intake', color }, { data: [reportName === 'Workout' ? 7 : goalValue], label: reportName === 'Weight' ? 'Target (kg)' : 'Goal', color: goalBarColor }]} />
                            <div className='graphCommands'>{buildCommands(avg7, reportName === 'Workout' ? 7 : goalValue, reportName === 'Workout' ? 'last 7 days' : reportName === 'Weight' ? '7-day average weight' : '7-day average').map((t, i) => <p key={i}>{t}</p>)}</div>
                        </div>

                        <div className='graphBlock'>
                            <h2 className='graphTitle'>{reportName === 'Workout' ? 'Workout done (last 31 days)' : reportName === 'Weight' ? 'Average weight (31 days)' : 'Average (31 days)'}</h2>
                            <BarChart {...chartsParams} sx={{ color: 'var(--text)' }} xAxis={[{ data: [reportName === 'Workout' ? 'Done (31d)' : 'Avg (31d)'], scaleType: 'band', tickLabelStyle: { fill: 'var(--text)' } }]} yAxis={[{ tickLabelStyle: { fill: 'var(--text)' } }]} series={[{ data: [avg31], label: reportName === 'Sleep' ? 'Avg Sleep Hrs' : reportName === 'Steps' ? 'Avg Steps' : reportName === 'Water' ? 'Avg Water (ml)' : reportName === 'Workout' ? 'Workout days done' : reportName === 'Weight' ? 'Avg weight (kg)' : 'Avg Intake', color }, { data: [reportName === 'Workout' ? 31 : goalValue], label: reportName === 'Weight' ? 'Target (kg)' : 'Goal', color: goalBarColor }]} />
                            <div className='graphCommands'>{buildCommands(avg31, reportName === 'Workout' ? 31 : goalValue, reportName === 'Workout' ? 'last 31 days' : reportName === 'Weight' ? '31-day average weight' : '31-day average').map((t, i) => <p key={i}>{t}</p>)}</div>
                        </div>

                        <div className='graphBlock'>
                            <h2 className='graphTitle'>{reportName === 'Workout' ? 'Workout done (last 12 months)' : reportName === 'Weight' ? 'Average weight (12 months)' : 'Average (12 months)'}</h2>
                            <BarChart {...chartsParams} sx={{ color: 'var(--text)' }} xAxis={[{ data: [reportName === 'Workout' ? 'Done (12mo)' : 'Avg (12mo)'], scaleType: 'band', tickLabelStyle: { fill: 'var(--text)' } }]} yAxis={[{ tickLabelStyle: { fill: 'var(--text)' } }]} series={[{ data: [avg12Months], label: reportName === 'Sleep' ? 'Avg Sleep Hrs' : reportName === 'Steps' ? 'Avg Steps' : reportName === 'Water' ? 'Avg Water (ml)' : reportName === 'Workout' ? 'Workout days done' : reportName === 'Weight' ? 'Avg weight (kg)' : 'Avg Intake', color }, { data: [reportName === 'Workout' ? 365 : goalValue], label: reportName === 'Weight' ? 'Target (kg)' : 'Goal', color: goalBarColor }]} />
                            <div className='graphCommands'>{buildCommands(avg12Months, reportName === 'Workout' ? 365 : goalValue, reportName === 'Workout' ? 'last 12 months' : reportName === 'Weight' ? '12-month average weight' : '12-month average').map((t, i) => <p key={i}>{t}</p>)}</div>
                        </div>

                    </>
                )}
            </div>

            <button className='editbutton' onClick={() => {
                if (reportName === 'Calorie Intake') setShowCalorieIntakePopup(true)
                if (reportName === 'Sleep') setShowSleepPopup(true)
                if (reportName === 'Steps') setShowStepPopup(true)
                if (reportName === 'Water') setShowWaterPopup(true)
                if (reportName === 'Workout') setShowWorkoutPopup(true)
                if (reportName === 'Weight') setShowWeightPopup(true)
            }}>
                <AiFillEdit />
            </button>

            {showCalorieIntakePopup && <CalorieIntakePopup setShowCalorieIntakePopup={setShowCalorieIntakePopup} onPopupClose={loadReportData} />}
            {showSleepPopup && <SleepPopup setShowSleepPopup={setShowSleepPopup} onPopupClose={loadReportData} />}
            {showStepPopup && <StepPopup setShowStepPopup={setShowStepPopup} onPopupClose={loadReportData} />}
            {showWaterPopup && <WaterPopup setShowWaterPopup={setShowWaterPopup} onPopupClose={loadReportData} />}
            {showWorkoutPopup && <WorkoutPopup setShowWorkoutPopup={setShowWorkoutPopup} onPopupClose={loadReportData} />}
            {showWeightPopup && <WeightPopup setShowWeightPopup={setShowWeightPopup} onPopupClose={loadReportData} />}
        </div>
    )
}

export default page
