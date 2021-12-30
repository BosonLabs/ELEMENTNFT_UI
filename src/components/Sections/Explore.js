import React, { useState,useEffect } from "react";
import Card from '../Snippets/Card';
import {Button} from 'react-bootstrap';
import FilterExplore from '../Snippets/FilterExplore';
const axios = require('axios');


const Explore = () => {

    
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
    return (
        <div className='mb-36'>
            <div className="mb-16 d-flex align-items-center">
                <div className='h2 w-100 flex-grow-1 d-xl-flex align-items-center'>
                    Explore
                    <div className="ps-xl-4 mt-xl-0 mt-2 flex-grow-1">
                        <FilterExplore />
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5">
                <div className="col mb-4" onClick={()=>{check()}} >
                {getI.map((x, index) => {
                console.log("logo",x)
                return(  
                    <>
                    <Card verify={true} img={x.image} title={x.counter} count="401" subTitle={`<span>Highest bid</span> <span>${x.price/1000000}</span>`} linkText="0.221 WETH" />
                    <br/>
                    </>                                                                                          
              )})}                              
                </div>
                {/* <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div>
                <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div>
                <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div>
                <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div>
                <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div>
                <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div>
                <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div>
                <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div>
                <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div> */}
            </div>

            <div className="load-more">
                <Button variant='border-grad' className='w-100' size="lg"><span>Load More</span></Button>
            </div>

        </div>
    );
};

export default Explore;