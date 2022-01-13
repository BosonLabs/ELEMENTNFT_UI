import React,{useState,createContext,useEffect} from 'react';
const axios = require('axios');
export const MovieContext = createContext();
export const Movie = props =>{
    const[getI,setgetI]=useState([""]); 
    const[getIexplore,setgetIexplore]=useState([]);  
    // console.log("gethome",getI)        
    // const [mov,setmov]=useState([
    //     {
    //         name:'hari',
    //         price:1
    //     },
    //     {
    //         name:'ram',
    //         price:2
    //     },
    //     {
    //         name:'man',
    //         price:3
    //     },
    // ])

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
                  Appid:a[b].Appid  
                  })   
                })                                                                                                                
              })                                                                     
            });                        
            setgetI(req2)  
            });            
    }
    useEffect(()=>{dbcallsaleal()},[])

    const dbcallsalealexplore=async(index)=>{        
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
                  Appid:a[b].Appid  
                  })   
                })                                                                                                                
              })                                                                     
            });                        
            setgetIexplore(req2)  
            });                    
      } 
    useEffect(()=>{dbcallsalealexplore()},[])
    return(
        <MovieContext.Provider value={{getI,setgetI}}>
            {props.children}
        </MovieContext.Provider>              
    )
}