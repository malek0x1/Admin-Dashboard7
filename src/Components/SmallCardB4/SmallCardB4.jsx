import { TrendingDownOutlined, TrendingUpOutlined } from '@mui/icons-material'
import React from 'react'

const SmallCardB4 = (prop) => {
    const out = prop.p ? "#fff" : "#555";
    const choose = prop.down ? true : false;
    return (

        <div className={`Body4-smallCard df center ${prop.bg}`}>
            {
                !choose ?
                    <TrendingUpOutlined sx={{ color: prop.TrendColor, fontSize: "20px", position: "absolute", left: "8px", bottom: "17px" }} />
                    :
                    <TrendingDownOutlined sx={{ color: prop.TrendColor, fontSize: "20px", position: "absolute", left: "8px", bottom: "17px" }} />


            }
            <div className="df fc " style={{ paddingLeft: "10px" }}>
                <p style={{ color: out }}>Income Monthly</p>
                <h1 className="h1-price-3" style={{ color: prop.TrendColor }}>{prop.price}</h1>
            </div>
        </div >
    )
}

export default SmallCardB4