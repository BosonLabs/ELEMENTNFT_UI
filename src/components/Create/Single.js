import React,{useState,useEffect, useContext} from 'react';
import Layout from '../Layout';
// import {Container, Row, Col, Card, Form, Tab, Tabs, InputGroup, Dropdown, Button, OverlayTrigger, Tooltip, Modal} from 'react-bootstrap';
import {Container, Row, Col, Form, InputGroup, Button, Modal} from 'react-bootstrap';
// import {
//     Link
//   } from "react-router-dom";

//import CardInfo from '../Snippets/Card'
//import Preview from '../../assets/images/preview.jpg'
import Compress from "react-image-file-resizer";
import fireDb from '../../firebase';
//import ipfs from "./ipfs";
import { create } from 'ipfs-http-client';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import { useHistory } from "react-router-dom";
import firebase from '../../firebase';
import { DataContext } from '../../Context/DataContext';
const client = create('https://ipfs.infura.io:5001/api/v0')
const algosdk = require('algosdk'); 
// const axios = require('axios');



const Start = () => {
    //const[getIPro2]=useContext(DataContext);
    //console.log("getIProprofile",getIPro2[0].valid) 
    let history=useHistory();
    const [fileUrl, updateFileUrl] = useState(``)
    console.log("Newipfs",fileUrl)
    const [show, setShow] = React.useState(false);
    const [tname,setName] = useState("");
    const [tdescription,setDescription] = useState("");  
    const [algobalance, setalgobalance] = useState("");

    const handleClose = () => setShow(false);    
    
    // const handleShow = () => setShow(true);
    const [showTest, setShowTest] = React.useState(false);
    const [showTestLoading, setshowTestLoading] = React.useState(false);    
    const handleCloseTest = () => setShowTest(false);
    const handleCloseTestLoading =()=> setshowTestLoading(false)
    // const handleShowTest = () => setShowTest(true);    
    const [Img,setImg] = useState("")

    const[getIPro,setgetIPro]=useState([""]);
    console.log("getIProprofile",getIPro[0].valid) 
    const dbcallPro=async()=>{            
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
            setgetIPro([""]);  
          }
          setgetIPro(r);
        });                  
      } catch (error) {
        console.log('error occured during search', error);    
      }                
      }    
    useEffect(()=>{dbcallPro()},[])
    const captureFile =async(event) => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        let reader = new window.FileReader()
        try{
        Compress.imageFileResizer(file, 300, 300, 'JPEG', 10, 0,
        uri => {
          console.log("iuri",uri)
          setImg(uri)
        },
        'base64'
        );
        reader.readAsArrayBuffer(file)
        try {
            const added = await client.add(file)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`            
            updateFileUrl(url)
          } catch (error) {
            console.log('Error uploading file: ', error)
          }          
        console.log(reader)    
      }catch (err) {
        console.error(err);    
        }
      };


      const waitForConfirmation = async function (algodclient, txId) {
        let status = (await algodclient.status().do());
        let lastRound = status["last-round"];
          while (true) {
            const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
            if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
              //Got the completed Transaction
              console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
              break;
            }
            lastRound++;
            await algodclient.statusAfterBlock(lastRound).do();
          }
        };



      const onSubmitNFT = async (event) => {
        //event.preventDefault();  
          //new write below
          if(localStorage.getItem("wallet") === null || localStorage.getItem("wallet") === "0x" || localStorage.getItem("wallet") === undefined || localStorage.getItem("wallet") === ''){
            console.log("Empty",localStorage.getItem("wallet"))
          }
          else{
          setshowTestLoading(true)
          let ta=tname;
          let tb='ELEM';
          let te=1000;
        //   let idget="";
          console.log("uploadonecheck",ta);
          console.log("uploadtwocheck",tb);
          console.log("uploadtwocheck",te);
          //setVisibleModal(false)                              
      //setIsOpens(true)
      const server = "https://testnet-algorand.api.purestake.io/ps2";
      const port = "";  
      const token = {
            'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
      }
      let algodclient = new algosdk.Algodv2(token, server, port);
      const params = await algodclient.getTransactionParams().do();
      params.fee = 1000;
      params.flatFee = true;
      const myAlgoConnect = new MyAlgoConnect();
      //const accountswall = await myAlgoWallet.connect();
      //crypto-js@latest
      //const addresseswall = accountswall.map(accountswall => accountswall.address);
      const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({    
        from:localStorage.getItem('wallet'),
        assetName: tname,
        unitName: tb,
        total: 1,
        decimals: 0,
        note: undefined,
        //manager:lsig.address(),
        manager:localStorage.getItem('wallet'),
        reserve:localStorage.getItem('wallet'),
        freeze:localStorage.getItem('wallet'),
        clawback:localStorage.getItem('wallet'),
        suggestedParams: params
      });
      
      const signedTxn = await myAlgoConnect.signTransaction(txn.toByte());
      const response = await algodclient.sendRawTransaction(signedTxn.blob).do();
      console.log("optresponse",response)
      await waitForConfirmation(algodclient,response.txId);
      let ptx = await algodclient.pendingTransactionInformation(response.txId).do();
      let assetID = ptx["asset-index"];
      console.log("pendingass",assetID);        
      appoptin(assetID,response.txId,localStorage.getItem('wallet'))              
          }
      }

      const appoptin=async(assetID,responsetxId,addresseswall)=>{
        const algosdk = require('algosdk');  
        const algodclient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');
        const myAlgoConnect = new MyAlgoConnect();
        let appId="50714558";
        try {
          //const accounts = await myAlgoWallet.connect();
          //const addresses = accounts.map(account => account.address);
          //console.log("addressget",addresses)
          //localStorage.getItem('wallet',addresses[0])
          const params = await algodclient.getTransactionParams().do();
          let transoptin = algosdk.makeApplicationOptInTxnFromObject({
          from: localStorage.getItem('wallet'),      
          appIndex:parseInt(appId),
          note: undefined,
          suggestedParams: params
          });
      
        const signedTxn = await myAlgoConnect.signTransaction(transoptin.toByte());
        const response = await algodclient.sendRawTransaction(signedTxn.blob).do();
        console.log("optresponse",response)  
        storedb(assetID,responsetxId,addresseswall);
        }
        catch (err) {
          console.error(err);    
          storedb(assetID,responsetxId,addresseswall);
        }
      }
    //   const storedb=async(assetID,responsetxId,addresseswall)=>{

    //     console.log("addresswall",addresseswall)
    //     console.log("assetId",assetID)
    //     console.log("Img",Img)
    //     console.log("tname",tname)  
    //                 //db added here 
    //                 let appId="50714558";
    //                 let data = {
    //                     id:assetID,
    //                     imageUrl:Img,
    //                     priceSet:"",
    //                     cAddress:"",
    //                     keyId:db,
    //                     userName:tname,
    //                     userSymbol:"ELEM",            
    //                     ipfsUrl:Img,
    //                     ownerAddress:addresseswall,
    //                     soldd:"",
    //                     extra1:"",
    //                     previousoaddress:"",
    //                     datesets:dateset,
    //                     whois:'',                    
    //                     description:tdescription,
    //                     history:"",
    //                     Mnemonic:"",
    //                     applicationid:appId,
    //                     usdcids:assetID,
    //                     escrowaddress:""
    //                 }
    //                 axios({
    //                     method: 'get',
    //                     url: ('https://demonft-2e778-default-rtdb.firebaseio.com/imagerefexploreoneAlgos/.json',data),
    //                     responseType: 'stream'
    //                   })
    //                     .then(function (response) {

    //                         let ref2=fireDb.database().ref(`imagerefAlgo/${addresseswall}`);
    //                         let ref22=fireDb.database().ref(`imagerefAlgolt`);   
    //                                       let dateset=new Date().toDateString();
    //                                       console.log("dateget",dateset)
    //                                       const db = ref2.push().key;                         
    //                                       //const db2 = ref22.push().key;                         
    //                                       console.log("dbcheck",db)
                                          
    //                     //add pinata here          
    //                     //pinata                          
    //                     // let pinataApiKey='88348e7ce84879e143e1';
    //                     // let pinataSecretApiKey='e4e8071ff66386726f9fe1aebf2d3235a9f88ceb4468d4be069591eb78d4bf6f';
    //                     const pinataApiKey = "221cfff25de18e88d3d0";
    //                     const pinataSecretApiKey = "ddffffed103d82a6296a378c80ddd2b4280b0d8a51e6922122fd3817accb45ba";
    //                     const pinataSDK = require('@pinata/sdk');
    //                     const pinata = pinataSDK(pinataApiKey, pinataSecretApiKey);
    //                                 pinata.testAuthentication().then((result) => {
    //                                 //handle successful authentication here
    //                                 console.log(result);  
    //                                 let ge=fileUrl;
    //                                 console.log("ipfsHash",fileUrl);
    //                                         const body = {
    //                                             message: ge
    //                                         };
    //                                         const options = {
    //                                             pinataMetadata: {
    //                                                 name: tname,
    //                                                 keyvalues: {
    //                                                     customKey: 'customValue',
    //                                                     customKey2: 'customValue2'
    //                                                 }
    //                                             },
    //                                             pinataOptions: {
    //                                                 cidVersion: 0
    //                                             }
    //                                         };
    //                                         pinata.pinJSONToIPFS(body, options).then((result) => {
    //                                             //handle results here
    //                                             console.log(result);
    //                                             console.log("jsonresult")                                            
    //                                 //setIsOpens(false)
    //                                 //setIsOpen(true);
    //                                 //return appId;                                            
    //                                           }).catch((err) => {
    //                                               //handle error here
    //                                               console.log(err);
    //                                           });                        
    //                                         }).catch((err) => {
    //                                             //handle error here
    //                                             console.log(err);
    //                                         });                                                          
                        
    //                     //setgetI(req2)  
    //                     });                    
                
    //   }

    const storedb=async(assetID,responsetxId,addresseswall)=>{

        console.log("addresswall",addresseswall)
        console.log("assetId",assetID)
        console.log("Img",Img)
        console.log("tname",tname)  
                    //db added here 
                    let appId="50714558";
                    let ref2=fireDb.database().ref(`imagerefAlgo/${addresseswall}`);
                    let ref22=fireDb.database().ref(`imagerefAlgolt`);   
                    let refactivity=fireDb.database().ref(`activitytable/${addresseswall}`);   
                                  let dateset=new Date().toDateString();
                                  console.log("dateget",dateset)
                                  const db = ref2.push().key;                         
                                  //const db2 = ref22.push().key;                         
                                  console.log("dbcheck",db)
                                  console.log("dbcheckbefore",getIPro[0].valid)                                  
                                  if(getIPro[0].valid === "validated"){
                                    ref2.child(db).set({
                                        Assetid:assetID,Imageurl:Img,NFTPrice:"",EscrowAddress:"",keyId:db,
                                        NFTName:tname,userSymbol:"ELEM",Ipfsurl:Img,ownerAddress:addresseswall,previousoaddress:"",
                                        TimeStamp:dateset,NFTDescription:tdescription,HistoryAddress:[addresseswall],Appid:appId,valid:"true"})
                                        .then(()=>{
                                          refactivity.child(db).set({
                                              Assetid:assetID,Imageurl:Img,NFTPrice:"",EscrowAddress:"",keyId:db,
                                              NFTName:tname,userSymbol:"ELEM",Ipfsurl:Img,ownerAddress:addresseswall,previousoaddress:"",
                                              TimeStamp:dateset,NFTDescription:tdescription,HistoryAddress:[addresseswall],Appid:appId,valid:"true"})
                                              .then(()=>{                                        
                                          ref22.child(db).set({
                                          Assetid:assetID,Imageurl:Img,NFTPrice:"",EscrowAddress:"",keyId:db,
                                          NFTName:tname,userSymbol:"ELEM",Ipfsurl:Img,ownerAddress:addresseswall,previousoaddress:"",
                                          TimeStamp:dateset,NFTDescription:tdescription,HistoryAddress:[addresseswall],Appid:appId,valid:"true"
                                            })
                                        .then(()=>{     
                      //add pinata here          
                      //pinata          
                      //const axios = require('axios');
                      // let pinataApiKey='88348e7ce84879e143e1';
                      // let pinataSecretApiKey='e4e8071ff66386726f9fe1aebf2d3235a9f88ceb4468d4be069591eb78d4bf6f';
                      const pinataApiKey = "221cfff25de18e88d3d0";
                      const pinataSecretApiKey = "ddffffed103d82a6296a378c80ddd2b4280b0d8a51e6922122fd3817accb45ba";
                      const pinataSDK = require('@pinata/sdk');
                      const pinata = pinataSDK(pinataApiKey, pinataSecretApiKey);
                                  pinata.testAuthentication().then((result) => {
                                  //handle successful authentication here
                                  console.log(result);  
                                  let ge=fileUrl;
                                  console.log("ipfsHash",fileUrl);
                                          const body = {
                                              message: ge
                                          };
                                          const options = {
                                              pinataMetadata: {
                                                  name: tname,
                                                  keyvalues: {
                                                      customKey: 'customValue',
                                                      customKey2: 'customValue2'
                                                  }
                                              },
                                              pinataOptions: {
                                                  cidVersion: 0
                                              }
                                          };
                                          pinata.pinJSONToIPFS(body, options).then((result) => {
                                              //handle results here
                                              console.log(result);
                                              console.log("jsonresult")                                            
                                              setshowTestLoading(false)
                                              setShowTest(true)                                        
                                  // setIsOpens(false)
                                  // setIsOpen(true);
                                  //return appId;                                            
                                            }).catch((err) => {
                                                //handle error here
                                                console.log(err);
                                            });                        
                                          }).catch((err) => {
                                              //handle error here
                                              console.log(err);
                                          });                  
                                          //end pinata          
                                  //end pinata here                      
                                          
                                        })              
                                        })
                                      })  

                                  }else{
                                    ref2.child(db).set({
                                        Assetid:assetID,Imageurl:Img,NFTPrice:"",EscrowAddress:"",keyId:db,
                                        NFTName:tname,userSymbol:"ELEM",Ipfsurl:Img,ownerAddress:addresseswall,previousoaddress:"",
                                        TimeStamp:dateset,NFTDescription:tdescription,HistoryAddress:[addresseswall],Appid:appId,valid:"false"})
                                        .then(()=>{
                                          refactivity.child(db).set({
                                              Assetid:assetID,Imageurl:Img,NFTPrice:"",EscrowAddress:"",keyId:db,
                                              NFTName:tname,userSymbol:"ELEM",Ipfsurl:Img,ownerAddress:addresseswall,previousoaddress:"",
                                              TimeStamp:dateset,NFTDescription:tdescription,HistoryAddress:[addresseswall],Appid:appId,valid:"false"})
                                              .then(()=>{                                        
                                          ref22.child(db).set({
                                          Assetid:assetID,Imageurl:Img,NFTPrice:"",EscrowAddress:"",keyId:db,
                                          NFTName:tname,userSymbol:"ELEM",Ipfsurl:Img,ownerAddress:addresseswall,previousoaddress:"",
                                          TimeStamp:dateset,NFTDescription:tdescription,HistoryAddress:[addresseswall],Appid:appId,valid:"false"
                                            })
                                        .then(()=>{     
                      //add pinata here          
                      //pinata          
                      //const axios = require('axios');
                      // let pinataApiKey='88348e7ce84879e143e1';
                      // let pinataSecretApiKey='e4e8071ff66386726f9fe1aebf2d3235a9f88ceb4468d4be069591eb78d4bf6f';
                      const pinataApiKey = "221cfff25de18e88d3d0";
                      const pinataSecretApiKey = "ddffffed103d82a6296a378c80ddd2b4280b0d8a51e6922122fd3817accb45ba";
                      const pinataSDK = require('@pinata/sdk');
                      const pinata = pinataSDK(pinataApiKey, pinataSecretApiKey);
                                  pinata.testAuthentication().then((result) => {
                                  //handle successful authentication here
                                  console.log(result);  
                                  let ge=fileUrl;
                                  console.log("ipfsHash",fileUrl);
                                          const body = {
                                              message: ge
                                          };
                                          const options = {
                                              pinataMetadata: {
                                                  name: tname,
                                                  keyvalues: {
                                                      customKey: 'customValue',
                                                      customKey2: 'customValue2'
                                                  }
                                              },
                                              pinataOptions: {
                                                  cidVersion: 0
                                              }
                                          };
                                          pinata.pinJSONToIPFS(body, options).then((result) => {
                                              //handle results here
                                              console.log(result);
                                              console.log("jsonresult")                                            
                                              setshowTestLoading(false)
                                              setShowTest(true)                                        
                                  // setIsOpens(false)
                                  // setIsOpen(true);
                                  //return appId;                                            
                                            }).catch((err) => {
                                                //handle error here
                                                console.log(err);
                                            });                        
                                          }).catch((err) => {
                                              //handle error here
                                              console.log(err);
                                          });                  
                                          //end pinata          
                                  //end pinata here                      
                                          
                                        })              
                                        })
                                      })  

                                  }                                                                        
      }

      const done=()=>{
        history.push("/profile")
        window.location.reload(false);    
      }
    return (
        <Layout>
            <Container fluid="md">
                <div className="py-md-5 py-4">
                    <Row className='mb-5'>
                        <Col md={12}>
                            <h1 className='display-4 font-bold mb-3'>Create single item on Algorand</h1>
                        </Col>
                    </Row>

                    <Row className='text-gray'>
                        <Col md={8} className='mb-3'>
                            <h3 className='mb-3'>Upload file</h3>

                            <div className="upload px-2 py-5 text-center mb-5">
                                <div>
                                    <p className='mb-3'>PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>

                                    <input type="file" hidden name="upload" id='upload' onChange = {captureFile}/>
                                    <label htmlFor="upload" className='btn btn-light-blue'>Choose File</label>
                                </div>
                            </div>                                        
                            <div className="mb-4">                        
                                <h3>Name</h3>
                                <InputGroup className="mb-4 input-group-field" onChange={event => setName(event.target.value)}>
                                    <Form.Control
                                        placeholder='e. g. "Redeemable T-Shirt with logo"'
                                    />
                                </InputGroup>

                                <h3>Description <small>(Optional)</small></h3>
                                <InputGroup className="mb-2 input-group-field" onChange={event => setDescription(event.target.value)}>
                                    <Form.Control
                                        placeholder='e. g. "After purchasing you’ll be able to get the real T-Shirt"'
                                    />
                                </InputGroup>                                
                            </div>

                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                <Button variant='primary' size="lg" onClick={()=>onSubmitNFT()}>Create item</Button>
                            </div>
                        </Col>                        
                    </Row>
                </div>
            </Container>

            <Modal show={show} centered size="sm" onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Collection</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex mb-4">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJyBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NiwyNDYsMjQ2LDEpOyc+PGcgc3R5bGU9J2ZpbGw6cmdiYSgyMTcsMzgsMzgsMSk7IHN0cm9rZTpyZ2JhKDIxNywzOCwzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuNTsnPjxyZWN0ICB4PSc0NicgeT0nMzAnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnLz48cmVjdCAgeD0nNDYnIHk9JzM4JyB3aWR0aD0nOCcgaGVpZ2h0PSc4Jy8+PHJlY3QgIHg9JzQ2JyB5PSc0Nicgd2lkdGg9JzgnIGhlaWdodD0nOCcvPjxyZWN0ICB4PSc0NicgeT0nNTQnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnLz48cmVjdCAgeD0nNDYnIHk9JzYyJyB3aWR0aD0nOCcgaGVpZ2h0PSc4Jy8+PHJlY3QgIHg9JzM4JyB5PSczMCcgd2lkdGg9JzgnIGhlaWdodD0nOCcvPjxyZWN0ICB4PSc1NCcgeT0nMzAnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnLz48cmVjdCAgeD0nMzgnIHk9JzM4JyB3aWR0aD0nOCcgaGVpZ2h0PSc4Jy8+PHJlY3QgIHg9JzU0JyB5PSczOCcgd2lkdGg9JzgnIGhlaWdodD0nOCcvPjxyZWN0ICB4PSczOCcgeT0nNDYnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnLz48cmVjdCAgeD0nNTQnIHk9JzQ2JyB3aWR0aD0nOCcgaGVpZ2h0PSc4Jy8+PHJlY3QgIHg9JzM4JyB5PSc1NCcgd2lkdGg9JzgnIGhlaWdodD0nOCcvPjxyZWN0ICB4PSc1NCcgeT0nNTQnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnLz48cmVjdCAgeD0nMzgnIHk9JzYyJyB3aWR0aD0nOCcgaGVpZ2h0PSc4Jy8+PHJlY3QgIHg9JzU0JyB5PSc2Micgd2lkdGg9JzgnIGhlaWdodD0nOCcvPjxyZWN0ICB4PSczMCcgeT0nMzAnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnLz48cmVjdCAgeD0nNjInIHk9JzMwJyB3aWR0aD0nOCcgaGVpZ2h0PSc4Jy8+PHJlY3QgIHg9JzMwJyB5PSczOCcgd2lkdGg9JzgnIGhlaWdodD0nOCcvPjxyZWN0ICB4PSc2MicgeT0nMzgnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnLz48cmVjdCAgeD0nMzAnIHk9JzQ2JyB3aWR0aD0nOCcgaGVpZ2h0PSc4Jy8+PHJlY3QgIHg9JzYyJyB5PSc0Nicgd2lkdGg9JzgnIGhlaWdodD0nOCcvPjxyZWN0ICB4PSczMCcgeT0nNTQnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnLz48cmVjdCAgeD0nNjInIHk9JzU0JyB3aWR0aD0nOCcgaGVpZ2h0PSc4Jy8+PHJlY3QgIHg9JzMwJyB5PSc2Micgd2lkdGg9JzgnIGhlaWdodD0nOCcvPjxyZWN0ICB4PSc2MicgeT0nNjInIHdpZHRoPSc4JyBoZWlnaHQ9JzgnLz48L2c+PC9zdmc+" alt="icon" />

                        <div className='ms-3'>
                            <p className='mb-3'>We recommend an image of at least 300x300. Gifs work too.</p>

                            <input type="file" hidden id='upload-2' />
                            <label htmlFor="upload-2" className='btn btn-light-blue'>Choose File</label>
                        </div>
                    </div>

                    <h3>Display name <small>(required)</small></h3>
                    <InputGroup className="mb-2 input-group-field">
                        <Form.Control
                            placeholder='Enter collection name'
                        />
                    </InputGroup>
                    <p className='mb-4'>Token name cannot be changed in future</p>

                    <h3>Symbol <small>(required)</small></h3>
                    <InputGroup className="mb-4 input-group-field">
                        <Form.Control
                            placeholder='Enter token symbol'
                        />
                    </InputGroup>

                    <h3>Description <small>(required)</small></h3>
                    <InputGroup className="mb-4 input-group-field" onChange={event => setDescription( event.target.value)}>
                        <Form.Control
                            placeholder='Spread some words about your token collection'
                        />
                    </InputGroup>

                    <h3>Short url <small>(required)</small></h3>
                    <InputGroup className="mb-2 input-group-field">
                        <InputGroup.Text className='ps-0' id="basic-addon1">ELEMENT.com/</InputGroup.Text>
                        <Form.Control
                            placeholder='Enter short url'
                        />
                    </InputGroup>
                    <p className='mb-4'>Will be used as public URL</p>

                    <Button className='w-100' variant='primary'>Create collection</Button>
                </Modal.Body>
            </Modal>


            <Modal show={showTest} centered size="sm" onHide={handleCloseTest}>
                <Modal.Header  />
                <Modal.Body>
                    <div className="text-center py-4">
                        <h3>NFT Successfully created</h3>
                    </div>

                    <Button variant="primary" size="lg" className='w-100' onClick={()=>done()}>Done</Button>
                </Modal.Body>
            </Modal>

            <Modal show={showTestLoading} centered size="sm" onHide={handleCloseTestLoading}>
                <Modal.Header  />
                <Modal.Body>
                    <div className="text-center py-4">
                        <h3>Loading...</h3>
                    </div>                    
                </Modal.Body>
            </Modal>
        </Layout>
    );
};

export default Start;

// closeButton