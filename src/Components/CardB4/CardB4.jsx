import React from 'react'

const CardB4 = (prop) => {
    return (
        <div className={`Body4-card  df fc ${prop.bg}`}>
            <p className={prop.p1} >Extra Spending</p>
            <h1 className="h1-price" style={{ color: prop.h1 }}>$99,312</h1>
            <p className={prop.p2}>Compare Last Month</p>
            <img src={prop.img} alt="" draggable={false} />
            <div className="df g10">
                <div className="colored"></div>
                <p className={prop.p3}>This Month $2,450</p>
            </div>
            <div className="df g10">
                <div className="colored2"></div>
                <p className={prop.p3}>This Month $2,450</p>
            </div>
        </div>
    )
}

export default CardB4