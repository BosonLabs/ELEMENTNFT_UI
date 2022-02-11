import React from 'react';
import Carousel from 'react-bootstrap/Carousel' 
import ImageCard from './ImageCard';
import VideoCard from './VideoCard';


const SlideCard = (props) => {
    //console.log("Slide1",props.dataall)
    return (
        <Carousel 
            className='carousel-slider'
            controls={false}
            interval="5000"
            pause={false}
            fade={true}
        >
                                   
            <Carousel.Item>
                <VideoCard title={props.title} subtitle={props.description} url={props.image} dataall={props.dataall} ownerAddress={props.ownerAddress}/>
            </Carousel.Item>
            <Carousel.Item>
                <VideoCard title={props.title} subtitle={props.description} url={props.image} dataall={props.dataall} ownerAddress={props.ownerAddress} />
            </Carousel.Item>
            <Carousel.Item>
                <ImageCard title={props.title} subtitle={props.description} image={props.image} dataall={props.dataall} ownerAddress={props.ownerAddress}/>
            </Carousel.Item>
            <Carousel.Item>
                <ImageCard title={props.title} subtitle={props.description} image={props.image}  dataall={props.dataall} ownerAddress={props.ownerAddress}/>
            </Carousel.Item>
        </Carousel>
    );
};

export default SlideCard;