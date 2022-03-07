import React,{useState,useEffect,useContext} from 'react';
import {Dropdown,DropdownButton} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
//import CollectionItem from '../Snippets/CollectionItem';
import moment from 'moment';
//import firebase from "../../firebase";
import CollectionItemCopy from '../Snippets/CollectionItemCopy';
import { DataContext } from '../../Context/DataContext';
import configfile from '../../config.json'
import { DateTime } from "luxon";
const axios = require('axios');

const TopCollections = () => {
    
    const {getApiDataNftFull,setApiDataNftFull}=useContext(DataContext)
    const [getApiDataNftFullage,setApiDataNftFullPage]=useState([""])
    console.log("getApiFullTopCollectionPage",getApiDataNftFullage)        
    const dateOptions = ["1", "7", "30"];
    const [date, setDate] = useState(dateOptions[0]);    
    //const[getIb,setgetIb]=useState([]);
    //console.log("getImgalbuy",getIb)
    const handleSelect=(e)=>{
        //console.log(e);
        setDate(e)
      }
          //buyers
//   const dbcallalgobuy=async()=>{    
//     let req = [];
//     firebase.database().ref("imagerefbuy").on("value", (data) => {      
//       if (data) {
//         data.forEach((d) => {          
//           const a=d.val();
//             Object.keys(a).map(async(b)=>{                  
//                       req.push({
//                         Assetid:a[b].Assetid,
//                         Imageurl:a[b].Imageurl,
//                         NFTPrice:a[b].NFTPrice,
//                         EscrowAddress:a[b].EscrowAddress,
//                         keyId:a[b].keyId,
//                         NFTName:a[b].NFTName,
//                         userSymbol:a[b].userSymbol,
//                         Ipfsurl:a[b].Ipfsurl,
//                         ownerAddress:a[b].ownerAddress,
//                         previousoaddress:a[b].previousoaddress,
//                         TimeStamp:a[b].TimeStamp,
//                         NFTDescription:a[b].NFTDescription,
//                         HistoryAddress:a[b].HistoryAddress,
//                         Appid:a[b].Appid,
//                         valid:a[b].valid,
//                         CreatorAddress:a[b].CreatorAddress 
//                     })                    
//             })            
//         });        
//         setgetIb(req)              
//       }    
//       //setgetImb(req)
//     });
//   }  
//   useEffect(()=>{dbcallalgobuy()},[])


//console.log('getApiDataNftFull', getApiDataNftFullage)

  const filterdata=()=>{           
    if(date === '1')
    {
        let currentdate ="";
        let createddate ="";
          let data = getApiDataNftFull.filter((val)=>{          
          if(val.creationTime === "" || val.creationTime === undefined || val.creationTime === null){
          }else{
            currentdate=moment().format('YYYY.MM.DD')                                
            createddate = val.creationTime.substr(0,10)                        
          }          
          return currentdate===createddate
      })
          console.log("B1Top",data)
          return data;
    }else{
        let currentdates =""
        let weekdates =""
        let data = getApiDataNftFull.filter((val)=>{    
            if(val.creationTime === "" || val.creationTime === undefined || val.creationTime === null){
            }else{
                currentdates=moment().subtract(1,"days").format('YYYY.MM.DD')              
                weekdates=moment().subtract(parseInt(date),"days").format('YYYY.MM.DD')                
                let createddate = val.creationTime.substr(0,10)                
                return (createddate >= weekdates && createddate <= currentdates);                
            }            
          })
            console.log("B7Top",data)
            return data;            
    }  
    
  }
  useEffect(()=>{filterdata()},[])

    return (
        <div className='mb-36'>
            <div className="mb-32 d-flex align-items-center">
                <div className='h2 d-flex align-items-center'>
                    TOP COLLECTION IN

                    &nbsp;{date} DAY
                    <DropdownButton onSelect={handleSelect}>                        
                            <Dropdown.Item eventKey="1" variant="reset" className='dropdown-btn-grad'>1 day                                 
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="7" variant="reset" className='dropdown-btn-grad'>7 days</Dropdown.Item>
                            <Dropdown.Item eventKey="30" variant="reset" className='dropdown-btn-grad'>30 days</Dropdown.Item>                        
                    </DropdownButton>
                    <Dropdown>
                        {/* <Dropdown.Toggle variant="reset" className='dropdown-btn-grad'>
                            1 day
                        </Dropdown.Toggle> */}

                        
                        {/* <Dropdown.Menu className='link-flex'>
                            <Dropdown.Item href="/">1 day <svg viewBox="0 0 14 11" fill="none" width="12" height="12" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye jVZlpM"><path d="M1 5L5 9L13 1" stroke="#0066ff" strokeWidth="2" strokeLinecap="round"></path></svg></Dropdown.Item>
                            <Dropdown.Item href="/">7 days</Dropdown.Item>
                            <Dropdown.Item href="/">30 days</Dropdown.Item>
                        </Dropdown.Menu> */}
                    </Dropdown>
                </div>
                {/* <Link to="/" className='btn d-none d-sm-inline-block ms-auto btn-white'>Sign in</Link> */}
            </div>

            <div className="">
              <ul className='collection-list list-unstyled flex-wrap m-0 d-flex align-items-start'>
            {filterdata().map((x, index) => (   
                                                                
                    <li className='mb-3'>                      
                    <CollectionItemCopy Imageurl={x.nftImageAsString} verify={true} count={index + 1} title={x.nftName} amount={x.nftPrice} appid={x.appId} assetid={x.assetId} escrowaddress={x.esrowAddress} historyaddress={x.nftHistoryAddresses} imageurl={x.nftImageAsString} ipfsurl={x.ipfsHexUrl} nftdescription={x.nftDescription} TimeStamp={x.creationTime} keyId={""} ownerAddress={x.ownerAddress} previousaddress={x.previousOwner} userSymbol={x.nftSymbol} dataall={x} Assetid={x.assetId}/>                       
                    </li>                                                                                 
            ))}
            </ul>
            </div>
            

            {/* <div className="overflow-auto">
                <ul className='collection-list list-unstyled m-0 d-flex align-items-start'>
                    <li>
                        <CollectionItem count={1} title="adidas Originals: Into the Metaverse" amount="$34,845,758" />
                        <CollectionItem count={2} title="CloneX" amount="$7,418,707" />
                        <CollectionItem count={3} title="My Pet Hooligan" amount="$3,333,156" />
                    </li>
                    <li>
                        <CollectionItem count={4} title="Terraforms" amount="$2,846,949" />
                        <CollectionItem count={5} title="BoredApeYachtClub" amount="$2,225,029" />
                        <CollectionItem count={6} title="Nanopass" amount="$2,097,475" />
                    </li>
                    <li>
                        <CollectionItem count={7} title="Town Star" amount="$1,972,028" />
                        <CollectionItem count={8} title="MutantApeYachtClub" amount="$1,951,451" />
                        <CollectionItem count={9} title="Party Bears" amount="$1,890,233" />
                    </li>
                    <li>
                        <CollectionItem count={10} title="Sandbox's LANDs" amount="$1,777,924" />
                        <CollectionItem count={11} title="RTFKT - CloneX Mintvial" amount="$1,321,900" />
                        <CollectionItem count={12} title="Shiba Social Club" amount="$1,281,425" />
                    </li>
                    <li>
                        <CollectionItem count={13} title="Art Blocks Factory" amount="$1,105,860" />
                        <CollectionItem count={14} title="Doodles" amount="$1,024,316" />
                        <CollectionItem count={15} title="DEGENERATE/REGENERATE" amount="$945,556" />
                    </li>
                </ul>
            </div> */}

            <Link to="/" className='btn d-block mt-4 d-sm-none ms-auto btn-white'>Sign in</Link>
        </div>
    );
};

export default TopCollections;