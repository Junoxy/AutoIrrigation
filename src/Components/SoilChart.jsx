'useClient';
import { Box, Typography } from "@mui/material";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,  } from "recharts";

let soilData = [
    {
        day: 'Mon',
        PH: 10,
        Temp: 12,
        
    },
    {
        day: 'Tue',
        PH: 50,
        Temp: 12,
    },
    {
        day: 'Wed',
        PH: 20,
        Temp: 22,
    },
    {
        day: 'Thu',
        PH: 20,
        Temp: 2,
    },
    {
        day: 'Fri',
        PH: 0,
        Temp: 2,
    },
    {
        day: 'Sat',
        PH: 0,
        Temp: 5,
    },
    {
        day: 'Sun',
        PH: 20,
        Temp: 12,
    },
]



const SoilChart = ({theme}) => {
    return (
        
            <ResponsiveContainer width='100%' height='100%'>
                <AreaChart width={250} height={300} data={soilData} margin={{right:'50'}}>
                <CartesianGrid strokeDasharray={'5 5'}/>
                <XAxis dataKey={'day'}/>
                <YAxis />
                <Tooltip/>
                <Legend/>
                    <Area type={'monotone'} dataKey={'PH'} stroke={theme.primary} fill={theme.secondary} />
                    <Area type={'monotone'} dataKey={'Temp'} stroke={theme.primary} fill={theme.secondary} />
                </AreaChart>
            </ResponsiveContainer>
            
        
    )
}

export default SoilChart;