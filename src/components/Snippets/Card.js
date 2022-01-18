import React,{useState} from 'react';
import {Card, Dropdown, Button, OverlayTrigger, Tooltip,Modal,Form, InputGroup } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

import User from '../../assets/images/dummy-icon.svg';
import Preview from '../../assets/images/preview.jpg';
import EthereumIcon from '../../assets/images/Algo.png'
import configfile from '../../config.json'
import MyAlgoConnect from '@randlabs/myalgo-connect';
import fireDb from '../../firebase';
import dataescrow from "../../escrow.js";
import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    EmailShareButton,
  } from 'react-share';
import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    GooglePlusIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    RedditIcon,
    TumblrIcon,
    LivejournalIcon,
    MailruIcon,
    ViberIcon,
    WorkplaceIcon,
    EmailIcon,
  } from 'react-share';

const myAlgoWallet = new MyAlgoConnect();

const CardCreate = (props) => {
    const [showTest, setShowTest] = React.useState(false);
    const [showTestLoading, setShowTestLoading] = React.useState(false);    
    const [showTestDone,setshowTestDone] = React.useState(false);   
    const [showTestSale,setshowTestSale] = React.useState(false);   
    const [showShare,setshowShare] = React.useState(false);   
         
    const [getprices,setprices]=useState(null)
    const handleCloseTest = () => setShowTest(false);
    const handleCloseTestLoading = () => setShowTestLoading(false);
    const handleCloseTestDone = () => setshowTestDone(false);
    const handleCloseTestSale = () => setshowTestSale(false);
    const handleCloseshowShare = () => setshowShare(false);
    
    
    
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

        

        const refreshSale=()=>{
            setshowTestSale(false)
            window.location.reload(false)
        }

        const refresh=()=>{
            window.location.reload(false)
            setshowTestDone(false)
            
        }
    const onshow2=()=>{
        setShowTestLoading(true)
        console.log("sale",props.dataall);
        if(localStorage.getItem('wallet') === props.dataall.ownerAddress){      
            let dateset=new Date().toDateString();      
            fireDb.database().ref(`imagerefexploreoneAlgos/${localStorage.getItem('wallet')}`).child(props.dataall.keyId).set({
                Assetid:props.dataall.Assetid,Imageurl:props.dataall.Imageurl,NFTPrice:props.dataall.NFTPrice,EscrowAddress:props.dataall.EscrowAddress,keyId:props.dataall.keyId,
                NFTName:props.dataall.NFTName,userSymbol:props.dataall.userSymbol,Ipfsurl:props.dataall.Ipfsurl,ownerAddress:props.dataall.ownerAddress,previousoaddress:props.dataall.previousoaddress,
                TimeStamp:dateset,NFTDescription:props.dataall.NFTDescription,HistoryAddress:props.dataall.HistoryAddress,Appid:props.dataall.Appid,valid:props.dataall.valid
              }).then(()=>{
                fireDb.database().ref(`imagerefAlgo/${localStorage.getItem('wallet')}`).child(props.dataall.keyId).remove();
                let refactivity=fireDb.database().ref(`activitytable/${localStorage.getItem('wallet')}`);   
                const db = refactivity.push().key;                         
                refactivity.child(db).set({
                Assetid:props.dataall.Assetid,Imageurl:props.dataall.Imageurl,NFTPrice:props.dataall.NFTPrice,EscrowAddress:"saleNFT",keyId:db,
                NFTName:props.dataall.NFTName,userSymbol:props.dataall.userSymbol,Ipfsurl:props.dataall.Ipfsurl,ownerAddress:props.dataall.ownerAddress,previousoaddress:localStorage.getItem('wallet'),                
                TimeStamp:dateset,NFTDescription:props.dataall.NFTDescription,HistoryAddress:props.dataall.HistoryAddress,Appid:props.dataall.Appid,valid:props.dataall.valid})
                .then(()=>{                                                            
                    console.log("remove db");
                    setShowTestLoading(false)
                    setshowTestSale(true)              
                })                        
                  
              })
        }
        
    }

    const onshow1=()=>{
        setShowTest(true)        
    }

    const setpricedb=async(b)=>{
        setShowTest(false)
        if(getprices === null || getprices === undefined || getprices === ""){
            setShowTest(true)
        }else{                    
            setShowTestLoading(true)    
            const algosdk = require('algosdk');  
            const algodclient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');
            // const myAlgoConnect = new MyAlgoConnect();
            let appId=parseInt(configfile['appId']);
            //let idget=assetidgetc;
            let assetidgetc=parseInt(props.dataall.Assetid)    
            //console.log("letasset",x.title)
          try {            
            let amountmul=(parseInt(getprices)*1000000);
            console.log("amountmul",amountmul)
          const params = await algodclient.getTransactionParams().do();            
          const myAlgoConnect = new MyAlgoConnect();
          let results = await algodclient.compile(dataescrow).do();
              console.log("Resultconsole = " + results);
              console.log("Hash = " + results.hash);
              console.log("Result = " + results.result);
              //await sleep(20000)
              let program = new Uint8Array(Buffer.from(results.result, "base64"));      
              let lsig = algosdk.makeLogicSig(program);
              //let tealSignPrint = tealSign(sk, data, lsig.address());
              console.log("LSIG",lsig.address())
          let appArgs = [];
          appArgs.push(new Uint8Array(Buffer.from("createlisting")));
          appArgs.push(algosdk.encodeUint64(parseInt(amountmul)));
      console.log("ssk",props.dataall.keyId)
      console.log("ssa",props.dataall.Assetid)
      console.log("ssi",props.dataall.Imageurl)
      console.log("ass",parseInt(amountmul))
      console.log("lss",lsig.address())
      console.log("namess",props.dataall.NFTName)
      console.log("urlss",props.dataall.Ipfsurl)
      console.log("ownerss",props.dataall.ownerAddress)
      console.log("ipfsss",props.dataall.Ipfsurl)
      console.log("press",props.dataall.previousoaddress)
      console.log("timess",props.dataall.TimeStamp)
      console.log("desss",props.dataall.NFTDescription)
      console.log("hisss",props.dataall.HistoryAddress)
      console.log("appss",props.dataall.Appid)      
      console.log("userss",props.dataall.userSymbol)      
          let transaction1 = algosdk.makeApplicationNoOpTxnFromObject({
            from:localStorage.getItem('wallet'), 
            suggestedParams:params, 
            appIndex:parseInt(appId), 
            appArgs:appArgs
          })
  
          let transaction2 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
          from: localStorage.getItem('wallet'),
          to: lsig.address(),
          amount: Number(parseInt(3000)),
          note: undefined,
          suggestedParams: params
          });
                  
          const transaction3 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
          from: lsig.address(),
          to: lsig.address(),
          assetIndex: parseInt(assetidgetc),
          note: undefined,
          amount: 0,
          suggestedParams: params
          });
          
          const transaction4= algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
          from: localStorage.getItem('wallet'),
          to: lsig.address(),
          assetIndex: parseInt(assetidgetc),
          note: undefined,
          amount: 1,
          suggestedParams: params
          });
  
          const txn5 = algosdk.makeAssetConfigTxnWithSuggestedParamsFromObject({
            reKeyTo: undefined,
            from : localStorage.getItem('wallet'),
            manager: lsig.address(),
            assetIndex:parseInt(assetidgetc),
            suggestedParams:params,
            strictEmptyAddressChecking:false
            
          })
          
          
          const groupID = algosdk.computeGroupID([ transaction1, transaction2, transaction3, transaction4,txn5]);
          const txs = [ transaction1, transaction2, transaction3, transaction4,txn5 ];
          txs[0].group = groupID;
          txs[1].group = groupID;
          txs[2].group = groupID;
          txs[3].group = groupID;
          txs[4].group = groupID;
          
                    
          const signedTx1 = await myAlgoConnect.signTransaction(txs[0].toByte());
          const signedTx2 = await myAlgoConnect.signTransaction(txs[1].toByte());
          const signedTx3 = algosdk.signLogicSigTransaction(txs[2], lsig);
          const signedTx4 = await myAlgoConnect.signTransaction(txs[3].toByte());
          const signedTx5 = await myAlgoConnect.signTransaction(txs[4].toByte());
          const response = await algodclient.sendRawTransaction([ signedTx1.blob, signedTx2.blob, signedTx3.blob, signedTx4.blob,signedTx5.blob]).do();
          console.log("TxID", JSON.stringify(response, null, 1));
          await waitForConfirmation(algodclient, response.txId);
  
          //db here

          let dateset=new Date().toDateString();
          fireDb.database().ref(`imagerefAlgo/${localStorage.getItem('wallet')}`).child(props.dataall.keyId).update({
            Assetid:props.dataall.Assetid,Imageurl:props.dataall.Imageurl,NFTPrice:parseInt(amountmul),EscrowAddress:lsig.address(),keyId:props.dataall.keyId,
            NFTName:props.dataall.NFTName,userSymbol:props.dataall.userSymbol,Ipfsurl:props.dataall.Ipfsurl,ownerAddress:props.dataall.ownerAddress,previousoaddress:localStorage.getItem('wallet'),
            TimeStamp:dateset,NFTDescription:props.dataall.NFTDescription,HistoryAddress:props.dataall.HistoryAddress,Appid:props.dataall.Appid,valid:props.dataall.valid
          }).then(()=>{  
                let refactivity=fireDb.database().ref(`activitytable/${localStorage.getItem('wallet')}`);   
                const db = refactivity.push().key;                         
                refactivity.child(db).set({
                Assetid:props.dataall.Assetid,Imageurl:props.dataall.Imageurl,NFTPrice:parseInt(amountmul),EscrowAddress:"priceupdated",keyId:db,
                NFTName:props.dataall.NFTName,userSymbol:props.dataall.userSymbol,Ipfsurl:props.dataall.Ipfsurl,ownerAddress:props.dataall.ownerAddress,previousoaddress:localStorage.getItem('wallet'),
                TimeStamp:dateset,NFTDescription:props.dataall.NFTDescription,HistoryAddress:props.dataall.HistoryAddress,Appid:props.dataall.Appid,valid:props.dataall.valid})
                .then(()=>{                                        
                setShowTestLoading(true)
                setshowTestDone(true)
                })                        
          })
            
          //db end here
            } catch (err) {
              console.error(err);
              setShowTestLoading(false)
            }        
        }

    }
    

    const sharebutton=()=>{
        //console.log("SingleBid",location.state.alldata)
        setshowShare(true)
    }
    
    return (
        <Card>
            <Card.Header className='d-flex align-items-center'>
                <div className="card-users d-flex align-items-center me-auto">
                    {/* <OverlayTrigger
                        overlay={<Tooltip>E-Element</Tooltip>}
                    >
                        <Link to="/">
                            <img src={props.img} alt="pic" />
                        </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                        overlay={<Tooltip>E-Element</Tooltip>}
                    >
                        <Link to="/">
                            <img src={props.img} alt="pic" />
                            {props.verify ? (
                                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                            ) : null}
                        </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                        overlay={<Tooltip>E-Element</Tooltip>}
                    >
                        <Link to="/">
                            <img src={props.img} alt="pic" />
                            {props.verify ? (
                                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                            ) : null}
                        </Link>
                    </OverlayTrigger> */}
                </div>

                <Dropdown className='dropdown-noarrow'>
                    <Dropdown.Toggle variant="reset">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='link-flex dropdown-menu-right'>
                        {/* <Dropdown.Item href="/">Buy now</Dropdown.Item> */}
                        <Dropdown.Divider />
                        <Dropdown.Item href="/profile">Refresh Metadata</Dropdown.Item>
                        <Dropdown.Item onClick={()=>sharebutton()}>Share</Dropdown.Item>
                        <Dropdown.Item href="/profile">Report</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Header>
            <Card.Body className='p-0'>
                <div className="position-relative">
                    <img src={props.img} className='img-fluid card-image' alt="Preview" />
                    
                    {props.timer ? (
                        <div className="timer">
                            <div>{props.timer} <span>left</span> <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f525.png" alt="fire" /></div></div>
                    ) : null}
                </div>

                <div className="card-title justify-content-between d-flex align-items-start">
                    <Link to="/">{props.title}</Link>

                    <OverlayTrigger
                        overlay={<Tooltip>Algorand</Tooltip>}
                    >
                        <img src={EthereumIcon} alt="icon" />
                    </OverlayTrigger>
                </div>  

                <div className="card-info d-flex align-items-end justify-content-between">
                    <div>
                        {/* <h5 dangerouslySetInnerHTML={{__html: props.subTitle}} /> */}
                        {/* <Link  className='btn-link-grad'>{props.linkText}</Link> */}
                        <Link  className='btn-link-grad'>{props.linkText}</Link>
                    </div>                    
                    
                    {/* <Button variant='default' className='btn-count float-end'>
                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye bZjZGw"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path></svg>
                        <span>{props.count}</span>
                    </Button> */}

                    {props.linkText === undefined || props.linkText === null || props.linkText === " " || props.linkText === 0 ? (<>
                    <Button variant='default' className='btn-count float-end' onClick={()=>onshow1()}>                        
                        <span>Set Price</span>
                    </Button>
                     </>) : (<>
                    <Button variant='default' className='btn-count float-end' onClick={()=>onshow2()}>   
                        <span>Sale NFT</span>
                    </Button>
                    </>)}    

                <Modal show={showTest} centered size="sm" onHide={handleCloseTest}>
                <Modal.Header  />
                <Modal.Body>
                    <div className="text-center py-4">
                        <h3>Price </h3>
                        <InputGroup className="mb-4 input-group-field" onChange={event => setprices( event.target.value)}>
                        <Form.Control
                            placeholder='Enter price'
                        />
                </InputGroup>
                    </div>
                    <Button variant="primary" size="lg" className='w-100' onClick={()=>setpricedb(props.linkText)()}>SET PRICE</Button>
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
            <Modal show={showTestDone} centered size="sm" onHide={handleCloseTestDone}>
                <Modal.Header  />
                <Modal.Body>
                    <div className="text-center py-4">
                        <h3>Price Updated</h3>  
                    </div>                    
                    <Button variant="primary" size="lg" className='w-100' onClick={()=>refresh()}>Done</Button>
                </Modal.Body>
            </Modal>                          
            <Modal show={showTestSale} centered size="sm" onHide={handleCloseTestSale}>
                <Modal.Header  />
                <Modal.Body>
                    <div className="text-center py-4">
                        <h3>Updated</h3>  
                    </div>                    
                    <Button variant="primary" size="lg" className='w-100' onClick={()=>refreshSale()}>Done</Button>
                </Modal.Body>
            </Modal>       

                        <Modal show={showShare} centered size="sm" onHide={handleCloseshowShare}>
                <Modal.Header closeButton />
                <Modal.Body>
                            
                            <h3>&nbsp;&nbsp;Share link to this page</h3>                            
                            <br/>
                            <FacebookShareButton
                            url={window.location.href}
                            // quote={props.joke.setup + props.joke.punchline}
                            hashtag="#programing joke">
                            <FacebookIcon logoFillColor="white" size={32} round={true}/>
                            </FacebookShareButton>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <WhatsappShareButton
                            url={window.location.href}
                            // quote={props.joke.setup + props.joke.punchline}
                            hashtag="#programing joke">
                            <WhatsappIcon logoFillColor="white" size={32} round={true}/>
                            </WhatsappShareButton>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <TwitterShareButton
                            url={window.location.href}
                            // quote={props.joke.setup + props.joke.punchline}
                            hashtag="#programing joke">
                            <TwitterIcon logoFillColor="white" size={32} round={true}/>
                            </TwitterShareButton>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <EmailShareButton
                            url={window.location.href}
                            // quote={props.joke.setup + props.joke.punchline}
                            hashtag="#programing joke">
                            <EmailIcon logoFillColor="white" size={32} round={true}/>
                            </EmailShareButton>                                                        
                </Modal.Body>
            </Modal>                      
                </div>                   
                
            </Card.Body>
            
        </Card>
    );
};

export default CardCreate;