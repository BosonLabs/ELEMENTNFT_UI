import React from 'react';
import {
    Link
  } from "react-router-dom";

const VideoCard = (props) => {
    return (
        <Link className='card-media' to={{
            pathname: "/profileviewothercopy2",            
            state:{ownerAddress:props.ownerAddress}
            // ,follow:props.follow
          }}> 
            <div className="card-media-info">
                <h3>{props.title}</h3>
                {props.subtitle ? <h4>{props.subtitle}</h4> : null}
            </div>
            <video playsInline={true} autoPlay={true} loop={true} src={props.url}></video>
        </Link>
    );
};

export default VideoCard;