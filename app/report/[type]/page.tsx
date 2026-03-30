"use client"
import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import './ReportPage.css'
import { AiFillEdit } from 'react-icons/ai'
import CalorieIntakePopup from '@/components/ReportFormPopup/CalorieIntake/CalorieIntakePopup';
import { usePathname } from 'next/navigation';

const page = () => {
    const color = '#ffc20e'
    const pathname = usePathname();
    console.log(pathname)

    const chartsParams = {
        height: 300,
    };

    const [dataS1, setDataS1] = React.useState<any>(null)
    //const [showCalorieIntakePopup, setShowCalorieIntakePopup] = React.useState(false)

    const getDataForS1 = async () => {

        if(pathname == '/report/Calorie%20Intake') {
            fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/calorieintake/getcalorieintakebylimit',{
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ limit: 10})        
        })
        .then(res => res.json())
        .then(data => {
            if(data.ok) {
                let temp = data.data.map((item: any) => {
                    return {
                        date: item.date,
                        value: item.calorieIntake,
                        unit: 'kcal'
                    }
                })
                console.log(temp)
                let dataForLineChart = temp.map((item: any) => {
                    let val = Number(item.value)
                    return val
                })

               let dataForXAxis = temp.map((item: any) => {
                let val = new Date(item.date)
                return val
               })
           
               setDataS1({
                data: dataForLineChart,
                title: '1 Day Calorie Intake',
                color: color,
                xAxis: {
                    data: dataForXAxis,
                    label: 'Last 10 Days',
                    scaleType: 'time'
                }
               })

            }
            else {
                setDataS1([])
            }
        })
        .catch(err => {
            console.log(err)
        })
    } else {
         alert('Get data for other reports')
    }
    
}

    React.useEffect(() => {
        getDataForS1()
    }, [])

   
   const [showCalorieIntakePopup, setShowCalorieIntakePopup] = React.useState<boolean>(false)

    return (
        <div className='reportpage'>
            
                
                <div className='s1'>
                    {
                        dataS1 &&
                        <LineChart
                        xAxis={[{
                            id: 'Day',
                            data: dataS1.xAxis.data,
                            scaleType: dataS1.xAxis.scaleType,
                            label: dataS1.xAxis.label,
                            valueFormatter: (date: any) => {
                                return date.getDate().toString();
                            }
                        }]}
                        series={[
                            {
                                data: dataS1.data,
                                label: dataS1.title,
                                color: dataS1.color,
                            },
                        ]}
                        {...chartsParams}
                    />

                    }

                </div>
       
            

            <button className='editbutton'
                onClick={() => {
                    if(pathname == '/report/Calorie%20Intake') {
                         setShowCalorieIntakePopup(true)
                    }
                    else
                    {
                        alert('Show popup for other reports')
                    }

                }}
            >
                <AiFillEdit />
            </button>

            {
                showCalorieIntakePopup &&

                <CalorieIntakePopup setShowCalorieIntakePopup={setShowCalorieIntakePopup} />

            }
        </div>
    )
}

export default page

