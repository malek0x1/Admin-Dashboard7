import { AccountBalanceWallet, ArrowDownwardOutlined, History, KeyboardArrowDown, LocalGasStation, StarOutline, StartOutlined } from '@mui/icons-material'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import './Body3.css'
import IMG from './eth.png';
import GRAPH from './Graph.png';
const Body3 = () => {
  const [age, setAge] = React.useState('');
  const [levels, setLevels] = React.useState('');
  const [currency, setCurrency] = React.useState('');

  const handleChange = (event, name) => {
    setAge(event.target.value);
  };



  const [values, setValues] = React.useState({
    age: "",
    levels: "",
    currency: ""
  });

  const handleChange2 = (event, name) => {
    setValues({
      ...values,
      [name]: event.target.value
    });

  };




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



          <FormControl sx={{ m: 1, minWidth: 80 }} size="small"  >

            <InputLabel id="demo-select-small">Age</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={values.age}
              label="age"
              onChange={(event) => handleChange2(event, "age")}

            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>





          <FormControl sx={{ m: 1, minWidth: 80 }} size="small"  >

            <InputLabel id="demo-select-small">Currency</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={values.currency}
              label="Currency"
              onChange={(event) => handleChange2(event, "currency")}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Bitcoin</MenuItem>
              <MenuItem value={20}>MODERNO</MenuItem>
              <MenuItem value={30}>USDT</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 80 }} size="small"  >

            <InputLabel id="demo-select-small">Levels</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={values.levels}
              label="levels"
              onChange={(event) => handleChange2(event, "levels")}

            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="Body3-cards-wrapper df fc g10">
          <div className="Body3-card">
            <div className="Body3-card-header df">
              <div className="df g15">
                <div className="Body3-card-header-logo df center">

                  <img src={IMG} alt="" />
                </div>
                <div className="">
                  <p className="p-name">Cameron B.</p>
                  <p className="gray-p">BTC</p>
                </div>
              </div>
              <div className="df g5">
                <p className="p-name">0.001</p>
                <p className="gray-p">BTC</p>
              </div>
            </div>
            <div className="Body3-card-footer df">
              <div className="df fc g5">
                <div className="df g5">
                  <History sx={{ color: "rgba(128, 128, 128, 0.692)", fontSize: "15px" }} />
                  <p className='date'>2 Days ago</p>
                </div>
                <div className="df g5 ">
                  <StarOutline sx={{ color: "rgba(128, 128, 128, 0.692)", fontSize: "15px" }} />
                  <p className='date'>4,12 ratings</p>
                </div>
              </div>
              <button className='btn'   >Details</button>
            </div>
          </div>
          <div className="Body3-card">
            <div className="Body3-card-header df">
              <div className="df g15">
                <div className="Body3-card-header-logo df center">

                  <img src={IMG} alt="" />
                </div>
                <div className="">
                  <p className="p-name">Cameron B.</p>
                  <p className="gray-p">BTC</p>
                </div>
              </div>
              <div className="df g5">
                <p className="p-name">0.001</p>
                <p className="gray-p">BTC</p>
              </div>
            </div>
            <div className="Body3-card-footer df">
              <div className="df fc g5">
                <div className="df g5">
                  <History sx={{ color: "rgba(128, 128, 128, 0.692)", fontSize: "15px" }} />
                  <p className='date'>2 Days ago</p>
                </div>
                <div className="df g5 ">
                  <StarOutline sx={{ color: "rgba(128, 128, 128, 0.692)", fontSize: "15px" }} />
                  <p className='date'>4,12 ratings</p>
                </div>
              </div>
              <button className='btn' style={{ backgroundColor: "#FFF", color: "#111" }}>Details</button>
            </div>
          </div>
          <div className="Body3-card">
            <div className="Body3-card-header df">
              <div className="df g15">
                <div className="Body3-card-header-logo df center">

                  <img src={IMG} alt="" />
                </div>
                <div className="">
                  <p className="p-name">Cameron B.</p>
                  <p className="gray-p">BTC</p>
                </div>
              </div>
              <div className="df g5">
                <p className="p-name">0.001</p>
                <p className="gray-p">BTC</p>
              </div>
            </div>
            <div className="Body3-card-footer df">
              <div className="df fc g5">
                <div className="df g5">
                  <History sx={{ color: "rgba(128, 128, 128, 0.692)", fontSize: "15px" }} />
                  <p className='date'>2 Days ago</p>
                </div>
                <div className="df g5 ">
                  <StarOutline sx={{ color: "rgba(128, 128, 128, 0.692)", fontSize: "15px" }} />
                  <p className='date'>4,12 ratings</p>
                </div>
              </div>
              <button className='btn'   >Details</button>


            </div>
          </div>
        </div>

        <h2 className="h2-title" style={{ marginTop: "20px", marginBottom: "20px" }}>History</h2>
        <div className="Body3-card df fc" style={{ padding: "15px", alignItems: "flex-start",paddingBottom:"25px" }}>
          <div className="">
            <p className="p-card-last">BTC/USD</p>
            <p className="gray-p">$99,23.1312</p>
          </div>
          <img src={GRAPH} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Body3