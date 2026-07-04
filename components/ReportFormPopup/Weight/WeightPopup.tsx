"use client"
import React from 'react'
import '../Water/popup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AiFillDelete, AiOutlineClose } from 'react-icons/ai'
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { toast } from 'react-toastify';

interface WeightPopupProps {
    setShowWeightPopup: React.Dispatch<React.SetStateAction<boolean>>;
    onPopupClose?: () => void;
}

const WeightPopup: React.FC<WeightPopupProps> = ({ setShowWeightPopup, onPopupClose }) => {
    const [date, setDate] = React.useState<any>(dayjs(new Date()))
    const [weightInKg, setWeightInKg] = React.useState<number>(0)
    const [items, setItems] = React.useState<any[]>([])

    const getWeightData = async () => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/weighttrack/getweightbydate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ date: date.toISOString() }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) setItems(data.data || [])
                else toast.error('Error in getting weight data')
            })
            .catch(() => toast.error('Error in getting weight data'))
    }

    const saveWeight = async () => {
        if (!weightInKg || weightInKg <= 0) {
            toast.error('Enter a valid weight in kg')
            return
        }
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/weighttrack/addweightentry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                date: date.toISOString(),
                weightInKg,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    toast.success('Weight saved')
                    getWeightData()
                } else {
                    toast.error(data.message || 'Error saving weight')
                }
            })
            .catch(() => toast.error('Error saving weight'))
    }

    const deleteWeight = async (item: any) => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/weighttrack/deleteweightentry', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ date: item.date, entryId: item._id }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    toast.success('Weight entry deleted')
                    getWeightData()
                } else {
                    toast.error(data.message || 'Error deleting weight entry')
                }
            })
            .catch(() => toast.error('Error deleting weight entry'))
    }

    React.useEffect(() => {
        getWeightData()
    }, [date])

    const handleClose = () => {
        setShowWeightPopup(false)
        onPopupClose?.()
    }

    return (
        <div className='popupout'>
            <div className='popupbox'>
                <button className='close' onClick={handleClose}>
                    <AiOutlineClose />
                </button>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Date" value={date} onChange={(v: any) => setDate(v)} />
                </LocalizationProvider>

                <TextField
                    label="Weight (kg)"
                    type="number"
                    value={weightInKg || ''}
                    onChange={(e) => setWeightInKg(Number(e.target.value))}
                    inputProps={{ min: 1, step: 0.1 }}
                />

                <Button variant="contained" color='warning' onClick={saveWeight}>Save / update for day</Button>

                <div className='hrline'></div>
                <div className='items'>
                    {items.map((item: any) => (
                        <div className='item' key={item._id}>
                            <h3>{new Date(item.date).toLocaleDateString()}</h3>
                            <h3>{Number(item.weight).toFixed(1)} kg</h3>
                            <button type="button" onClick={() => deleteWeight(item)}><AiFillDelete /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WeightPopup
