import React from 'react';
import Flickity from 'react-flickity-component'
import ImageCard from '../Snippets/ImageCard';
import VideoCard from '../Snippets/VideoCard';
import SlidesCard from '../Snippets/SliderCard';
import {Row, Col} from 'react-bootstrap';

const Banner = () => {
    const flickityOptions = {
        initialIndex: 0,
        groupCells: true,
        pageDots: false,
        contain: true
    }
    return (
        <div className='mb-36'>
            <Flickity
                className={'d-none d-md-block carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >
                <div className='carousel-cell carousel-cell-40'><SlidesCard /></div>
                <div className='carousel-cell carousel-cell-20'>
                    <VideoCard title="BALEX SPECIALS 1/1" url="https://img.rarible.com/feat/video/webm/x1/81146e5456fb99da97fa898346c06ae0/e7339405/Header_800x800BALEXSPECIALS-Correctedcopy.mp4" />
                    <ImageCard title="Tessellation 21.330" subtitle="Blazing Futures ꜩ" image="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/76d58bef8d388e94fb254f24706b6b48/05469133/Tessellation21_330.jpeg" />
                </div>
                <div className='carousel-cell carousel-cell-20'>
                    <VideoCard title="BALEX SPECIALS 1/1" url="https://img.rarible.com/feat/video/webm/x1/81146e5456fb99da97fa898346c06ae0/e7339405/Header_800x800BALEXSPECIALS-Correctedcopy.mp4" />
                    <ImageCard title="Tessellation 21.330" subtitle="Blazing Futures ꜩ" image="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/76d58bef8d388e94fb254f24706b6b48/05469133/Tessellation21_330.jpeg" />
                </div>
                <div className='carousel-cell carousel-cell-20'>
                    <VideoCard title="BALEX SPECIALS 1/1" url="https://img.rarible.com/feat/video/webm/x1/81146e5456fb99da97fa898346c06ae0/e7339405/Header_800x800BALEXSPECIALS-Correctedcopy.mp4" />
                    <ImageCard title="Tessellation 21.330" subtitle="Blazing Futures ꜩ" image="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/76d58bef8d388e94fb254f24706b6b48/05469133/Tessellation21_330.jpeg" />
                </div>
                <div className='carousel-cell carousel-cell-20'>
                    <VideoCard title="BALEX SPECIALS 1/1" url="https://img.rarible.com/feat/video/webm/x1/81146e5456fb99da97fa898346c06ae0/e7339405/Header_800x800BALEXSPECIALS-Correctedcopy.mp4" />
                    <ImageCard title="Tessellation 21.330" subtitle="Blazing Futures ꜩ" image="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/76d58bef8d388e94fb254f24706b6b48/05469133/Tessellation21_330.jpeg" />
                </div>
                <div className='carousel-cell carousel-cell-20'>
                    <VideoCard title="BALEX SPECIALS 1/1" url="https://img.rarible.com/feat/video/webm/x1/81146e5456fb99da97fa898346c06ae0/e7339405/Header_800x800BALEXSPECIALS-Correctedcopy.mp4" />
                    <ImageCard title="Tessellation 21.330" subtitle="Blazing Futures ꜩ" image="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/76d58bef8d388e94fb254f24706b6b48/05469133/Tessellation21_330.jpeg" />
                </div>
            </Flickity>

            <div className="d-md-none">
                <div className="mb-3">
                    <SlidesCard />
                </div>

                <Row className='overflow-auto flex-nowrap'>
                    <Col xs={5}>
                        <VideoCard title="BALEX SPECIALS 1/1" url="https://img.rarible.com/feat/video/webm/x1/81146e5456fb99da97fa898346c06ae0/e7339405/Header_800x800BALEXSPECIALS-Correctedcopy.mp4" />
                    </Col>
                    <Col xs={5}>
                        <ImageCard title="Tessellation 21.330" subtitle="Blazing Futures ꜩ" image="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/76d58bef8d388e94fb254f24706b6b48/05469133/Tessellation21_330.jpeg" />
                    </Col>
                    <Col xs={5}>
                        <VideoCard title="BALEX SPECIALS 1/1" url="https://img.rarible.com/feat/video/webm/x1/81146e5456fb99da97fa898346c06ae0/e7339405/Header_800x800BALEXSPECIALS-Correctedcopy.mp4" />
                    </Col>
                    <Col xs={5}>
                        <ImageCard title="Tessellation 21.330" subtitle="Blazing Futures ꜩ" image="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/76d58bef8d388e94fb254f24706b6b48/05469133/Tessellation21_330.jpeg" />
                    </Col>
                    <Col xs={5}>
                        <VideoCard title="BALEX SPECIALS 1/1" url="https://img.rarible.com/feat/video/webm/x1/81146e5456fb99da97fa898346c06ae0/e7339405/Header_800x800BALEXSPECIALS-Correctedcopy.mp4" />
                    </Col>
                    <Col xs={5}>
                        <ImageCard title="Tessellation 21.330" subtitle="Blazing Futures ꜩ" image="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/76d58bef8d388e94fb254f24706b6b48/05469133/Tessellation21_330.jpeg" />
                    </Col>
                    <Col xs={5}>
                        <VideoCard title="BALEX SPECIALS 1/1" url="https://img.rarible.com/feat/video/webm/x1/81146e5456fb99da97fa898346c06ae0/e7339405/Header_800x800BALEXSPECIALS-Correctedcopy.mp4" />
                    </Col>
                    <Col xs={5}>
                        <ImageCard title="Tessellation 21.330" subtitle="Blazing Futures ꜩ" image="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/76d58bef8d388e94fb254f24706b6b48/05469133/Tessellation21_330.jpeg" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Banner;