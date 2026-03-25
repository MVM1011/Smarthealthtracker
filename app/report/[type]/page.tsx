"use client"
import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import './ReportPage.css'
import {AiFillEdit} from 'react-icons/ai';
import "swiper/css";
import "swiper/css/pagination";

import CalorieIntakePopup from '@/components/ReportFormPopup/CalorieIntake/CalorieIntakePopup';

const page = () => {
    const color = '#ffc20e'

    const chartsParams = {
        height: 300,
    };

    const [dataS1, setDataS1] = React.useState<any>(null)
    const [showCalorieIntakePopup, setShowCalorieIntakePopup] = React.useState(false)

    const getDataForS1 = async () => {
        let temp = [
            { date: '2023-09-28', value: 2000 },
            { date: '2023-09-27', value: 2500 },
            { date: '2023-09-26', value: 2700 },
            { date: '2023-09-25', value: 3000 },
            { date: '2023-09-24', value: 2000 },
            { date: '2023-09-23', value: 2300 },
            { date: '2023-09-22', value: 2500 },
            { date: '2023-09-21', value: 2700 },
        ]

        // ✅ Keep numbers (DO NOT stringify)
        const dataForLineChart = temp.map(item => item.value)

        const dataForXAxis = temp.map(item => new Date(item.date))

        setDataS1({
            data: dataForLineChart,
            title: '1 Day Calorie Intake',
            color,
            xAxis: {
                data: dataForXAxis,
                label: 'Last 10 Days',
                scaleType: 'time'
            }
        })
    }

    React.useEffect(() => {
        getDataForS1()
    }, [])

    return (
        <div className='reportpage'>

            {/* Section 1 */}
            <div className='s1'>
                {dataS1 && (
                    <LineChart
                        xAxis={[{
                            id: 'Day',
                            data: dataS1.xAxis.data,
                            scaleType: 'time',
                            label: dataS1.xAxis.label,
                            valueFormatter: (date: Date) =>
                                date.toLocaleDateString('en-IN', {
                                    day: 'numeric',
                                    month: 'short'
                                }) // ✅ MUST return string
                        }]}
                        series={[{
                            data: dataS1.data,
                            label: dataS1.title,
                            color: dataS1.color,
                        }]}
                        {...chartsParams}
                    />
                )}
            </div>

            <div className='s2'>
                {dataS1 && (
                    <LineChart
                        xAxis={[{
                            data: dataS1.xAxis.data,
                            scaleType: 'time',
                            valueFormatter: (date: Date) =>
                                date.toLocaleDateString('en-IN', {
                                    day: 'numeric',
                                    month: 'short'
                                })
                        }]}
                        series={[{
                            data: dataS1.data,
                            label: dataS1.title,
                            color: dataS1.color,
                        }]}
                        {...chartsParams}
                    />
                )}
            </div>

            {/* Section 3 */}
            <div className='s3'>
                {dataS1 && (
                    <LineChart
                        xAxis={[{
                            data: dataS1.xAxis.data,
                            scaleType: 'time',
                            valueFormatter: (date: Date) =>
                                date.toLocaleDateString('en-IN', {
                                    day: 'numeric',
                                    month: 'short'
                                })
                        }]}
                        series={[{
                            data: dataS1.data,
                            label: dataS1.title,
                            color: dataS1.color,
                        }]}
                        {...chartsParams}
                    />
                )}
            </div>

            {/* Section 4 */}
            <div className='s4'>
                {dataS1 && (
                    <LineChart
                        xAxis={[{
                            data: dataS1.xAxis.data,
                            scaleType: 'time',
                            valueFormatter: (date: Date) =>
                                date.toLocaleDateString('en-IN', {
                                    day: 'numeric',
                                    month: 'short'
                                })
                        }]}
                        series={[{
                            data: dataS1.data,
                            label: dataS1.title,
                            color: dataS1.color,
                        }]}
                        {...chartsParams}
                    />
                )}
            </div>

            {/* Edit Button */}
            <button
                className='editbutton'
                onClick={() => setShowCalorieIntakePopup(true)}
            >
                <AiFillEdit />
            </button>

            {/* Popup */}
            {showCalorieIntakePopup && (
                <CalorieIntakePopup
                    setShowCalorieIntakePopup={setShowCalorieIntakePopup}
                />
            )}
        </div>
    )
}

export default page