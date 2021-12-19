import React from 'react';
import {
    Link
  } from "react-router-dom";

const ImageCard = (props) => {
    return (
        <Link to="/" className='card-media'>
            <div className="card-media-info">
                <h3>{props.title}</h3>
                {props.subtitle ? <h4>{props.subtitle}</h4> : null}
            </div>
            <img src={props.image} alt="pic" />
        </Link>
    );
};

export default ImageCard;