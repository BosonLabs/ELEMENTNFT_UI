import React,{useState,useEffect} from 'react';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
import CollectionItem from '../Snippets/CollectionItem';
import moment from 'moment';
import firebase from "../../firebase";

const TopCollectionsSelles = (props) => {

    // console.log("topsc",props.follow)
    const dateOptions = ["1", "7", "30"];
    const directionOptions = ["Sellers", "Buyers"];
    const [date, setDate] = useState(dateOptions[0]);
    const [direction, setDirection] = useState(directionOptions[0]);
    //console.log("ses",direction);
    //console.log("sesd",date);
    const[getIb,setgetIb]=useState([]);
    //console.log("getImgalbuy",getIb)
    const[getImb,setgetImb]=useState([]);
    //console.log("getImgalgosssbuy",getImb)
    //options={direction} onChange={(e) => setDirection(e.target.value)} value={direction}
    const handleSelect=(e)=>{
        //console.log(e);
        setDirection(e)
      }
    const handleSelect2=(e)=>{
        //console.log(e);
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
              //console.log("one")
              let data = getImb.filter((val)=>{
              // console.log("datainside",val)
              let currentdate=moment().format('ddd MMM DD YYYY')
              //let currentdate = moment(val.url);
              //console.log("currentdate",currentdate)
              let createddate=moment(val.TimeStamp).format('ddd MMM DD YYYY')
              //console.log("createddate",createddate)
              return currentdate === createddate 
            })
              //console.log("R1",data)
              return data;              
          }  
          else{          
              let data = getImb.filter((val)=>{
              //console.log("sellers7get",val)
              //console.log("sellers7",val.TimeStamp)
              //console.log("sellers two",moment().subtract(parseInt(date),"days").format('ddd MMM DD YYYY'))
              let currentdate=moment().subtract(1,"days").format('ddd MMM DD YYYY')
              //console.log("curr7",currentdate)
              let weekdate=moment().subtract(parseInt(date),"days").format('ddd MMM DD YYYY')
              //console.log("curr8",weekdate)                              
              //return moment(val.TimeStamp).isBetween(weekdate,currentdate)
              //const dateTimeFormat = "ddd MMM DD YYYY";
              //console.log("PP",moment(val.TimeStamp).isBetween(weekdate, currentdate))
              return moment(val.TimeStamp).isBetween(weekdate, currentdate)                
            })          
            //console.log("R7",data)            
            return data;    
          }
        }
        else{        
        if(date === '1')
        {
              let data = getIb.filter((val)=>{
              let currentdate=moment().format('ddd MMM DD YYYY')
              //let currentdate = moment(val.url);
              //console.log("currentdate",currentdate)
              let createddate=moment(val.TimeStamp).format('ddd MMM DD YYYY')
              return currentdate===createddate 
          })
              //console.log("B1",data)
              return data;
        }
        else{           
            let data = getIb.filter((val)=>{
            //console.log("Buyers7get",val)
            //console.log("Buyers7",val.TimeStamp)
            let currentdates=moment().subtract(1,"days").format('ddd MMM DD YYYY')              
            let weekdates=moment().subtract(parseInt(date),"days").format('ddd MMM DD YYYY')
            //let createddate=moment(val.adddate)
            return moment(val.TimeStamp).isBetween(weekdates,currentdates)                    
          })
            //console.log("B7",data)            
            return data;            
        }
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
                {/* <ul className='collection-list list-unstyled m-0 d-flex align-items-start'>
                    <li>
                        <CollectionItem verify={true} count={1} title="adidas Originals: Into the Metaverse" amount="$34,845,758" />
                        <CollectionItem verify={true} count={2} title="CloneX" amount="$7,418,707" />
                        <CollectionItem verify={true} count={3} title="My Pet Hooligan" amount="$3,333,156" />
                    </li>
                    <li>
                        <CollectionItem verify={true} count={4} title="Terraforms" amount="$2,846,949" />
                        <CollectionItem verify={true} count={5} title="BoredApeYachtClub" amount="$2,225,029" />
                        <CollectionItem verify={true} count={6} title="Nanopass" amount="$2,097,475" />
                    </li>
                    <li>
                        <CollectionItem verify={true} count={7} title="Town Star" amount="$1,972,028" />
                        <CollectionItem verify={true} count={8} title="MutantApeYachtClub" amount="$1,951,451" />
                        <CollectionItem verify={true} count={9} title="Party Bears" amount="$1,890,233" />
                    </li>
                    <li>
                        <CollectionItem verify={true} count={10} title="Sandbox's LANDs" amount="$1,777,924" />
                        <CollectionItem verify={true} count={11} title="RTFKT - CloneX Mintvial" amount="$1,321,900" />
                        <CollectionItem verify={true} count={12} title="Shiba Social Club" amount="$1,281,425" />
                    </li>
                    <li>
                        <CollectionItem verify={true} count={13} title="Art Blocks Factory" amount="$1,105,860" />
                        <CollectionItem verify={true} count={14} title="Doodles" amount="$1,024,316" />
                        <CollectionItem verify={true} count={15} title="DEGENERATE/REGENERATE" amount="$945,556" />
                    </li>
                </ul> */}
            </div>

            <Link to="/" className='btn d-block mt-4 d-sm-none ms-auto btn-white'>Sign in</Link>
        </div>
    );
};

export default TopCollectionsSelles;