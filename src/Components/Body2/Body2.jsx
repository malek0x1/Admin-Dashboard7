import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import IMG1 from './imgs/Icon-1.png'
import IMG2 from './imgs/Icon-2.png'
import IMG3 from './imgs/Icon-3.png'
import IMG4 from './imgs/Icon-4.png'
import IMG5 from './imgs/Icon-5.png'
import IMG6 from './imgs/Icon-6.png'
import IMG7 from './imgs/Icon-7.png'
import IMG8 from './imgs/Icon-8.png'
import IMG9 from './imgs/Icon-9.png'
import IMG10 from './imgs/Icon-10.png'
import IMG11 from './imgs/Icon-11.png'
import React from 'react'
import './Body2.css'

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Body2 = () => {
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("sm"))
  const tab = useMediaQuery(theme.breakpoints.down("md"))

  const data = [
    {
      name: 'A',
      uv: 300,
      pv: 200,
      amt: 2400,
    },
    {
      name: 'B',
      uv: 200,
      pv: 300,
      amt: 2210,
    },
    {
      name: 'C',
      uv: 200,
      pv: 300,
      amt: 2290,
    },
    {
      name: 'D',
      uv: 100,
      pv: 200,
      amt: 2000,
    },
    {
      name: 'E',
      uv: 400,
      pv: 600,
      amt: 2181,
    },
    {
      name: 'F',
      uv: 200,
      pv: 400,
      amt: 2500,
    },
    {
      name: 'G',
      uv: 100,
      pv: 0,
      amt: 2100,
    },
    {
      name: 'A',
      uv: 300,
      pv: 200,
      amt: 2400,
    },
    {
      name: 'B',
      uv: 200,
      pv: 300,
      amt: 2210,
    },
    {
      name: 'C',
      uv: 200,
      pv: 300,
      amt: 2290,
    },
    {
      name: 'D',
      uv: 100,
      pv: 200,
      amt: 2000,
    },
    {
      name: 'E',
      uv: 400,
      pv: 600,
      amt: 2181,
    },
    {
      name: 'F',
      uv: 200,
      pv: 400,
      amt: 2500,
    },
    {
      name: 'G',
      uv: 100,
      pv: 0,
      amt: 2100,
    },
    {
      name: 'A',
      uv: 300,
      pv: 200,
      amt: 2400,
    },
    {
      name: 'B',
      uv: 200,
      pv: 300,
      amt: 2210,
    },
    {
      name: 'C',
      uv: 200,
      pv: 300,
      amt: 2290,
    },
    {
      name: 'D',
      uv: 100,
      pv: 200,
      amt: 2000,
    },
    {
      name: 'E',
      uv: 400,
      pv: 600,
      amt: 2181,
    },
    {
      name: 'F',
      uv: 200,
      pv: 400,
      amt: 2500,
    },
    {
      name: 'G',
      uv: 100,
      pv: 0,
      amt: 2100,
    },
  ];

  return (
    <div className='Body2'>
      <div className="NavBar-Styles Body2-header df ">
        <h3>Quick States & Actions</h3>
      </div>
      <div className="Body2-Upper">
        <div className="df">
          <h2 className="h2-title">Bitcoin</h2>
          <div className="df fc">
            <p className="gray-p">Current Price</p>
            <h1 className='h1-price'>$93,12.32</h1>
            <p className="gray-p">            <span style={{ color: "crimson" }}>-1.47%</span> this week</p>
          </div>
        </div>
        <LineChart
          // width={350}
          width={phone ? 250 : tab ? 450 : 350}
          height={280}
          data={data}
          margin={{
            top: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="pv" stroke="#F88757" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#259DA8" />
        </LineChart>

      </div>
      <div className="Body2-Lower">
        <h2 className="h2-title">Quick Actions</h2>
        <div className="Body2-Lower-Wrapper">
          <div className="Body2-Lower-Wrapper-box df center fc">
            <img src={IMG1} alt="" />
            <p>Recieve</p>
          </div>
          <div className="Body2-Lower-Wrapper-box df center fc">
            <img src={IMG2} alt="" />
            <p>Top Up</p>
          </div>
          <div className="Body2-Lower-Wrapper-box df center fc">
            <img src={IMG3} alt="" />
            <p>Find ATM</p>
          </div>
          <div className="Body2-Lower-Wrapper-box df center fc">
            <img src={IMG4} alt="" />
            <p>Bank AC</p>
          </div>
          <div className="Body2-Lower-Wrapper-box df center fc">
            <img src={IMG7} alt="" />
            <p>Stats</p>
          </div>
          <div className="Body2-Lower-Wrapper-box df center fc">
            <img src={IMG6} alt="" />
            <p>Transfer</p>
          </div>
          <div className="Body2-Lower-Wrapper-box df center fc">
            <img src={IMG5} alt="" />
            <p>Cards</p>
          </div>
          <div className="Body2-Lower-Wrapper-box df center fc">
            <img src={IMG8} alt="" />
            <p>Pay Bill</p>
          </div>
          <div className="Body2-Lower-Wrapper-box df center fc">
            <img src={IMG9} alt="" />
            <p>Payment</p>
          </div>
          <div className="Body2-Lower-Wrapper-box df center fc">
            <img src={IMG10} alt="" />
            <p>Transactions</p>
          </div>
          <div className="Body2-Lower-Wrapper-box df center fc">
            <img src={IMG11} alt="" />
            <p>Withdraw</p>
          </div>
          <div className="Body2-Lower-Wrapper-box df center fc">
            <img src={IMG1} alt="" />
            <p>Voucher</p>
          </div>
        </div>

      </div>



    </div>
  )
}

export default Body2