import React,{useEffect,useContext} from 'react';
import Flickity from 'react-flickity-component'
import ImageCard from '../Snippets/ImageCard';
import VideoCard from '../Snippets/VideoCard';
import SlidesCard from '../Snippets/SliderCard';
import {Row, Col} from 'react-bootstrap';
import { DataContext } from '../../Context/DataContext';
const axios = require('axios');

const Banner = () => {
    
    const[getI,setgetI]=React.useState([]);     
    const{getBosonData}=useContext(DataContext);   
    const{getBosonDatavideo}=useContext(DataContext);       
    console.log("BosonDatavideo",getBosonDatavideo)  
    const flickityOptions = {
        initialIndex: 0,
        groupCells: true,
        pageDots: false,
        contain: true
    }
    const dbcallsaleal=async(index)=>{        
          axios({
            method: 'get',
            url: 'https://demonft-2e778-default-rtdb.firebaseio.com/imagerefAlgo.json',
            responseType: 'stream'
          })
            .then(function (response) {
            let req = [];        
            req.push(response.data)
            let req2 =[];
            req.forEach((l) => {              
            //   console.log("D",l)              
              Object.keys(l).map(async(k)=>{                                        
                const a=l[k];
                Object.keys(a).map(async(b)=>{                    
                req2.push({                      
                  Assetid:a[b].Assetid,
                  Imageurl:a[b].Imageurl,
                  NFTPrice:a[b].NFTPrice,
                  EscrowAddress:a[b].EscrowAddress,
                  keyId:a[b].keyId,
                  NFTName:a[b].NFTName,
                  userSymbol:a[b].userSymbol,
                  Ipfsurl:a[b].Ipfsurl,
                  ownerAddress:a[b].ownerAddress,
                  previousoaddress:a[b].previousoaddress,
                  TimeStamp:a[b].TimeStamp,
                  NFTDescription:a[b].NFTDescription,
                  HistoryAddress:a[b].HistoryAddress,
                  Appid:a[b].Appid,
                  valid:a[b].valid,
                  CreatorAddress:a[b].CreatorAddress 
                  })   
                })                                                                                                                
              })                                                                     
            });                        
            setgetI(req2)  
            });                    
      //} 
    }
    useEffect(()=>{dbcallsaleal()},[])
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

               {getBosonData.map((x, index) => {
                // console.log("logo",x)
                return(  
                    <>                                        
                    {/* <div className='carousel-cell carousel-cell-40'>
                    {x.valid === "true" && 
                    <SlidesCard title={x.NFTName} description={x.NFTDescription} dataall={x} image={x.Imageurl} ownerAddress={x.ownerAddress}/>
                    }
                    </div> */}
                    <div className='carousel-cell carousel-cell-20'>                    
                    {x.valid === "video" ?(<VideoCard title={x.NFTName} description={x.NFTDescription} url={x.Imageurl} dataall={x} ownerAddress={x.ownerAddress}/>):(
                    <ImageCard title={x.NFTName} description={x.NFTDescription} subtitle="Blazing Futures ꜩ" image={x.Imageurl} dataall={x} ownerAddress={x.ownerAddress}/>
                    )}
                    </div>
                    </>
                )})}                                
                {/* url="https://img.rarible.com/feat/video/webm/x1/81146e5456fb99da97fa898346c06ae0/e7339405/Header_800x800BALEXSPECIALS-Correctedcopy.mp4" */}
                {/* <div className='carousel-cell carousel-cell-40'><SlidesCard /></div> */}
                {/* <div className='carousel-cell carousel-cell-20'>
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
                </div> */}
            </Flickity>
            <br/><br/>
            {/* <Flickity
                className={'d-none d-md-block carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >
            {getI.map((x, index) => {
                console.log("logo",x)
                return(  
                    <>                    
                    <div className='carousel-cell carousel-cell-20'>
                    <VideoCard title={x.NFTName} url="https://img.rarible.com/feat/video/webm/x1/81146e5456fb99da97fa898346c06ae0/e7339405/Header_800x800BALEXSPECIALS-Correctedcopy.mp4" />
                    <ImageCard title={x.NFTDescription} subtitle="Blazing Futures ꜩ" image="https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/76d58bef8d388e94fb254f24706b6b48/05469133/Tessellation21_330.jpeg" />
                    </div>
                    </>
                )})}
            </Flickity> */}

            

            <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
            >
            
            {getBosonData.map((x, index) => {
                return(                    
                <div className="d-md-none">    
                {/* <div className='carousel-cell carousel-cell-20'>                     */}
                <ImageCard title={x.NFTName} description={x.NFTDescription} subtitle="Blazing Futures ꜩ" image={x.Imageurl} dataall={x} ownerAddress={x.ownerAddress}/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {/* </div> */}
                </div>                                   
                )           
            })} 
            
            </Flickity>
                {/* <Row className='overflow-auto flex-nowrap'>
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
                </Row> */}
            {/* </div> */}
        </div>
    );
};

export default Banner;