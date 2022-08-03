import { History, StarOutline } from '@mui/icons-material'
import React from 'react'

const CardsB3 = ({IMG,classes}) => {
    return (
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
                <button className={classes}>Details</button>
            </div>
        </div>)
}

export default CardsB3