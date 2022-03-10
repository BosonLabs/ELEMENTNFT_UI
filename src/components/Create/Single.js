import React,{useState,useEffect, useContext} from 'react';
import Layout from '../Layout';
import {Container, Row, Col, Form, InputGroup, Button, Modal} from 'react-bootstrap';
import Compress from "react-image-file-resizer";
import fireDb from '../../firebase';
//import { create } from 'ipfs-http-client';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import { useHistory } from "react-router-dom";
import firebase from '../../firebase';
import { DataContext } from '../../Context/DataContext';
import { ToastContainer, Zoom, toast} from 'react-toastify';
import '../../toast-style-override.css'
import logogif from '../../assets/images/gif4.webp';
import dataescrowprice from "../../escrowpricenew";
import configfile from '../../config.json'
//const client = create('https://ipfs.infura.io:5001/api/v0')
const algosdk = require('algosdk'); 
const myAlgoConnect = new MyAlgoConnect();
const axios = require('axios');
const Start = () => {
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);     
  // });
    const {algobalanceApp}=useContext(DataContext)  
    //const { getI } = useContext(DataContext)    
    let history=useHistory();
    //const [fileUrl, updateFileUrl] = useState(``)    
    const [show, setShow] = React.useState(false);
    const [tname,setName] = useState("");
    const [tdescription,setDescription] = useState("");      
    const handleClose = () => setShow(false);            
    const [showTest, setShowTest] = React.useState(false);
    const [showTestLoading, setshowTestLoading] = React.useState(false);        
    const [Img,setImg] = useState("")
    const [Imgname,setImgname] = useState("")
    const[getIPro,setgetIPro]=useState([""]);    
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
        //console.log('error occured during search', error);    
      }                
    }    
    useEffect(()=>{dbcallPro()},[])
    const captureFile =async(event) => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        setImgname(file.name)
        let reader = new window.FileReader()
        try{
        Compress.imageFileResizer(file, 500,500 , 'JPEG', 200, 0,
        uri => {
          //console.log("iuri",uri)
          setImg(uri)
        },
        'base64'
        );
        reader.readAsArrayBuffer(file)
        try {
            //const added = await client.add(file)
            //const url = `https://ipfs.infura.io/ipfs/${added.path}`            
            //updateFileUrl(url)
          } catch (error) {
            //console.log('Error uploading file: ', error)
          }          
        //console.log(reader)    
      }catch (err) {
        //console.error(err);    
        }
    };


    const waitForConfirmation = async function (algodclient, txId) {
        let status = (await algodclient.status().do());
        let lastRound = status["last-round"];
          while (true) {
            const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
            if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {              
              break;
            }
            lastRound++;
            await algodclient.statusAfterBlock(lastRound).do();
          }
    };


      

    const onSubmitNFT = async (event) => {        
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;          
        if(localStorage.getItem("wallet") === null || localStorage.getItem("wallet") === "0x" || localStorage.getItem("wallet") === undefined || localStorage.getItem("wallet") === ''){            
          alert("please connect your wallet")
        }          
        else if(tname === "" ){
          alert("please enter NFT Name")
        }
        else if(!/\S/.test(tname)){
          alert("only space not allowed")
        }
        else if(format.test(tname)){
          alert("please enter valid NFT Name special character not allowed")
        }
        else if(Img === "" || Img === null || Img === undefined ){
          alert("please upload image")
        }          
        else if(algobalanceApp === "" || algobalanceApp === "0" || algobalanceApp === undefined || algobalanceApp === null || algobalanceApp <= 3){
          alert("Insufficient balance to create NFT")
        }
        else{
        try{                    
        setshowTestLoading(true)
        let tb='ELEM';          
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
        const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({    
        from:localStorage.getItem('wallet'),
        assetName: tname,
        unitName: tb,
        total: 1,
        decimals: 0,
        note: undefined,        
        assetURL:'https://elementnft.vercel.app/',
        manager:localStorage.getItem('wallet'),
        reserve:localStorage.getItem('wallet'),
        freeze:localStorage.getItem('wallet'),
        clawback:localStorage.getItem('wallet'),
        suggestedParams: params
      });      
        const signedTxn = await myAlgoConnect.signTransaction(txn.toByte());
        const response = await algodclient.sendRawTransaction(signedTxn.blob).do();      
        await waitForConfirmation(algodclient,response.txId);
        let ptx = await algodclient.pendingTransactionInformation(response.txId).do();
        let assetID = ptx["asset-index"];      
        appoptin(assetID,response.txId,localStorage.getItem('wallet'))              
    }catch (err) {        
        setshowTestLoading(false)
        alert("you wallet raises some issues")
        window.location.reload(false)
    }
    }          
    }

    const appoptin=async(assetID,responsetxId,addresseswall)=>{
      let index = parseInt(configfile['appIdPrice']);
      const algodClient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');            
      let dataopreplace = dataescrowprice.replaceAll("AppID",configfile['appIdPrice']).replaceAll("AssId",parseInt(assetID))
      let results = await algodClient.compile(dataopreplace).do();                
      let program = new Uint8Array(Buffer.from(results.result, "base64"));      
      let lsig = algosdk.makeLogicSig(program);
      try {                
        const params = await algodClient.getTransactionParams().do();
        let appArg = [];     
        let t1 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
          from:localStorage.getItem('wallet'),
          suggestedParams:params,
          to:results.hash,
          amount:900000,
          note: undefined
        });     
        const signedTx = await myAlgoConnect.signTransaction(t1.toByte());           
        const response1 = await algodClient.sendRawTransaction(signedTx.blob).do();
        await waitForConfirmation(algodClient, response1.txId);
        let optinTranscation = algosdk.makeApplicationOptInTxnFromObject({
          from : results.hash,
          suggestedParams:params,
          appIndex:index
        });
        const signedTx1 = await algosdk.signLogicSigTransaction(optinTranscation, lsig);
        const response = await algodClient.sendRawTransaction(signedTx1.blob).do();      
        await waitForConfirmation(algodClient, response.txId);          
      } catch (err) {        
        setshowTestLoading(false)          
        alert("you wallet raises some issues")
        window.location.reload(false)
      }       
      storeDbPinataDuplicate(assetID,responsetxId,addresseswall)      
    }      

    const storeDbPinataDuplicate=(assetID,responsetxId,addresseswall)=>{
      toast.info("Image Uploading in IPFS",{autoClose: 5000}); 
      let appId="50714558";
      let ref2=fireDb.database().ref(`imagerefAlgo/${addresseswall}`);
      let ref22=fireDb.database().ref(`imagerefAlgolt`);   
      let refactivity=fireDb.database().ref(`activitytable/${addresseswall}`);   
      let dateset=new Date().toDateString();     
      const db = ref2.push().key;                                                
      const JSONBody = {
        "imageurl": Img
      }
      const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
      return axios
          .post(url, JSONBody, {
              headers: {
                  pinata_api_key: configfile['pinataApiKey'],
                  pinata_secret_api_key: configfile['pinataSecretApiKey']
              }
          })
          .then(function (response) {
            toast.success(`Image Uploaded in IPFS ${response.data.IpfsHash}`,{autoClose: 8000});            
            let ipfsurl=`https://ipfs.infura.io/ipfs/${response.data.IpfsHash}`                                                          
            if(getIPro[0].valid === "validated"){
              //toast.success(`Image Uploaded in IPFS ${response.data.IpfsHash}`,{autoClose: 8000});
              //db add here
              // toast.loading(`images uploading ipfs`, {
              // onClose: ('loading') });        
              ref2.child(db).set({
                Assetid:assetID,Imageurl:Img,NFTPrice:"",EscrowAddress:"",keyId:db,
                NFTName:tname,userSymbol:"ELEM",Ipfsurl:ipfsurl,ownerAddress:addresseswall,previousoaddress:"",
                TimeStamp:dateset,NFTDescription:tdescription,HistoryAddress:[addresseswall],Appid:appId,valid:"true",
                CreatorAddress:addresseswall
              })
                .then(()=>{
                  refactivity.child(db).set({
                      Assetid:assetID,Imageurl:Img,NFTPrice:"",EscrowAddress:"",keyId:db,
                      NFTName:tname,userSymbol:"ELEM",Ipfsurl:ipfsurl,ownerAddress:addresseswall,previousoaddress:"",
                      TimeStamp:dateset,NFTDescription:tdescription,HistoryAddress:[addresseswall],Appid:appId,valid:"true",
                      CreatorAddress:addresseswall
                    })
                      .then(()=>{                                        
                  ref22.child(db).set({
                  Assetid:assetID,Imageurl:Img,NFTPrice:"",EscrowAddress:"",keyId:db,
                  NFTName:tname,userSymbol:"ELEM",Ipfsurl:ipfsurl,ownerAddress:addresseswall,previousoaddress:"",
                  TimeStamp:dateset,NFTDescription:tdescription,HistoryAddress:[addresseswall],Appid:appId,valid:"true",
                  CreatorAddress:addresseswall
                    })
                .then(()=>{                                                     
                  toast.success("NFT Minted successfully",{autoClose: 5000})                  
                  let refactivity=firebase.database().ref(`activitytable/${localStorage.getItem('wallet')}`);   
                          const db = refactivity.push().key;                         
                          refactivity.child(db).set({
                          Assetid:assetID,Imageurl:Img,NFTPrice:"",
                          EscrowAddress:"Create Asset",keyId:db,
                          NFTName:tname,userSymbol:"ELEM",Ipfsurl:"",
                          ownerAddress:localStorage.getItem('wallet'),previousoaddress:localStorage.getItem('wallet'), 
                          TimeStamp:"",NFTDescription:"",HistoryAddress:"",
                          Appid:"",valid:"",
                          CreatorAddress:localStorage.getItem('wallet')
                      })
                          .then(()=>{				
                            setshowTestLoading(false)
                            setShowTest(true)                                                                                         
						        })
              
                })              
                })
              })                                                                                              
             
            }else{

              toast.success(`Image Uploaded in IPFS ${response.data.IpfsHash}`,{autoClose: 8000});              
              ref2.child(db).set({
                Assetid:assetID,Imageurl:Img,NFTPrice:"",EscrowAddress:"",keyId:db,
                NFTName:tname,userSymbol:"ELEM",Ipfsurl:ipfsurl,ownerAddress:addresseswall,previousoaddress:"",
                TimeStamp:dateset,NFTDescription:tdescription,HistoryAddress:[addresseswall],Appid:appId,valid:"false",
                CreatorAddress:addresseswall
              })
                .then(()=>{
                  refactivity.child(db).set({
                      Assetid:assetID,Imageurl:Img,NFTPrice:"",EscrowAddress:"",keyId:db,
                      NFTName:tname,userSymbol:"ELEM",Ipfsurl:ipfsurl,ownerAddress:addresseswall,previousoaddress:"",
                      TimeStamp:dateset,NFTDescription:tdescription,HistoryAddress:[addresseswall],Appid:appId,valid:"false",
                      CreatorAddress:addresseswall
                    })
                      .then(()=>{                                        
                  ref22.child(db).set({
                  Assetid:assetID,Imageurl:Img,NFTPrice:"",EscrowAddress:"",keyId:db,
                  NFTName:tname,userSymbol:"ELEM",Ipfsurl:ipfsurl,ownerAddress:addresseswall,previousoaddress:"",
                  TimeStamp:dateset,NFTDescription:tdescription,HistoryAddress:[addresseswall],Appid:appId,valid:"false",
                  CreatorAddress:addresseswall
                    })
                .then(()=>{                                                     
                  toast.success("NFT Minted successfully",{autoClose: 5000})                  
                  let refactivity=firebase.database().ref(`activitytable/${localStorage.getItem('wallet')}`);   
                          const db = refactivity.push().key;                         
                          refactivity.child(db).set({
                          Assetid:assetID,Imageurl:Img,NFTPrice:"",
                          EscrowAddress:"Create Asset",keyId:db,
                          NFTName:tname,userSymbol:"ELEM",Ipfsurl:"",
                          ownerAddress:localStorage.getItem('wallet'),previousoaddress:localStorage.getItem('wallet'), 
                          TimeStamp:"",NFTDescription:"",HistoryAddress:"",
                          Appid:"",valid:"",
                          CreatorAddress:localStorage.getItem('wallet')
                      })
                          .then(()=>{				
                            setshowTestLoading(false)
                            setShowTest(true)                                                                                         
						        })                  
                })              
                })
              })                                                                                                           
            }                                  
          })
          .catch(function (error) {
              //handle error here
              console.log("Error1",error)
          });
    }
    const done=()=>{
      history.push("/profile")
      window.location.reload(false);    
    }
    return (
        <Layout>
            <Container fluid="md">
            <><ToastContainer position='top-center' draggable = {false} transition={Zoom} autoClose={8000} closeOnClick = {false}/></>
                <div className="py-md-0 py-4">
                    <Row className='mb-0'>
                        <Col md={12}>
                            <h3 className='display-4 font-bold mb-3'>Create single NFT on Algorand</h3>
                        </Col>
                    </Row>
                    <Row className='text-gray'>
                        <Col md={8} className='mb-3'>
                            <h3 className='mb-3'>Upload file</h3>
                            <div className="upload px-2 py-5 text-center mb-5">
                                <div>
                                  {Img === "" || Img === null || Img === "" || Img === undefined ? (
                                    <>
                                     {/* GIF, WEBP, MP4 or MP3. Max 100mb. */}
                                    <p className='mb-3'>PNG,IMG,JPG</p>
                                    <input type="file" hidden name="upload" id='upload' onChange = {captureFile}/>
                                    <label htmlFor="upload" className='btn btn-light-blue'>Choose File</label>
                                    </>
                                  ):(
                                    <>
                                    <p className='mb-3'>Images Uploaded </p>
                                    <p className='mb-3'>{Imgname}</p>
                                    <input type="file" hidden name="upload" id='upload' onChange = {captureFile}/>
                                    <label htmlFor="upload" className='btn btn-light-blue'>Choose File</label>
                                    </>
                                  )}                                    
                                </div>
                            </div>                                        
                            <div className="mb-4">                        
                                <h3>Name</h3>
                                <InputGroup className="mb-4 input-group-field" onChange={event => setName(event.target.value)}>
                                    <Form.Control
                                        placeholder='Enter Asset Title  '
                                    />
                                </InputGroup>
                                <h3>Description <small>(Optional)</small></h3>
                                <InputGroup className="mb-2 input-group-field" onChange={event => setDescription(event.target.value)}>
                                    <Form.Control
                                        placeholder=' Enter Description '
                                    />
                                </InputGroup>                                
                            </div>
                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                <Button variant='primary' size="lg" onClick={()=>onSubmitNFT()}>Create item</Button>
                                {/* <Button variant='primary' size="lg" onClick={()=>storedbApi(10212,'a','b')}>Check Api</Button> */}
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
                            <p className='mb-3'>We recommend an image of at least 500x500. Gifs work too.</p>
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
            {/* onHide={handleCloseTest} */}
            <Modal show={showTest} centered size="sm" >
                <Modal.Header  />
                <Modal.Body>
                    <div className="text-center py-4">
                        <h3>NFT Successfully created</h3>
                    </div>
                    <Button variant="primary" size="lg" className='w-100' onClick={()=>done()}>Done</Button>
                </Modal.Body>
            </Modal>
            {/* onHide={handleCloseTestLoading} */}
            <Modal show={showTestLoading} centered size="sm" >
                <Modal.Header  />
                <Modal.Body>
                    <div className="text-center py-4">                        
                        <img src={logogif} alt="loading..." />
                    </div>                    
                </Modal.Body>
            </Modal>            
        </Layout>
    );
};

export default Start;

// closeButton