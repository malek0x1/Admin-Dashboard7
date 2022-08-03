import { AccountBalanceWallet, KeyboardArrowDown,   } from '@mui/icons-material'
import React from 'react'
import CardsB3 from '../CardsB3/CardsB3';
import MuiSelect from '../MuiSelect/MuiSelect';
import './Body3.css'
import IMG from './eth.png';
import GRAPH from './Graph.png';
const Body3 = () => {


  




  return (
    <div className="Body3">
      <div className="NavBar-Styles Body2-header df ">
        <h3>History & Activity</h3>
      </div>
      <div className="Body3-body padds">
        <p className="gray-p">Current Balance</p>
        <div className="df Body3-body-upper">
          <AccountBalanceWallet sx={{ color: "#5251FA", fontSize: "38px" }} />
          <h1 className="h1-price-2" style={{ color: "#324886" }}>$9,131.41</h1>
          <p style={{ fontSize: "18px", color: "#666" }}>USD <KeyboardArrowDown sx={{ color: "#666", fontSize: "20px", cursor: "pointer" }} /></p>
        </div>
        <h2 className="h2-title" style={{ marginTop: "20px", marginBottom: "20px" }}>Recent Activity</h2>
        <p className="gray-p">Filter by:</p>
        <div className="df" style={{ marginTop: "0px" }}>

          <MuiSelect value="Type" Val1="A" Val2="B" Val3="C"/>
          <MuiSelect value="levels" Val1="1" Val2="2" Val3="3"/>
          <MuiSelect value="currency" Val1="BTC" Val2="Dollar" Val3="Lira"/>
        </div>
        <div className="Body3-cards-wrapper df fc g10">
          <CardsB3 IMG={IMG} classes="btn" />
          <CardsB3 IMG={IMG} classes="btn btn-unique" />
          <CardsB3 IMG={IMG} classes="btn" />
        </div>
        <h2 className="h2-title" style={{ marginTop: "20px", marginBottom: "20px" }}>History</h2>
        <div className="Body3-card df fc" style={{ padding: "15px", alignItems: "flex-start", paddingBottom: "25px" }}>
          <div className="">
            <p className="p-card-last">BTC/USD</p>
            <p className="gray-p">$99,23.1312</p>
          </div>
          <img src={GRAPH} alt="" draggable={false} />
        </div>
      </div>
    </div>
  )
}

export default Body3