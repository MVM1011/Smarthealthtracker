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
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { toast } from 'react-toastify';

interface SleepPopupProps {
    setShowSleepPopup: React.Dispatch<React.SetStateAction<boolean>>;
    onPopupClose?: () => void;
}

const SleepPopup: React.FC<SleepPopupProps> = ({ setShowSleepPopup, onPopupClose }) => {
    const [date, setDate] = React.useState<any>(dayjs(new Date()))
    const [bedTime, setBedTime] = React.useState<any>(dayjs().hour(22).minute(30))
    const [wakeUpTime, setWakeUpTime] = React.useState<any>(dayjs().add(1, 'day').hour(6).minute(30))
    const [items, setItems] = React.useState<any[]>([])

    const durationInHrs = React.useMemo(() => {
        if (!bedTime || !wakeUpTime) return 0
        let start = bedTime.hour() * 60 + bedTime.minute()
        let end = wakeUpTime.hour() * 60 + wakeUpTime.minute()
        if (end <= start) end += 24 * 60
        return Number(((end - start) / 60).toFixed(2))
    }, [bedTime, wakeUpTime])

    const sleepQuality = React.useMemo(() => {
        if (durationInHrs >= 7 && durationInHrs <= 9) return 'Good'
        if ((durationInHrs >= 6 && durationInHrs < 7) || (durationInHrs > 9 && durationInHrs <= 10)) return 'Average'
        return 'Poor'
    }, [durationInHrs])

    const getSleepData = async () => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/sleeptrack/getsleepbydate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ date: date.toISOString() }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) setItems(data.data || [])
                else toast.error('Error in getting sleep data')
            })
            .catch(() => toast.error('Error in getting sleep data'))
    }

    const saveSleep = async () => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/sleeptrack/addsleepentry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                date: date.toISOString(),
                bedTime: bedTime.format('HH:mm'),
                wakeUpTime: wakeUpTime.format('HH:mm'),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    toast.success('Sleep entry added successfully')
                    getSleepData()
                } else {
                    toast.error(data.message || 'Error in adding sleep data')
                }
            })
            .catch(() => toast.error('Error in adding sleep data'))
    }

    const deleteSleep = async (item: any) => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/sleeptrack/deletesleepentry', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ date: item.date, entryId: item._id }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    toast.success('Sleep entry deleted')
                    getSleepData()
                } else {
                    toast.error(data.message || 'Error deleting sleep data')
                }
            })
            .catch(() => toast.error('Error deleting sleep data'))
    }

    React.useEffect(() => {
        getSleepData()
    }, [date])

    const handleClose = () => {
        setShowSleepPopup(false)
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
                    <TimePicker label="Bed Time" value={bedTime} onChange={(v: any) => setBedTime(v)} />
                    <TimePicker label="Wake-up Time" value={wakeUpTime} onChange={(v: any) => setWakeUpTime(v)} />
                </LocalizationProvider>

                <TextField label="Sleep Duration (hrs)" value={durationInHrs} InputProps={{ readOnly: true }} />
                <TextField label="Sleep Quality" value={sleepQuality} InputProps={{ readOnly: true }} />

                <Button variant="contained" color='warning' onClick={saveSleep}>Save</Button>

                <div className='hrline'></div>
                <div className='items'>
                    {items.map((item: any) => (
                        <div className='item' key={item._id}>
                            <h3>{new Date(item.date).toLocaleDateString()}</h3>
                            <h3>{Number(item.durationInHrs).toFixed(2)} hrs ({item.sleepQuality || 'N/A'})</h3>
                            <button onClick={() => deleteSleep(item)}><AiFillDelete /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SleepPopup
