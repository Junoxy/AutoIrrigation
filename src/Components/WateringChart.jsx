'useClient';
import { Box, Typography } from "@mui/material";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,  } from "recharts";

let wateringData = [
    {
        day: 'Mon',
        moistureLevel: 10,
        wateringAmount: 30,
    },
    {
        day: 'Tue',
        moistureLevel: 50,
        wateringAmount: 130,
    },
    {
        day: 'Wed',
        moistureLevel: 20,
        wateringAmount: 30,
    },
    {
        day: 'Thu',
        moistureLevel: 20,
        wateringAmount: 90,
    },
    {
        day: 'Fri',
        moistureLevel: 0,
        wateringAmount: 30,
    },
    {
        day: 'Sat',
        moistureLevel: 0,
        wateringAmount: 30,
    },
    {
        day: 'Sun',
        moistureLevel: 20,
        wateringAmount: 70,
    },
]



const WateringChart = ({theme}) => {
    return (
        
            <ResponsiveContainer width='100%' height='100%'>
                <AreaChart width={250} height={300} data={wateringData} margin={{right:'50'}}>
                <CartesianGrid strokeDasharray={'5 5'}/>
                <XAxis dataKey={'day'}/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                    <Area type={'monotone'} dataKey={'moistureLevel'} stroke={theme.primary} fill={theme.secondary} />
                    <Area type={'monotone'} dataKey={'wateringAmount'} stroke={theme.primary} fill={theme.secondary}/>
                </AreaChart>
            </ResponsiveContainer>
            
        
    )
}

export default WateringChart;