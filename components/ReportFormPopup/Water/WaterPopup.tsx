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

interface WaterPopupProps {
    setShowWaterPopup: React.Dispatch<React.SetStateAction<boolean>>;
    onPopupClose?: () => void;
}

const WaterPopup: React.FC<WaterPopupProps> = ({ setShowWaterPopup, onPopupClose }) => {
    const [date, setDate] = React.useState<any>(dayjs(new Date()))
    const [time, setTime] = React.useState<any>(dayjs(new Date()))
    const [amountInMilliliters, setAmountInMilliliters] = React.useState<number>(0)
    const [items, setItems] = React.useState<any[]>([])

    const getWaterData = async () => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/watertrack/getwaterbydate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ date: date.toISOString() }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) setItems(data.data || [])
                else toast.error('Error in getting water data')
            })
            .catch(() => toast.error('Error in getting water data'))
    }

    const saveWater = async () => {
        const combinedDateTime = dayjs(date)
            .hour(time.hour())
            .minute(time.minute())
            .second(0)
            .millisecond(0)

        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/watertrack/addwaterentry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                date: combinedDateTime.toISOString(),
                amountInMilliliters,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    toast.success('Water intake saved')
                    getWaterData()
                } else {
                    toast.error(data.message || 'Error saving water data')
                }
            })
            .catch(() => toast.error('Error saving water data'))
    }

    const deleteWater = async (item: any) => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/watertrack/deletewaterentry', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ date: item.date, entryId: item._id }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    toast.success('Water entry deleted')
                    getWaterData()
                } else {
                    toast.error(data.message || 'Error deleting water data')
                }
            })
            .catch(() => toast.error('Error deleting water data'))
    }

    React.useEffect(() => {
        getWaterData()
    }, [date])

    const handleClose = () => {
        setShowWaterPopup(false)
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
                    <TimePicker label="Select Time" value={time} onChange={(v: any) => setTime(v)} />
                </LocalizationProvider>

                <TextField
                    label="Water Intake (ml)"
                    type="number"
                    value={amountInMilliliters}
                    onChange={(e) => setAmountInMilliliters(Number(e.target.value))}
                />

                <Button variant="contained" color='warning' onClick={saveWater}>Save</Button>

                <div className='hrline'></div>
                <div className='items'>
                    {items.map((item: any) => (
                        <div className='item' key={item._id}>
                            <h3>
                                {new Date(item.date).toLocaleDateString()} {new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </h3>
                            <h3>{item.amountInMilliliters} ml</h3>
                            <button onClick={() => deleteWater(item)}><AiFillDelete /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WaterPopup
