import React,{useState,useEffect} from 'react';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
import CollectionItem from '../Snippets/CollectionItem';
import moment from 'moment';
import firebase from "../../firebase";

const TopCollectionsSelles = (props) => {

    const dateOptions = ["1", "7", "30"];
    const directionOptions = ["Sellers", "Buyers"];
    const [date, setDate] = useState(dateOptions[0]);
    const [direction, setDirection] = useState(directionOptions[0]);    
    const[getIb,setgetIb]=useState([]);    
    const[getImb,setgetImb]=useState([]);
    console.log("SellOneDay",getImb)    

    const handleSelect=(e)=>{        
        setDirection(e)
      }
    const handleSelect2=(e)=>{        
        setDate(e)
    }
  //buyers
  const dbcallalgobuy=async()=>{    
    let req = [];
    firebase.database().ref("imagerefbuy").on("value", (data) => {      
      if (data) {
        data.forEach((d) => {          
          const a=d.val();
            Object.keys(a).map(async(b)=>{                  
                      req.push({
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
        });        
        setgetIb(req)              
      }    
      //setgetImb(req)
    });
  }  
  useEffect(()=>{dbcallalgobuy()},[])
  //seller  
  const dbcallalgosale=async()=>{   
    let reqsale = [];
    firebase.database().ref("imagerefexploreoneAlgos").on("value", (data) => {      
      if (data) {
        data.forEach((d) => {          
          const a=d.val();
            Object.keys(a).map(async(b)=>{                    
                      reqsale.push({
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
        });        
        setgetImb(reqsale) 
      }          
    });
  }
  useEffect(()=>{dbcallalgosale()},[])
  const filterdata=()=>{        
        if(direction === 'Sellers') {
          if(date === '1')
          {              
              let data = getImb.filter((val)=>{              
              let currentdate=moment().format('ddd MMM DD YYYY')              
              let createddate=moment(val.TimeStamp).format('ddd MMM DD YYYY')              
              if(currentdate === createddate ){
              let datas=getImb.sort((a,b)=>{                  
                  return parseInt(b.NFTPrice) - parseInt(a.NFTPrice)
               })              
              return datas;
              }                          
            })              
              return data;              
          }  
          else if(date === '7') {            
            let data = getIb.filter((val)=>{                
            let weekdates=moment().subtract(parseInt(date),"days").format('ddd MMM DD YYYY')                                
              if(moment(val.TimeStamp).endOf(weekdates)){        
                let datas=getIb.sort((a,b)=>{                      
                  return parseInt(b.NFTPrice) - parseInt(a.NFTPrice)                
                 })
                return datas;
            }                        
          })        
          return data;            
        }
        else{
          let month=moment().subtract(1, 'months');        
          let monthend=month.format('ddd MMM DD YYYY')
          let datamonth = getIb.filter((val)=>{                        
          if(moment(val.TimeStamp).endOf(monthend)){        
                let datass=getIb.sort((a,b)=>{                      
                  return parseInt(b.NFTPrice) - parseInt(a.NFTPrice)                
            })
              return datass;
            }                        
          })
          return datamonth;
        }
          // else{          
          //     let data = getImb.filter((val)=>{              
          //     let currentdate=moment().subtract(1,"days").format('ddd MMM DD YYYY')              
          //     let weekdate=moment().subtract(parseInt(date),"days").format('ddd MMM DD YYYY')              
          //     if(moment(val.TimeStamp).isBetween(weekdate,currentdate)){
          //       let datas=getImb.sort((a,b)=>{                  
          //         return parseInt(b.NFTPrice) - parseInt(a.NFTPrice)
          //      })              
          //     return datas;
          //     }                          
          //   })                      
          //   return data;    
          // }
        }
        else{        
        if(date === '1')
        {
              let data = getIb.filter((val)=>{
              let currentdate=moment().format('ddd MMM DD YYYY')              
              let createddate=moment(val.TimeStamp).format('ddd MMM DD YYYY')
              if(currentdate===createddate){
                let datas=getImb.sort((a,b)=>{                  
                  return parseInt(b.NFTPrice) - parseInt(a.NFTPrice)
               })              
              return datas;
              }                          
          })          
              return data;
        }
        else if(date === '7') {            
          let data = getIb.filter((val)=>{                
          let weekdates=moment().subtract(parseInt(date),"days").format('ddd MMM DD YYYY')                                
            if(moment(val.TimeStamp).endOf(weekdates)){        
              let datas=getIb.sort((a,b)=>{                      
                return parseInt(b.NFTPrice) - parseInt(a.NFTPrice)                
               })
              return datas;
          }                        
        })        
        return data;            
      }
      else{
        let month=moment().subtract(1, 'months');        
        let monthend=month.format('ddd MMM DD YYYY')
        let datamonth = getIb.filter((val)=>{                        
        if(moment(val.TimeStamp).endOf(monthend)){        
              let datass=getIb.sort((a,b)=>{                      
                return parseInt(b.NFTPrice) - parseInt(a.NFTPrice)                
          })
            return datass;
          }                        
        })
        return datamonth;
      }
        // else{           
        //     let data = getIb.filter((val)=>{            
        //     let currentdates=moment().subtract(1,"days").format('ddd MMM DD YYYY')              
        //     let weekdates=moment().subtract(parseInt(date),"days").format('ddd MMM DD YYYY')            
        //     if(moment(val.TimeStamp).isBetween(weekdates,currentdates)){
        //       let datas=getImb.sort((a,b)=>{                
        //         return parseInt(b.NFTPrice) - parseInt(a.NFTPrice)
        //      })            
        //     return datas;
        //     }                        
        //   })            
        //     return data;            
        // }
        }
      }
  useEffect(()=>{filterdata()},[])
    return (

        <div className='mb-36'>
            <div className="mb-32 d-flex align-items-center">
                <div className='h2 d-flex align-items-center'>
                    Top 
                    &nbsp;
                    {direction}
                    <DropdownButton onSelect={handleSelect}>                                                
                            <Dropdown.Item eventKey="Sellers" variant="reset" className='dropdown-btn-grad'>Sellers                         
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Buyers" variant="reset" className='dropdown-btn-grad'>Buyers
                            </Dropdown.Item>                        
                    </DropdownButton>
                     in
                     &nbsp;
                     {date} day
                    <DropdownButton onSelect={handleSelect2}>                        
                            <Dropdown.Item eventKey="1" variant="reset" className='dropdown-btn-grad'>1 day                                 
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="7" variant="reset" className='dropdown-btn-grad'>7 days</Dropdown.Item>
                            <Dropdown.Item eventKey="30" variant="reset" className='dropdown-btn-grad'>30 days</Dropdown.Item>                        
                    </DropdownButton>
                </div>
            </div>

            <div className="">
              <ul className='collection-list list-unstyled flex-wrap m-0 d-flex align-items-start'>
            {filterdata().map((x, index) => (                      
                <li className='mb-3'>
                {/* <Card verify={true} img={x.Imageurl} title={x.NFTName} count="401" subTitle={`<span>Highest bid</span> <span>${x.NFTPrice/1000000}</span>`} linkText="0.221 WETH" dataall={x}/> */}
                        <CollectionItem Imageurl={x.Imageurl} verify={true} count={index + 1} title={x.NFTName} amount={x.NFTPrice} appid={x.Appid} assetid={x.Assetid} escrowaddress={x.EscrowAddress} historyaddress={x.HistoryAddress} imageurl={x.Imageurl} ipfsurl={x.Ipfsurl} nftdescription={x.NFTDescription} TimeStamp={x.TimeStamp} keyId={x.keyId} ownerAddress={x.ownerAddress} previousaddress={x.previousaddress} userSymbol={x.userSymbol} dataall={x} Assetid={x.Assetid}/>   
                {/* follow={props.follow} */}
                </li>
            ))}
            </ul>                                
            </div>
            <Link to="/" className='btn d-block mt-4 d-sm-none ms-auto btn-white'>Sign in</Link>
        </div>
    );
};

export default TopCollectionsSelles;