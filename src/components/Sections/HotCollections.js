import React, { useState,useEffect } from "react";
import Flickity from 'react-flickity-component'
import Card from '../Snippets/CardColletion';
const axios = require('axios');


const HotBids = () => {    
    const[getI,setgetI]=useState([]); 
    console.log("getImgal",getI)    
    const check=()=>{
        alert("check")
    }

    const dbcallsaleal=async(index)=>{
        console.log("hello ramachandran")        
        console.log("inside dbcallsalealgo function")
        //if(localStorage.getItem("wallet")  === null || localStorage.getItem("wallet")  === "" || localStorage.getItem("wallet")  === " " || localStorage.getItem("wallet") === 'undefined' || localStorage.getItem("wallet") === '' || localStorage.getItem("wallet") === "0x"){
          //alert("please connect your wallet")
        //}
        //else{                        
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
              console.log("D",l)              
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
                  Appid:a[b].Appid  
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

<div className="row row-cols-1 row-cols-sm-2 row-cols-md-6 row-cols-lg-6">
{getI.map((x, index) => {
                console.log("logo",x)
                return(  
                    <>
                  
                    <div className='col mb-4'>  
                    
                    <Card verify={true} img={x.Imageurl} title={x.NFTName} count="401" subTitle={`<span>Highest bid</span> <span>${x.NFTPrice/1000000}</span>`} linkText="0.221 WETH" />
                    
                    </div>                   
                    </>                                                                                          
              )})}                              
</div>


                
                
                {/* <div className='carousel-cell carousel-cell-20'><Card verify={true} title="ELEMENT Multiples" subTitle="$1,426,752" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="Untitled" count="109" subTitle={`6.5 ETH <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card verify={true} title="Phunk #9379" count="109" subTitle={`<span>Not for sale</span> <span>1 edition</span>`} linkText="Bid 0.02 WETH" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="LAND (-98, 129)" count="65" subTitle={`6.5 ETH <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card verify={true} title="Untitled" count="109" subTitle={`6.5 ETH <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card verify={true} title="Phunk #9379" count="109" subTitle={`<span>Not for sale</span> <span>1 edition</span>`} linkText="Bid 0.02 WETH" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="LAND (-98, 129)" count="65" subTitle={`6.5 ETH <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="Untitled" count="109" subTitle={`6.5 ETH <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="Phunk #9379" count="109" subTitle={`<span>Not for sale</span> <span>1 edition</span>`} linkText="Bid 0.02 WETH" /></div> */}
            </Flickity>

        </div>
    );
};

export default HotBids;