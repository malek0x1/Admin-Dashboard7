import React from 'react'
import {
    BarChart,
    Bar,
    ReferenceLine,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts';


const BarChartB4 = ({ phone, tab, data }) => {
    return (
        <BarChart
            width={phone ? 300 : tab ? 450 : 450}
            height={300}
            data={data}
            margin={{
            }}
        >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="pv" fill="#DB5262" />
            <Bar dataKey="uv" fill="#356AF0" />
        </BarChart>
    )
}

export default BarChartB4