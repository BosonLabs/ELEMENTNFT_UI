import React from 'react';
// import {
//     Link
//   } from "react-router-dom";
//import Icon from '../../assets/images/dummy-icon.svg';

const Activity = (props) => {
    return (
        <div className='activity-item d-flex align-items-center mb-3'>        
            <div className="activity-content">
                {/* <h4><Link to="/activity">{props.dataall.NFTName}</Link></h4> */}
                {/* <img src={props.image} alt="icon" /> </Link>*/}
                <p>  {props.dataall.NFTName}</p>
                <p> {props.dataall.EscrowAddress}</p>
                <div className="time">{props.dataall.TimeStamp}</div>
            </div>
        </div>
    );
};

export default Activity;