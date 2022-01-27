import React, { useState,useEffect } from "react";
import Flickity from 'react-flickity-component'
// import {Row, Col} from 'react-bootstrap';
import Card from '../Snippets/Card';
import CardLiveA from "../Snippets/CardLiveA";
import ReactPaginate from 'react-paginate';
const axios = require('axios');


const LiveAuctions = () => {
    const[getI,setgetI]=useState([]); 
    console.log("getImgLive",getI)    
    const check=()=>{
        alert("check")
    }
    const flickityOptions = {
        initialIndex: 0,
        groupCells: true,
        pageDots: false,
        contain: true
    }


    const dbcallsaleal=async(index)=>{
        //console.log("hello ramachandran")        
        //console.log("inside dbcallsalealgo function")
        //if(sessionStorage.getItem("wallet")  === null || sessionStorage.getItem("wallet")  === "" || sessionStorage.getItem("wallet")  === " " || sessionStorage.getItem("wallet") === 'undefined' || sessionStorage.getItem("wallet") === '' || sessionStorage.getItem("wallet") === "0x"){
          //alert("please connect your wallet")
        //}
        //else{                        
          axios({
            method: 'get',
            url: 'https://demonft-2e778-default-rtdb.firebaseio.com/imagerefexploreoneAlgos.json',
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
                  Appid:a[b].Appid,
                  valid:a[b].valid,
                  CreatorAddress:a[b].CreatorAddress
                  })   
                })                                                                                                                
              })                                                                     
            });                        
            setgetI(req2)  
            });                    
      } 
    //}
    useEffect(()=>{dbcallsaleal()},[])
    
    //imagerefAlgolt
    // const dbcallsaleal=async(index)=>{
    //     console.log("hello ramachandran")        
    //     console.log("inside dbcallsalealgo function")        
    //       axios({
    //         method: 'get',
    //         url: 'https://demonft-2e778-default-rtdb.firebaseio.com/imagerefexploreoneAlgos.json',
    //         responseType: 'stream'
    //       })
    //         .then(function (response) {
    //         let req = [];        
    //         req.push(response.data)
    //         let req2 =[];
    //         req.forEach((a) => {              
    //           console.log("Dl",a)              
    //           Object.keys(a).map(async(b)=>{    
    //             const l=a[b];
    //             console.log("Dla",a[b])              
    //             // Object.keys(a).map(async(b)=>{                    
    //             req2.push({                      
    //               Assetid:a[b].Assetid,
    //               Imageurl:a[b].Imageurl,
    //               NFTPrice:a[b].NFTPrice,
    //               EscrowAddress:a[b].EscrowAddress,
    //               keyId:a[b].keyId,
    //               NFTName:a[b].NFTName,
    //               userSymbol:a[b].userSymbol,
    //               Ipfsurl:a[b].Ipfsurl,
    //               ownerAddress:a[b].ownerAddress,
    //               previousoaddress:a[b].previousoaddress,
    //               TimeStamp:a[b].TimeStamp,
    //               NFTDescription:a[b].NFTDescription,
    //               HistoryAddress:a[b].HistoryAddress,
    //               Appid:a[b].Appid,
    //               valid:a[b].valid,
    //               CreatorAddress:a[b].CreatorAddress 
    //               })   
    //             //})                                                                                                                
    //           })    
    //           setgetI(req2)                                                                  
    //         });                        
            
    //         });   
                             
    //   //} 
    // }
    // useEffect(()=>{dbcallsaleal()},[])
    return (
        <div className='mb-36'>
            <div className="mb-16 d-flex align-items-center">
                <div className='h2 d-flex align-items-center'>
                    Live auctions <img style={{width: '32px', marginLeft: '8px'}} src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f525.png" alt="fire" />
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
                console.log("logo",x)
                return(  
                    <>
                    {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-1">               */}
                    {/* subTitle="$1,426,752" */}
                    <div className='carousel-cell carousel-cell-20' >
                    <CardLiveA timer='19:10' pAddress={x.previousoaddress} oAddress={x.ownerAddress} img={x.Imageurl} verify={true} count="401"  dataall={x}/> 
                    </div>                    
                    {/* </div> */}
                    </>                                                                                          
              )})}                                                                
                
                
                {/* <div className='carousel-cell carousel-cell-20'><Card timer='19:10' verify={true} title="Wizard Furbiez #29" count="8" subTitle={`<span>Auction</span> <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card verify={true} title="Wizard Furbiez #30" count="6" subTitle={`<span>Highest bid</span> <span>1 edition</span>`} linkText="Bid 0.02 WETH" /></div>
                <div className='carousel-cell carousel-cell-20'><Card timer='01:19:10' verify={true} title="Wizard Furbiez #26" count="25" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.001 WETH" /></div>
                <div className='carousel-cell carousel-cell-20'><Card verify={true} title="Wizard Furbiez #29" count="8" subTitle={`<span>Auction</span> <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card verify={true} title="Wizard Furbiez #30" count="6" subTitle={`<span>Highest bid</span> <span>1 edition</span>`} linkText="Bid 0.02 WETH" /></div>
                <div className='carousel-cell carousel-cell-20'><Card timer='19:10' verify={true} title="Wizard Furbiez #26" count="25" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.001 WETH" /></div>
                <div className='carousel-cell carousel-cell-20'><Card verify={true} title="Wizard Furbiez #29" count="8" subTitle={`<span>Auction</span> <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card timer='19:10' verify={true} title="Wizard Furbiez #30" count="6" subTitle={`<span>Highest bid</span> <span>1 edition</span>`} linkText="Bid 0.02 WETH" /></div> */}
            

            {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5">
              <div className='col mb-4'>
                  <Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" />
              </div>
              <div className='col mb-4'>
                  <Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" />
              </div>
              <div className='col mb-4'>
                  <Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" />
              </div>
              <div className='col mb-4'>
                  <Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" />
              </div>
              <div className='col mb-4'>
                  <Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" />
              </div>
              <div className='col mb-4'>
                  <Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" />
              </div>
              <div className='col mb-4'>
                  <Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" />
              </div>
              <div className='col mb-4'>
                  <Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" />
              </div>
          </div> */}

</Flickity>

        </div>
    );
};

export default LiveAuctions;