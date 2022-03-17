import React, { useState,useEffect,useContext } from "react";
import Flickity from 'react-flickity-component'
import Card from '../Snippets/CardColletion';
import { DataContext } from '../../Context/DataContext';

const HotBids = () => {  
    // React.useEffect(() => {
    //     window.scrollTo(0, 0);     
    // });    
    const {getHotCollection}=useContext(DataContext)        
    const flickityOptions = {
        initialIndex: 0,
        groupCells: true,
        pageDots: false,
        contain: true
    }

    return (
        <div className='mb-36'>
            <div className="mb-16 d-flex align-items-center">
                <div className='h2 d-flex align-items-center'>
                    Hot collections <img style={{width: '32px', marginLeft: '8px'}} src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f4a5.png" alt="fire" />
                </div>
            </div>
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >
               {getHotCollection.map((x, index) => {                
                return(  
                    <>                                        
                    <div className='carousel-cell carousel-cell-20'>                                          
                    <Card verify={x.valid} img={x.Imageurl} title={x.UserName} count="401" subTitle={x.Twittername} linkText="0.221 WETH" dataall={x} owner={x.WalletAddress} Assetid={x.Assetid}/>                    
                    </div>                                       
                    </>                                                                                          
              )})}                                                                              
            </Flickity>
        </div>
    );
};

export default HotBids;