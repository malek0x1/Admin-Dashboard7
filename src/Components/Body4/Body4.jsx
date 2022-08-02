import { FilterAltOutlined, NotificationsNoneOutlined, SearchOutlined, SettingsOutlined, TrendingDownOutlined, TrendingUpOutlined } from '@mui/icons-material'
import React from 'react'
import './Body4.css'
import IMG from './bit.png'
import TAG1 from './imgs/1H.png'
import TAG2 from './imgs/1W.png'
import TAG3 from './imgs/1Y.png'
import TAG4 from './imgs/24H.png'
import TAG5 from './imgs/All.png'
import GRAPH from './imgs/small-graph.png'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
const Body4 = () => {
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("sm"))
  const tab = useMediaQuery(theme.breakpoints.down("md"))

  const data = [
    { name: '1', uv: 300, pv: 456 },
    { name: '2', uv: -145, pv: 230 },
    { name: '3', uv: -100, pv: 345 },
    { name: '4', uv: -8, pv: 450 },
    { name: '5', uv: 100, pv: 321 },
    { name: '6', uv: 9, pv: 235 },
    { name: '7', uv: 53, pv: 267 },
    { name: '8', uv: 252, pv: -378 },
    { name: '9', uv: 79, pv: -210 },
    { name: '10', uv: 294, pv: -23 },
    { name: '12', uv: 43, pv: 45 },
    { name: '13', uv: -74, pv: 90 },
    { name: '14', uv: -71, pv: 130 },
    { name: '15', uv: -117, pv: 11 },
    { name: '16', uv: -186, pv: 107 },
    { name: '17', uv: -16, pv: 926 },
    { name: '18', uv: -125, pv: 653 },
    { name: '19', uv: 222, pv: 366 },
    { name: '20', uv: 372, pv: 486 },
    { name: '21', uv: 182, pv: 512 },
    { name: '22', uv: 164, pv: 302 },
    { name: '23', uv: 316, pv: 425 },
    { name: '24', uv: 131, pv: 467 },
    { name: '25', uv: 291, pv: -190 },
    { name: '26', uv: -47, pv: 194 },
    { name: '27', uv: -415, pv: 371 },
    { name: '28', uv: -182, pv: 376 },
    { name: '29', uv: -93, pv: 295 },
    { name: '30', uv: -99, pv: 322 },
    { name: '31', uv: -52, pv: 246 },
    { name: '32', uv: 154, pv: 33 },
    { name: '33', uv: 205, pv: 354 },
    { name: '34', uv: 70, pv: 258 },
    { name: '35', uv: -25, pv: 359 },
    { name: '36', uv: -59, pv: 192 },
    { name: '37', uv: -63, pv: 464 },
    { name: '38', uv: -91, pv: -2 },
    { name: '39', uv: -66, pv: 154 },
    { name: '40', uv: -50, pv: 186 },
  ];
  return (
    <div className="Body4">
      <div className="NavBar-Styles Body2-header df">
        <div className="Body4-header-left g10" style={{ display: 'flex' }}>
          <div className="Body4-header-icon df center">
            <SettingsOutlined sx={{ fontSize: "28px", cursor: "pointer" }} />
          </div>
          <div className="Body4-header-icon df center">
            <NotificationsNoneOutlined sx={{ fontSize: "28px", cursor: "pointer" }} />
          </div>
        </div>





        <div className="Body4-header-mid df center">
          <SearchOutlined sx={{ fontSize: "24px", color: "rgba(128, 128, 128, 0.546)", marginRight: "1px", marginTop: "3px", cursor: "pointer" }} />

          <input type="text" placeholder='Search...' />
          <FilterAltOutlined sx={{ fontSize: "24px", color: "#111", cursor: "pointer" }} />
        </div>



        <div className="Body4-header-right">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className='img-logo-right' alt="" />

        </div>
      </div>






      <div className="Body2-Upper df">
        <div className="BF">
          <img className="b4-upper-bit" src={IMG} alt="" />
          <p className="random-p">Bitcoin</p>
          <p className="gray-p">BTC</p>
        </div>
        <div className="BF2">
          <div className="test-tag df center">1H</div>
          <div className="test-tag df center">24H</div>
          <div className="test-tag df center">1W</div>
          <div className="test-tag df center">1Y</div>
          <div className="test-tag df center">ALL</div>
        </div>
      </div>


      <div className="Body2-Upper2">

        <div className="BF">
          <h1 className='h1-price'>$93,12.32</h1>
          <p className="gray-p" style={{ color: "green" }}>+3.23%</p>
        </div>

        <BarChart
          // width={phone ? 250 : tab ? 300 : 600}
          // width={400}
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

        <h2 className="h2-title" style={{ marginTop: "20px", marginBottom: "20px" }}>Recent Activity</h2>


        <div className="Body4-Footer df g5 ">


          <div className="Body4-card Body4-Card-blue df fc">
            <p className="p4-top">Extra Spending</p>
            <h1 className="h1-price" style={{ color: 'white' }}>$99,312</h1>
            <p className="p4-mid">Compare Last Month</p>
            <img src={GRAPH} alt="" />
            <div className="df g10">
              <div className="colored"></div>
              <p className="p4-footer">This Month $2,450</p>
            </div>
            <div className="df g10">
              <div className="colored2"></div>
              <p className="p4-footer">This Month $2,450</p>
            </div>


          </div>






















          <div className="Body4-card Body4-Card-gray df fc">
            <p className="p4-top-2">Extra Spending</p>
            <h1 className="h1-price" style={{ color: '#1D1D1D' }}>$99,312</h1>
            <p className="p4-mid-2">Compare Last Month</p>
            <img src={GRAPH} alt="" />
            <div className="df g10">
              <div className="colored"></div>
              <p className="p4-footer-2" style={{ color: "#1D1D1D" }}>This Month $2,450</p>
            </div>
            <div className="df g10">
              <div className="colored2"></div>
              <p className="p4-footer-2" style={{ color: "#1D1D1D" }}> This Month $2,450</p>
            </div>


          </div>




          <div className="df fc g10">
            <div className="Body4-smallCard df center Body4-Card-gray">
              <TrendingUpOutlined sx={{ color: "#5052FC", fontSize: "20px", position: "absolute", left: "8px", bottom: "17px" }} />
              <div className="df fc " style={{ paddingLeft: "10px" }}>
                <p>Income Monthly</p>
                <h1 className="h1-price-3" style={{ color: "#5052FC" }}>+$238.13</h1>

              </div>
            </div>
            <div className="Body4-smallCard df center Body4-Card-gray">
              <TrendingDownOutlined sx={{ color: "#FB3E08", fontSize: "20px", position: "absolute", left: "10px", bottom: "17px" }} />
              <div className="df fc " style={{ paddingLeft: "10px" }}>
                <p>Income Monthly</p>
                <h1 className="h1-price-3" style={{ color: "#FB3E08" }}>+$24.13</h1>

              </div>
            </div>
            <div className="Body4-smallCard df center Body4-Card-blue">
              <TrendingUpOutlined sx={{ color: "#FFF", fontSize: "20px", position: "absolute", left: "8px", bottom: "17px" }} />
              <div className="df fc " style={{ paddingLeft: "10px" }}>
                <p style={{ color: "#FFF" }}>Income Monthly</p>
                <h1 className="h1-price-3" style={{ color: "#FFF" }}>+$238.13</h1>

              </div>
            </div>
          </div>






        </div>
      </div>











    </div>
  )
}


export default Body4


