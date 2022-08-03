import React from 'react'

const SquareCard = (props) => {
    return (
        <div className="Body2-Lower-Wrapper-box df center fc">
            <img src={props.IMG} alt="" />
            <p>{props.action}</p>
        </div>
    )
}

export default SquareCard