import React, { useState,useEffect,useContext } from "react";
import Flickity from 'react-flickity-component'
import Card from '../Snippets/CardColletion';
import firebase from '../../firebase';
import { DataContext } from '../../Context/DataContext';
const axios = require('axios');


const HotBids = () => {    
  //const[getIProapp,setgetIProapp]=useContext(DataContext)
  // console.log("appget1",getIProapp)
    const[getI,setgetI]=useState([]); 
    console.log("getImgal",getI)    
    const[getIPro,setgetIPro]=useState([""]);
    console.log("getIPro",getIPro) 
    const check=()=>{
        alert("check")
    }

    const dbcallPro=async()=>{            
      let r=[];
      try {         
      firebase.database().ref("userprofile").on("value", (data) => {          
        if (data) {             
          let a=data.val()                   
          Object.keys(a).map(async(k)=>{                                    
            console.log("proff",a[k])
            r.push({
              Bio:a[k].Bio,
              Customurl: a[k].Customurl,
              Email: a[k].Email,
              Imageurl:a[k].Imageurl,
              Personalsiteurl: a[k].Personalsiteurl,
              TimeStamp: a[k].TimeStamp,
              Twittername: a[k].Twittername,
              UserName: a[k].UserName,
              WalletAddress: a[k].WalletAddress,
              bgurl:a[k].bgurl,
              valid:a[k].valid
            })                
          })            
        }
        else{
          setgetIPro([""]);  
        }
        setgetIPro(r);
      });                  
    } catch (error) {
      console.log('error occured during search', error);    
    }                
    }    
  useEffect(()=>{dbcallPro()},[])

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


               {getIPro.map((x, index) => {
                console.log("logo",x)
                return(  
                    <>                    
                    {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-1">  */}                     
                    {/* {x.valid === "validated" &&  */}
                    <div className='carousel-cell carousel-cell-20'>                                          
                    <Card verify={x.valid} img={x.Imageurl} title={x.UserName} count="401" subTitle={x.Twittername} linkText="0.221 WETH" dataall={x} owner={x.WalletAddress}/>                    
                    </div>                   
                    {/* }                                           */}
                    {/* </div> */}
                    </>                                                                                          
              )})}                              



                
                
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