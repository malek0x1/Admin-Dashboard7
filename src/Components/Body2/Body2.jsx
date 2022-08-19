import data from './data';
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
import SquareCard from '../SquareCard/SquareCard';
import LineChart2 from '../LineChart2/LineChart2';

const Body2 = () => {
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("sm"))
  const tab = useMediaQuery(theme.breakpoints.down("md"))



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
              <p className="gray-p">
                <span style={{ color: "crimson" }}>-1.47%</span> this week</p>
            </div>


        </div>
        <LineChart2 data={data} phone={phone} tab={tab} />

      </div>
      <div className="Body2-Lower">
        <h2 className="h2-title">Quick Actions</h2>
        <div className="Body2-Lower-Wrapper">
          <SquareCard IMG={IMG1} action="Recieve" />
          <SquareCard IMG={IMG2} action="Top Up" />
          <SquareCard IMG={IMG3} action="Find ATM" />
          <SquareCard IMG={IMG4} action="Bank AC" />
          <SquareCard IMG={IMG5} action="Stats" />
          <SquareCard IMG={IMG6} action="Transfer" />
          <SquareCard IMG={IMG7} action="Cards" />
          <SquareCard IMG={IMG8} action="Pay Bill" />
          <SquareCard IMG={IMG9} action="Payment" />
          <SquareCard IMG={IMG10} action="Transactions" />
          <SquareCard IMG={IMG11} action="Withdraw" />
          <SquareCard IMG={IMG1} action="Voucher" />
        </div>
      </div>
    </div>
  )
}

export default Body2