import React from 'react';
import Carousel from 'react-bootstrap/Carousel' 
import ImageCard from './ImageCard';
import VideoCard from './VideoCard';


const SlideCard = () => {
    return (
        <Carousel 
            className='carousel-slider'
            controls={false}
            interval="5000"
            pause={false}
            fade={true}
        >
            <Carousel.Item>
                <VideoCard title="Meridiem" subtitle="Blazing Futures ꜩ" url="https://img.rarible.com/feat/video/webm/x2/e75986d501aaea0308885117c3528c7c/49cecfdb/Meridiem.mp4" />
            </Carousel.Item>
            <Carousel.Item>
                <VideoCard title="SitDown LOL™️" url="https://img.rarible.com/feat/video/webm/x2/b91d3ace417c0b0a4541feda09a4f784/67205bbe/LOLSITDOWNDROP1.gif" />
            </Carousel.Item>
            <Carousel.Item>
                <ImageCard title="The Feast" image="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/da7820e17d762f84b96f42cdfbf52d77/0bbf1b70/TheFeast.jpg" />
            </Carousel.Item>
            <Carousel.Item>
                <ImageCard title="GoodBye" subtitle="Blazing Futures ꜩ" image="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/b1c8ab7d2101170ddb2d9e2ae78b2ab6/033259b2/Goodbye_still_ACRWRS_2021_800x800.jpeg" />
            </Carousel.Item>
        </Carousel>
    );
};

export default SlideCard;