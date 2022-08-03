import { FilterAltOutlined, NotificationsNoneOutlined, SearchOutlined, SettingsOutlined,  } from '@mui/icons-material'
import React from 'react'
import './Body4.css'
import IMG from './bit.png'
import GRAPH from './imgs/small-graph.png'
import data from './data'
import { useTheme } from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';

import BarChartB4 from '../BarChartB4/BarChartB4'
import CardB4 from '../CardB4/CardB4'
import SmallCardB4 from '../SmallCardB4/SmallCardB4'
const Body4 = () => {
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("sm"))
  const tab = useMediaQuery(theme.breakpoints.down("md"))

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
        <BarChartB4 data={data} phone={phone} tab={tab} />
        <h2 className="h2-title" style={{ marginTop: "20px", marginBottom: "20px" }}>Recent Activity</h2>
        <div className="Body4-Footer df g5 ">

          <CardB4 img={GRAPH} bg="Body4-Card-blue" h1="white" p1="p4-top" p2="p4-mid" p3="p4-footer" />
          <CardB4 img={GRAPH} bg="Body4-Card-gray" h1="#1D1D1D" p1="p4-top-2" p2="p4-mid-2" p3="p4-footer-2" />
          <div className="df fc g10">
            <SmallCardB4 TrendColor="#5052FC" bg="Body4-Card-gray" price="+$271.32"/>
            <SmallCardB4 TrendColor="#FB3E08" bg="Body4-Card-gray" price="-$28.23" down />
            <SmallCardB4 TrendColor="#FFF" bg="Body4-Card-blue" p price="+$999.48" />

        </div>
      </div>
    </div>
    </div >
  )
}


export default Body4


