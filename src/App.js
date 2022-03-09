import React,{useEffect,useState,useRef} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Offline, Online } from "react-detect-offline";

import Home from './components/HomePage';
import Login from './components/Connect';
import ExplorePage from './components/ExplorePage';
import HowItWorks from './components/HowItWorks';
import Information from './components/Information';
import Profile from './components/Profile';
import FollowingPage from './components/FollowingPage';
import ActivityPage from './components/ActivityPage';
import SingleBid from './components/SingleBid';
import SingleBid2 from './components/SingleBid2';
import About from './components/About';
import Rari from './components/Rari';
import Start from './components/Create/Start';
import Type from './components/Create/Type';
import Single from './components/Create/Single';
import ProfileViewOther from "./components/ProfileViewOther";
import ProfileViewOtherCopy from "./components/ProfileViewOtherCopy";
import ProfileViewOtherCopy2 from "./components/ProfileViewOtherCopy2";
import ProfileViewOtherCopy3 from "./components/ProfileViewOtherCopy3";
import SingleLiveauction from "./components/SingleLiveauction";
//import useScrollToTop from "./ScrollToTop";
import Edit from "./components/Create/edit";
//import {Movie} from './Movie'
import Validornotcheck from "./Validornotcheck";
import {DataContext} from './Context/DataContext'
import firebase from './firebase';
import configfile from './config.json'
import cjson from './config.json'
const axios = require('axios');
const algosdk = require('algosdk'); 


function App() {
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);     
  // });
    const[getApiData,setApiData]=useState([""]);
    //console.log("getApiData",getApiData)   
    //const setScrollToTop = useScrollToTop(true);
    const[getIPro2,setgetIPro2]=useState([""]);
    //console.log("getIProprofile",getIPro2[0].valid)   
    const[getIProapp,setgetIProapp]=useState([""]);
    //console.log("getIProapp",getIProapp) 
    const[getI,setgetI]=useState([""]); 
    const[getIexplore,setgetIexplore]=useState([]);  
    //console.log("App1",getI)
    //console.log("App2",getIexplore)
    const [algobalanceApp, setalgobalanceApp] = useState("");
    //console.log("calcappjs",algobalanceApp)    
    const[getHotCollection,setHotCollection]=useState([""]);
    //console.log("getIPro",getHotCollection)     
    const dbHotCollection=async()=>{            
      let r=[];
      try {         
      firebase.database().ref("userprofile").on("value", (data) => {          
        if (data) {             
          let a=data.val()                   
          Object.keys(a).map(async(k)=>{                                    
            //console.log("proff",a[k])
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
          setHotCollection([""]);  
        }
        setHotCollection(r);
      });                  
    } catch (error) {
      //console.log('error occured during search', error);    
    }                
    }    
  useEffect(()=>{dbHotCollection()},[])

useEffect(() => {        
  async function listenMMAccount() {    
  if(localStorage.getItem("wallet") === null || localStorage.getItem("wallet") === "0x" || localStorage.getItem("wallet") === undefined || localStorage.getItem("wallet") === ''){                  
  setalgobalanceApp("");      
  }
  else{          
  const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
  const port = "";            
  const token = {            
  'X-API-key' : cjson.purestakeapi,
  }
  let client = new algosdk.Algodv2(token, baseServer, port);                
  ( async() => {
  let account1_info = (await client.accountInformation(localStorage.getItem('wallet')).do());      
  // calc=JSON.stringify(account1_info.amount)/1000000;      
  setalgobalanceApp(JSON.stringify(account1_info.amount)/1000000);      
  localStorage.setItem("balget",JSON.stringify(account1_info.amount)/1000000);      
})().catch(e => {
  //console.log(e);
})                    
}        
}
listenMMAccount();
}, []);
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
          //console.log("Dd",l)              
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
          //console.log("D",l)              
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
        setgetIexplore(req2)  
        });                    
  } 
useEffect(()=>{dbcallsalealexplore()},[])

const dbcallPro=async()=>{            
  let r=[];
  try {         
  firebase.database().ref("userprofile").on("value", (data) => {          
    if (data) {             
      let a=data.val()                   
      Object.keys(a).map(async(k)=>{                                    
        //console.log("proff",a[k])
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
      setgetIProapp([""]);  
    }
    setgetIProapp(r);
  });                  
} catch (error) {
  //console.log('error occured during search', error);    
}                
}    
useEffect(()=>{dbcallPro()},[])


    
const dbcallPro2=async()=>{            
        let r=[];
        try {         
        firebase.database().ref("userprofile").child(localStorage.getItem('wallet')).on("value", (data) => {          
          if (data) {                      
              r.push({
                Bio:data.val().Bio,
                Customurl: data.val().Customurl,
                Email: data.val().Email,
                Imageurl:data.val().Imageurl,
                Personalsiteurl: data.val().Personalsiteurl,
                TimeStamp: data.val().TimeStamp,
                Twittername: data.val().Twittername,
                UserName: data.val().UserName,
                WalletAddress: data.val().WalletAddress,
                bgurl:data.val().bgurl,
                valid:data.val().valid
              })                
          }
          else{
            setgetIPro2([""]);  
          }
          setgetIPro2(r);
        });                  
      } catch (error) {
        //console.log('error occured during search', error);    
      }                
}    
useEffect(()=>{dbcallPro2()},[])

useEffect(() => {        
  async function apiData() {      
    const res = await axios.get(`${configfile['url']}/nftPlain/${'RYS3A'}`)
    setApiData(res.data)                
  }
  apiData();
}, []);



  return (
    <>
    <Online>    
    <DataContext.Provider value={{getI,setgetI,getIexplore,setgetIexplore,getIProapp,setgetIProapp,getIPro2,setgetIPro2,algobalanceApp, setalgobalanceApp,getHotCollection,setHotCollection}}>          
    <Router>    
      <Switch>                
        <Route path="/connect">
          <Login />
        </Route>
        <Route path="/explore">
          <ExplorePage />
        </Route>
        <Route path="/how-it-works">
          <HowItWorks />
        </Route>
        <Route path="/information">
          <Information />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/settings">
          <Edit />
        </Route>
        <Route path="/following">
          <FollowingPage />
        </Route>
        <Route path="/activity">
          <ActivityPage />
        </Route>
        <Route path="/liveauction" onUpdate={() => window.scrollTo(0, 0)}>
          <SingleLiveauction />
        </Route>
        <Route path="/bid">
          <SingleBid />
        </Route>
        <Route path="/bid-2">
          <SingleBid2 />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/rari">
          <Rari />
        </Route>
        <Route path="/create/start">
          <Start />
        </Route>
        <Route path="/create/type">
          <Type />
        </Route>
        <Route path="/create/single">
          <Single />
        </Route>        
        <Route path="/profileviewother">
          <ProfileViewOther />
        </Route>
        <Route path="/profileviewothercopy">
          <ProfileViewOtherCopy />
        </Route>
        <Route path="/profileviewothercopy2">
          <ProfileViewOtherCopy2 />
        </Route>
        <Route path="/profileviewothercopy3">
          <ProfileViewOtherCopy3 />
        </Route>                
        <Route path="/validornotvalid">
          <Validornotcheck />
        </Route>        
        <Route path="/" onUpdate={() => window.scrollTo(0, 0)}>
          <Home />
        </Route>         
      </Switch>      
      
    </Router>   
    </DataContext.Provider>         
    
    </Online>        
    {/* <Offline>{alert("please connect your Internet")}</Offline>        */}
    </>
  );
}

export default App;
