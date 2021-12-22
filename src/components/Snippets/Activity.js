import React from 'react';
import {
    Link
  } from "react-router-dom";

import Icon from '../../assets/images/dummy-icon.svg';

const Activity = (props) => {
    return (
        <div className='activity-item d-flex align-items-center mb-3'>
            <div className="activity-image">
                <img src={props.image} alt="pic" className='img-fluid'  />

                <div className="activity-icon" style={{backgroundColor: ''}}><svg viewBox="0 0 15 13" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye vZMA-D"><path d="M7.2112 13L11.1056 8.69231L13.1853 6.39185C14.2497 5.21455 14.3683 3.46116 13.4723 2.15121C12.3207 0.46757 9.96371 0.153512 8.41139 1.47685L7.2112 2.5L5.95566 1.42966C4.40738 0.109758 2.06841 0.360304 0.834823 1.97819C-0.222142 3.36443 -0.114896 5.31329 1.0878 6.57518L7.2112 13Z" fill="currentColor"></path></svg></div>
            </div>
            <div className="activity-content">
                <h4><Link to="/">innocence 9</Link></h4>
                <p>liked by <Link to="/"><img src={Icon} alt="icon" /> CryptoArt8</Link></p>
                <div className="time">1 hours ago</div>
            </div>
        </div>
    );
};

export default Activity;