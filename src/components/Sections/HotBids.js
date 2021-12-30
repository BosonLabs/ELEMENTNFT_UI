import React, { useState,useEffect } from "react";
import Flickity from 'react-flickity-component'
import Card from '../Snippets/Card';
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
        if(localStorage.getItem("wallet")  === null || localStorage.getItem("wallet")  === "" || localStorage.getItem("wallet")  === " " || localStorage.getItem("wallet") === 'undefined' || localStorage.getItem("wallet") === '' || localStorage.getItem("wallet") === "0x"){
          alert("please connect your wallet")
        }
        else{                        
          axios({
            method: 'get',
            url: 'https://demonft-2e778-default-rtdb.firebaseio.com/imagerefexploreoneAlgos/.json',
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
                    userSymbol:a[b].userSymbol,
                    title: a[b].id,
                    price: a[b].priceSet,
                    highestBid: a[b].keyId,
                    counter:a[b].userName ,                    
                    bid:a[b].ownerAddress,
                    image: a[b].imageUrl,
                    image2x: a[b].paramsdb,
                    category: a[b].privatekey,
                    categoryText: a[b].cAddress,                    
                    url: a[b].history,
                    date:a[b].datesets,
                    description:a[b].description,
                    extra:a[b].extra1,
                    ipfsurl:a[b].ipfsUrl,
                    previousaddress:a[b].previousoaddress,
                    soldd:a[b].soldd,
                    whois:a[b].whois,
                    Mnemonic:a[b].Mnemonic,
                    usdcids:a[b].usdcids,
                  applicationid:a[b].applicationid,
                  escrowaddress:a[b].escrowaddress,
                  resdata1:"",
                    users: [                
                      {               
                        avatar: a[b].imageUrl,
                      },
                    ],
                  })   
                })                                                                                                                
              })                                                                     
            });                        
            setgetI(req2)  
            });                    
      } 
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

<div className='carousel-cell carousel-cell-20' onClick={()=>{check()}}>
{getI.map((x, index) => {
                console.log("logo",x)
                return(  
                    <>
                    <Card verify={true} img={x.image} title={x.counter} count="401" subTitle={`<span>Highest bid</span> <span>${x.price/1000000}</span>`} linkText="0.221 WETH" />
                    <br/>
                    </>                                                                                          
              )})}                              
</div>


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