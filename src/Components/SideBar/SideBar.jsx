import { AccountBalanceOutlined, CurrencyExchangeOutlined, DiamondOutlined, OtherHousesOutlined, Person, PersonOutline, PieChartOutlineOutlined, PowerSettingsNewOutlined, SettingsOutlined, SpeedOutlined, StorefrontOutlined } from '@mui/icons-material'
import React from 'react'
import './SideBar.css'
const SideBar = () => {
  return (
    <div className="SideBar df fc">
      <div className="SideBar-Header NavBar-Styles df center">
        <DiamondOutlined sx={{ fontSize: "25px" }}  />
      </div>
      <div className="SideBar-Body df fc g20">
        <SpeedOutlined className="icon-sidebar active" />
        <OtherHousesOutlined className="icon-sidebar" />
        <CurrencyExchangeOutlined className="icon-sidebar" />
        <AccountBalanceOutlined className="icon-sidebar" />
        <PersonOutline className="icon-sidebar" />
        <StorefrontOutlined className="icon-sidebar" />
        <SettingsOutlined className="icon-sidebar" />
      </div>
      <div className="SideBar-Footer df fc g10">
        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" />
        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
        <PowerSettingsNewOutlined fontSize='large' sx={{ color: "#000", marginTop: "20px", cursor: "pointer" }} />
      </div>

    </div>
  )
}

export default SideBar