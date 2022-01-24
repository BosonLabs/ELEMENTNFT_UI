import React, { useState,useEffect } from "react";
import Flickity from 'react-flickity-component'
import Card from '../Snippets/Card';
import CardHotbids from "../Snippets/CardHotbids";
import CardLiveA from "../Snippets/CardLiveA";
const axios = require('axios');

const HotBids = () => {
    const[getI,setgetI]=useState([]); 
    console.log("getImgal",getI)        

    const dbcallsaleal=async(index)=>{
        //console.log("hello ramachandran")        
        //console.log("inside dbcallsalealgo function")
        //if(localStorage.getItem("wallet")  === null || localStorage.getItem("wallet")  === "" || localStorage.getItem("wallet")  === " " || localStorage.getItem("wallet") === 'undefined' || localStorage.getItem("wallet") === '' || localStorage.getItem("wallet") === "0x"){
          //alert("please connect your wallet")
        //}
        //else{  imagerefAlgo                      
          axios({
            method: 'get',
            url: 'https://demonft-2e778-default-rtdb.firebaseio.com/imagerefbuy.json',
            responseType: 'stream'
          })
            .then(function (response) {
            let req = [];        
            req.push(response.data)
            let req2 =[];
            req.forEach((l) => {              
              console.log("Dd",l)              
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
                    Hot bids
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


                {getI.map((x, index) => {
                // console.log("logo",x)
                return(  
                    <>
                    {/* <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1">
                    <div className='col mb-4'> */}
                    <div className='carousel-cell carousel-cell-20'>
                      <CardHotbids HistoryAddress={x.HistoryAddress} pAddress={x.previousoaddress} oAddress={x.ownerAddress} verify={true} img={x.Imageurl} title={x.NFTName} count="401" subTitle={`<span>Highest bid</span> <span>${x.NFTPrice/1000000}</span>`} linkText="0.221 WETH" dataall={x} />
                    </div>
                    {/* </div>                    
                    </div> */}
                    </>                                                                                          
              )})}                              



                {/* <div className='carousel-cell carousel-cell-20'><Card title="LAND (-98, 129)" count="65" subTitle={`6.5 ETH <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="Untitled" count="109" subTitle={`6.5 ETH <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="Phunk #9379" count="109" subTitle={`<span>Not for sale</span> <span>1 edition</span>`} linkText="Bid 0.02 WETH" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="LAND (-98, 129)" count="65" subTitle={`6.5 ETH <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="Untitled" count="109" subTitle={`6.5 ETH <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="Phunk #9379" count="109" subTitle={`<span>Not for sale</span> <span>1 edition</span>`} linkText="Bid 0.02 WETH" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="LAND (-98, 129)" count="65" subTitle={`6.5 ETH <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="Untitled" count="109" subTitle={`6.5 ETH <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="Phunk #9379" count="109" subTitle={`<span>Not for sale</span> <span>1 edition</span>`} linkText="Bid 0.02 WETH" /></div> */}
            </Flickity>

        </div>
    );
};

export default HotBids;