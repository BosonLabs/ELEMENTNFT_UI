import React, { useState,useEffect } from "react";
//import Card from '../Snippets/Card';
import {Button} from 'react-bootstrap';
import FilterExplore from '../Snippets/FilterExplore';
import CardBuy from "../Snippets/CardBuy";
const axios = require('axios');


const Explore = () => {

    React.useEffect(() => {
    window.scrollTo(0, 0);     
    });
    const[getchain,setchain]=useState("Algorand");
    const[getcategory,setcategory]=useState("All");
    const[getsaletype,setsaletype]=useState("Fixed price");
    const[getprice1,setprice1]=useState(0);
    const[getprice2,setprice2]=useState(0);
    const[getrecent,setrecent]=useState("Recently added");
    console.log("get1",getchain.value)    
    console.log("get2",getcategory.value)    
    console.log("get3",getsaletype.label)    
    console.log("get4",getprice1) 
    console.log("get5",getprice2)   
    console.log("get6",getrecent)    
    
    const[getI,setgetI]=useState([]);   
    console.log("getImgal",getI)    
    const[pageSize,setPageSize]=useState(6); 
    const check=()=>{

        alert("check")
    }

    const dbcallsaleal=async(index)=>{
        //console.log("hello ramachandran")        
        //console.log("inside dbcallsalealgo function")
        //if(localStorage.getItem("wallet")  === null || localStorage.getItem("wallet")  === "" || localStorage.getItem("wallet")  === " " || localStorage.getItem("wallet") === 'undefined' || localStorage.getItem("wallet") === '' || localStorage.getItem("wallet") === "0x"){
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
    const filterdata=()=>{
      if(getprice1 > 0  && getprice2 > 0){
        
        let data=getI.filter((val)=> (val.NFTPrice/1000000) >= getprice1 && (val.NFTPrice/1000000) <= getprice2)
        console.log("filtercall1",data)
        return data;
      }
      if(getrecent === "Low to High"){
        let data=getI.sort((a,b)=>{ return parseInt(a.NFTPrice/1000000) - parseInt(b.NFTPrice/1000000)})
        console.log("filtercall1",data)
        return data;
      }
      if(getrecent ===  "High to Low"){
        let data=getI.sort((a,b)=>{ return parseInt(b.NFTPrice/1000000) - parseInt(a.NFTPrice/1000000)})
        console.log("filtercall1",data)
        return data;
      }
      return getI
    }
    return (
        <div className='mb-36'>
            <div className="mb-16 d-flex align-items-center">
                <div className='h2 w-100 flex-grow-1 d-xl-flex align-items-center'>
                    Explore
                    <div className="ps-xl-4 mt-xl-0 mt-2 flex-grow-1">
                        <FilterExplore 
                        setMax ={(value)=>setprice2(value)}
                        setMin ={(value)=>setprice1(value)}
                        setChain ={(value)=>setchain(value)}
                        setCategory ={(value)=>setcategory(value)}
                        setRecent ={(value)=>setrecent(value)}
                        setSaletype ={(value)=>setsaletype(value)}
                        getrecent ={getrecent}
                        />                        
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6">
                
                {filterdata().map((x, index) => {
                console.log("logo",x)
                if(index<pageSize)
                return(  
                    <>
                    <div className='col mb-4'>
                    <CardBuy verify={true} pAddress={x.previousoaddress} oAddress={x.ownerAddress} img={x.Imageurl} title={x.NFTName} count="401" subTitle={`<span>${x.NFTPrice/1000000}</span>`} linkText={x.NFTPrice} dataall={x} Assetid={x.Assetid}/>  
                    </div>
                    </>                                                                                          
              )})}                              
                
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
                <Button variant='border-grad' className='w-100' size="lg" onClick={()=>{setPageSize(pageSize+6)}}><span>Load More</span></Button>
            </div>

        </div>
    );
};

export default Explore;