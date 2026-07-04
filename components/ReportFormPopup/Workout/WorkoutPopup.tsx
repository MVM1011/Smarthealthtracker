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

interface WorkoutPopupProps {
    setShowWorkoutPopup: React.Dispatch<React.SetStateAction<boolean>>;
    onPopupClose?: () => void;
}

const WorkoutPopup: React.FC<WorkoutPopupProps> = ({ setShowWorkoutPopup, onPopupClose }) => {
    const [date, setDate] = React.useState<any>(dayjs(new Date()))
    const [done, setDone] = React.useState<number>(1)
    const [items, setItems] = React.useState<any[]>([])

    const getWorkoutData = async () => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/workouttrack/getworkoutsbydate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ date: date.toISOString() }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) setItems(data.data || [])
                else toast.error('Error in getting workout data')
            })
            .catch(() => toast.error('Error in getting workout data'))
    }

    const saveWorkout = async () => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/workouttrack/addworkoutentry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                date: date.toISOString(),
                done,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    toast.success('Workout status saved')
                    getWorkoutData()
                } else {
                    toast.error(data.message || 'Error saving workout data')
                }
            })
            .catch(() => toast.error('Error saving workout data'))
    }

    const deleteWorkout = async (item: any) => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/workouttrack/deleteworkoutentry', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ date: item.date, entryId: item._id }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    toast.success('Workout entry deleted')
                    getWorkoutData()
                } else {
                    toast.error(data.message || 'Error deleting workout data')
                }
            })
            .catch(() => toast.error('Error deleting workout data'))
    }

    React.useEffect(() => {
        getWorkoutData()
    }, [date])

    const workoutDoneForDay = items.length > 0 ? Number(items[0]?.done ?? 1) : 0

    const handleClose = () => {
        setShowWorkoutPopup(false)
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

                <TextField
                    label="Workout Done (0/1)"
                    value={done}
                    InputProps={{ readOnly: true }}
                />
                <TextField
                    label="Saved status for selected day (0/1)"
                    value={workoutDoneForDay}
                    InputProps={{ readOnly: true }}
                />
                <div style={{ display: 'flex', gap: 10 }}>
                    <Button variant="outlined" color='warning' onClick={() => setDone(1)}>Workout Done</Button>
                    <Button variant="outlined" color='warning' onClick={() => setDone(0)}>Not Done</Button>
                </div>

                <Button variant="contained" color='warning' onClick={saveWorkout}>Save</Button>

                <div className='hrline'></div>
                <div className='items'>
                    {items.map((item: any) => (
                        <div className='item' key={item._id}>
                            <h3>{new Date(item.date).toLocaleDateString()}</h3>
                            <h3>{Number(item.done ?? 0) === 1 ? 'Done' : 'Not done'}</h3>
                            <button onClick={() => deleteWorkout(item)}><AiFillDelete /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkoutPopup
