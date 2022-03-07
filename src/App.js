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
//import firebase from './firebase';
import configfile from './config.json'
import cjson from './config.json'
import { calltokenForUsers } from "./ApicallFunction";
const axios = require('axios');
const algosdk = require('algosdk'); 


function App() {
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);     
  // });
    //let tempaddress=localStorage.getItem('wallet').slice(0,5);    
    const[getApiDataProfileNFT,setApiDataprofile]=useState([""]);
    console.log("getApiDataProNFt1",getApiDataProfileNFT)   
    const[getApiDataNftFull,setApiDataNftFull]=useState([""]);
    console.log("getApiDataFull2",getApiDataNftFull)   
    const[getApiDataNftFull2,setApiDataNftFull2]=useState([""]);
    console.log("getApiDataFull22",getApiDataNftFull2)   
    const[getApiDataNftFull22,setApiDataNftFull22]=useState([""]);
    console.log("getApiDataFull222",getApiDataNftFull22)   
    const[getApiDataFullProfile,setApiDataFullProfile]=useState([""]);
    console.log("getApiFullProfile3uni",getApiDataFullProfile)   
    const[getApiDataProfile,setApiDataProfile]=useState([""]);
    console.log("getApiDataProfile4",getApiDataProfile)   
    const[getApiDataProfileActivity,setApiDataProfileActivity]=useState([""]);
    console.log("getApiDataProfileActivity5",getApiDataProfileActivity)       
    const [algobalanceApp, setalgobalanceApp] = useState("");
    
  useEffect(() => {        
    async function apiActivityData() {      
      if(localStorage.getItem('wallet') === null || localStorage.getItem('wallet') === undefined || localStorage.getItem('wallet') === "" || localStorage.getItem('wallet') === null){
      }else{         
      let tokenval = await calltokenForUsers();
      console.log("MartinaCode",tokenval)
      }
    }
    apiActivityData();
  }, []);

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

useEffect(() => {        
  async function apiData() {      
    if(localStorage.getItem('wallet') === null || localStorage.getItem('wallet') === undefined || localStorage.getItem('wallet') === "" || localStorage.getItem('wallet') === null){
    }else{    
    //const res = await axios.get(`${configfile['url']}/nftPlain/${localStorage.getItem('dupli')}`) 

    const res = await axios.get(`${configfile['url']}/nftPlainAlgo/${localStorage.getItem('wallet')}`)    
    //const res = await axios.get('http://18.224.57.2:42100/nft/v1/nftPlainAlgo/RYS3A3GLXVCRRMXYVUAYCMQJA32LDCMOADDWVTUUZF2MXQXYSF')      
    setApiDataProfile(res.data)                
  }
  }
  apiData();
}, []);

useEffect(() => {        
  async function apiActivityData() {      
    if(localStorage.getItem('wallet') === null || localStorage.getItem('wallet') === undefined || localStorage.getItem('wallet') === "" || localStorage.getItem('wallet') === null){
    }else{       
    const res = await axios.get(`${configfile['url']}/visitinfo/${localStorage.getItem('wallet')}`)
    setApiDataProfileActivity(res.data)                
    }
  }
  apiActivityData();
}, []);

useEffect(() => {        
  async function apiDataProfile() {      
    //console.log("length",localStorage.getItem('wallet').slice(0,49).length)
    if(localStorage.getItem('wallet') === null || localStorage.getItem('wallet') === undefined || localStorage.getItem('wallet') === "" || localStorage.getItem('wallet') === null){
    }else{          
    const res = await axios.get(`${configfile['url']}/userinfo/${localStorage.getItem('wallet')}`)
    //const res = await axios.get('http://3.17.78.27:42100/nft/v1/userinfo/RYS3A3GLXVCRRMXYVUAYCMQJA32LDCMOADDWVTUUZF2MXQXYSF')
    setApiDataprofile(res.data)                
    }
  }
  apiDataProfile();
}, []);

useEffect(() => {        
  async function apiDataNftFull() {      
    if(localStorage.getItem('wallet') === null || localStorage.getItem('wallet') === undefined || localStorage.getItem('wallet') === "" || localStorage.getItem('wallet') === null){
    }else{  
    const res = await axios.get(`${configfile['url']}/nftPlain`)
    setApiDataNftFull(res.data)                    
    }
  }
  apiDataNftFull();
}, []);

useEffect(() => {        
  async function apiDataNftFull2() {      
    if(localStorage.getItem('wallet') === null || localStorage.getItem('wallet') === undefined || localStorage.getItem('wallet') === "" || localStorage.getItem('wallet') === null){
    }else{  
    await axios.get(`${configfile['url']}/nftPlain`).then((response)=>{
      let a = [];
      let b = [];
      response.data.map((x)=>{
        if(x.nftType === "Sellers"){
          console.log("SellPrint",x)
        a.push(x)
        }else if(x.nftType === "Buyers"){
        b.push(x)
        }        
        setApiDataNftFull2(a)
        setApiDataNftFull22(b)
      })      
    })            
    }
  }
  apiDataNftFull2();
}, []);


useEffect(() => {        
  async function apiDataFullProfile() {      
    const res = await axios.get(`${configfile['url']}/userinfo`)
    setApiDataFullProfile(res.data)                  
  }
  apiDataFullProfile();
}, []);


//getI,setgetI,getIexplore,setgetIexplore,getIProapp,setgetIProapp,getIPro2,setgetIPro2,getHotCollection,setHotCollection
  return (
    <>
    <Online>    
    <DataContext.Provider value={{algobalanceApp, setalgobalanceApp,getApiDataProfileNFT,setApiDataprofile,getApiDataNftFull,setApiDataNftFull,getApiDataProfile,setApiDataProfile,getApiDataProfileActivity,setApiDataProfileActivity,getApiDataFullProfile,setApiDataFullProfile}}>
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
