import React from 'react';
import Carousel from 'react-bootstrap/Carousel' 
import ImageCard from './ImageCard';
import VideoCard from './VideoCard';


const SlideCard = (props) => {
    console.log("Slide1",props.dataall)
    return (
        <Carousel 
            className='carousel-slider'
            controls={false}
            interval="5000"
            pause={false}
            fade={true}
        >
            <Carousel.Item>
                <VideoCard title="Meridiem" subtitle="Blazing Futures ꜩ" url={props.image} />
            </Carousel.Item>
            <Carousel.Item>
                <VideoCard title="SitDown LOL™️" url={props.image} />
            </Carousel.Item>
            <Carousel.Item>
                <ImageCard title="The Feast" image={props.image} />
            </Carousel.Item>
            <Carousel.Item>
                <ImageCard title="GoodBye" subtitle="Blazing Futures ꜩ" image={props.image} />
            </Carousel.Item>
        </Carousel>
    );
};

export default SlideCard;