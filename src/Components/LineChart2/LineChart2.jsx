import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const LineChart2 = (props) => {
    return (
        <LineChart
            width={props.phone ? 250 : props.tab ? 450 : 350}
            height={280}
            data={props.data}
            margin={{ top: 20, bottom: 5, }}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#F88757" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#259DA8" />
        </LineChart>
    )
}

export default LineChart2