"use client"
import React from 'react'
import './popup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AiFillDelete, AiOutlineClose } from 'react-icons/ai'
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { toast } from 'react-toastify';

interface StepPopupProps {
    setShowStepPopup: React.Dispatch<React.SetStateAction<boolean>>;
    onPopupClose?: () => void;
}

const StepPopup: React.FC<StepPopupProps> = ({ setShowStepPopup, onPopupClose }) => {
    const [date, setDate] = React.useState<any>(dayjs(new Date()))
    const [detectedSteps, setDetectedSteps] = React.useState<number>(0)
    const [isTracking, setIsTracking] = React.useState<boolean>(false)
    const [supportMessage, setSupportMessage] = React.useState<string>('Ready to detect motion.')
    const [liveMagnitude, setLiveMagnitude] = React.useState<number>(0)
    const [liveDelta, setLiveDelta] = React.useState<number>(0)
    const [items, setItems] = React.useState<any[]>([])
    const prevMagnitudeRef = React.useRef<number | null>(null)
    const lastStepAtRef = React.useRef<number>(0)
    const sensitivityRef = React.useRef<number>(0.9)
    const handlerRef = React.useRef<((event: DeviceMotionEvent) => void) | null>(null)

    const getStepData = async () => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/steptrack/getstepsbydate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ date: date.toISOString() }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) setItems(data.data || [])
                else toast.error('Error in getting step data')
            })
            .catch(() => toast.error('Error in getting step data'))
    }

    const stopTracking = React.useCallback(() => {
        if (handlerRef.current) {
            window.removeEventListener('devicemotion', handlerRef.current as EventListener)
            handlerRef.current = null
        }
        setIsTracking(false)
    }, [])

    const startTracking = async () => {
        if (!('DeviceMotionEvent' in window)) {
            setSupportMessage('Motion sensor not supported. Use a mobile browser with motion sensors.')
            return
        }

        const motionEventAny = DeviceMotionEvent as any
        if (typeof motionEventAny.requestPermission === 'function') {
            const permission = await motionEventAny.requestPermission()
            if (permission !== 'granted') {
                setSupportMessage('Motion permission denied. Allow motion access in browser settings.')
                return
            }
        }

        prevMagnitudeRef.current = null
        lastStepAtRef.current = 0

        const handler = (event: DeviceMotionEvent) => {
            const acc = event.accelerationIncludingGravity
            if (!acc) return
            const x = acc.x || 0
            const y = acc.y || 0
            const z = acc.z || 0
            const magnitude = Math.sqrt(x * x + y * y + z * z)
            setLiveMagnitude(Number(magnitude.toFixed(2)))

            if (prevMagnitudeRef.current === null) {
                prevMagnitudeRef.current = magnitude
                return
            }
            const delta = Math.abs(magnitude - prevMagnitudeRef.current)
            setLiveDelta(Number(delta.toFixed(2)))
            prevMagnitudeRef.current = magnitude

            const now = Date.now()
            const refractoryMs = 280 // prevent double counts for same step motion
            if (delta > sensitivityRef.current && now - lastStepAtRef.current > refractoryMs) {
                lastStepAtRef.current = now
                setDetectedSteps((prev) => prev + 1)
            }
        }

        handlerRef.current = handler
        window.addEventListener('devicemotion', handler as EventListener)
        setSupportMessage('Motion tracking active. Walk with phone in hand/pocket for better accuracy.')
        setIsTracking(true)
    }

    const saveSteps = async (silent = false) => {
        if (detectedSteps <= 0) return
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/steptrack/addstepentry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                date: date.toISOString(),
                steps: detectedSteps,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    if (!silent) toast.success('Steps saved successfully')
                    getStepData()
                } else {
                    if (!silent) toast.error(data.message || 'Error saving step data')
                }
            })
            .catch(() => {
                if (!silent) toast.error('Error saving step data')
            })
    }

    const deleteStep = async (item: any) => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/steptrack/deletestepentry', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ date: item.date, entryId: item._id }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    toast.success('Step entry deleted')
                    getStepData()
                } else {
                    toast.error(data.message || 'Error deleting step data')
                }
            })
            .catch(() => toast.error('Error deleting step data'))
    }

    React.useEffect(() => {
        getStepData()
    }, [date])

    React.useEffect(() => {
        return () => stopTracking()
    }, [stopTracking])

    React.useEffect(() => {
        // Auto-sync every 30 detected steps while tracking.
        if (isTracking && detectedSteps > 0 && detectedSteps % 30 === 0) {
            saveSteps(true)
        }
    }, [detectedSteps, isTracking])

    const handleClose = () => {
        if (detectedSteps > 0) {
            saveSteps(true)
        }
        stopTracking()
        setShowStepPopup(false)
        onPopupClose?.()
    }

    return (
        <div className='popupout'>
            <div className='popupbox'>
                <button className='close' onClick={handleClose}>
                    <AiOutlineClose />
                </button>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Select Date" value={date} onChange={(v: any) => setDate(v)} />
                </LocalizationProvider>

                <TextField label="Detected Steps" value={detectedSteps} InputProps={{ readOnly: true }} />
                <TextField label="Tracking Status" value={supportMessage} InputProps={{ readOnly: true }} />
                <TextField label="Live Magnitude" value={liveMagnitude} InputProps={{ readOnly: true }} />
                <TextField label="Live Delta" value={liveDelta} InputProps={{ readOnly: true }} />

                <div style={{ display: 'flex', gap: 10 }}>
                    {!isTracking ? (
                        <Button variant="contained" color='warning' onClick={startTracking}>Start Motion Tracking</Button>
                    ) : (
                        <Button variant="contained" color='warning' onClick={() => { stopTracking(); saveSteps(true) }}>Stop Tracking</Button>
                    )}
                    <Button variant="contained" color='warning' onClick={saveSteps}>Save Steps</Button>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                    <Button variant="outlined" color='warning' onClick={() => setDetectedSteps((s) => s + 100)}>+100 Steps</Button>
                    <Button variant="outlined" color='warning' onClick={() => setDetectedSteps((s) => s + 500)}>+500 Steps</Button>
                    <Button variant="outlined" color='warning' onClick={() => setDetectedSteps(0)}>Reset</Button>
                </div>

                <div className='hrline'></div>
                <div className='items'>
                    {items.map((item: any) => (
                        <div className='item' key={item._id}>
                            <h3>{new Date(item.date).toLocaleDateString()}</h3>
                            <h3>{item.steps} steps</h3>
                            <button onClick={() => deleteStep(item)}><AiFillDelete /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StepPopup
