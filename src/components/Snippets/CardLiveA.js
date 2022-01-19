import React,{useState} from 'react';
import {Card, Dropdown, Button, OverlayTrigger, Tooltip,Modal,Form, InputGroup } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

import User from '../../assets/images/dummy-icon.svg';
import Preview from '../../assets/images/preview.jpg';
import EthereumIcon from '../../assets/images/Algo.png';
import configfile from '../../config.json'
import MyAlgoConnect from '@randlabs/myalgo-connect';
import fireDb from '../../firebase';
import dataescrow from "../../escrow.js";
const myAlgoWallet = new MyAlgoConnect();




const CardLiveA = (props) => {
    const [showTest, setShowTest] = React.useState(false);
    const [showTestLoading, setShowTestLoading] = React.useState(false);    
    const [showTestDone,setshowTestDone] = React.useState(false);   
    const [showTestSale,setshowTestSale] = React.useState(false);   
         
    const [getprices,setprices]=useState(null)
    const handleCloseTest = () => setShowTest(false);
    const handleCloseTestLoading = () => setShowTestLoading(false);
    const handleCloseTestDone = () => setshowTestDone(false);
    const handleCloseTestSale = () => setshowTestSale(false);
    
    
    
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

        const buynow=async()=>{
            if(localStorage.getItem("wallet") === null || localStorage.getItem("wallet") === "0x" || localStorage.getItem("wallet") === undefined || localStorage.getItem("wallet") === ''){
            }
            else{          
            if(props.dataall === localStorage.getItem("wallet"))
            {   
                alert("you are owner so you does not purchase this token")             
            }
            else{
                setShowTestLoading(true)                
                const algosdk = require('algosdk');  
                const algodclient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');          
                //const myAlgoConnect = new MyAlgoConnect();
                //  let appId="50714558";
                let appId=parseInt(configfile['appId']);                
                let params = await algodclient.getTransactionParams().do();
                //comment out the next two lines to use suggested fee
                params.fee = 1000;
                params.flatFee = true;  
                //console.log("Global state", datedt);  
              try {    
                let convert95=(((parseInt(props.dataall.NFTPrice))/100)*95)
                console.log("convert95",convert95)  
                let convert5=(((parseInt(props.dataall.NFTPrice))/100)*5);
                console.log("convert5",convert5)
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
                appArgs.push(new Uint8Array(Buffer.from("Buynow")));
                const transactionass = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
                from: localStorage.getItem('wallet'),
                to: localStorage.getItem('wallet'),
                assetIndex: parseInt(props.dataall.Assetid),
                note: undefined,
                amount: 0,
                suggestedParams: params
                });
              
                const signedTxnass = await myAlgoConnect.signTransaction(transactionass.toByte());
                const responseass = await algodclient.sendRawTransaction(signedTxnass.blob).do();
                console.log("optresponse",responseass)
                
                  
                const txn1 = algosdk.makeApplicationNoOpTxnFromObject({
                  from:localStorage.getItem('wallet'), 
                  suggestedParams: params, 
                  appIndex: parseInt(appId), 
                  appArgs: appArgs
              });
              
              const txn2 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
                  suggestedParams:params,
                  from:localStorage.getItem('wallet'),
                  to: lsig.address(), 
                  amount: 2000
              });
              const txn3 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
                suggestedParams:params,
                from:localStorage.getItem('wallet'),
                to: lsig.address(), 
                amount: parseInt(props.dataall.NFTPrice)
              });
              
                const txn4 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
                  suggestedParams:params,
                  from: lsig.address(),
                  to:localStorage.getItem('wallet'), 
                  amount: 1,
                  assetIndex: parseInt(props.dataall.Assetid)
                });
              
                
                const txn5 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
                  suggestedParams:params,
                  from: lsig.address(),
                  to: props.dataall.ownerAddress, 
                  amount: parseInt(convert95)
              });
              
              const txn6 = algosdk.makeAssetConfigTxnWithSuggestedParamsFromObject({
                reKeyTo: undefined,
                from : lsig.address(),
                manager:localStorage.getItem('wallet'),
                assetIndex: parseInt(props.dataall.Assetid),
                suggestedParams:params,
                strictEmptyAddressChecking:false
                
              })
              
              const txn7 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
                suggestedParams:params,
                from: lsig.address(),
                to:"PSYRA3264OJABUAD4GWNUMGXGYDZHJRPGL5GX26SNF3OIDQQKSPWZGDWN4", 
                amount: parseInt(convert5)
              });
              
              const txnsToGroup = [ txn1, txn2 ,txn3, txn4, txn5, txn6, txn7];
              const groupID = algosdk.computeGroupID(txnsToGroup)
              txnsToGroup[0].group = groupID;
              txnsToGroup[1].group = groupID;
              txnsToGroup[2].group = groupID;
              txnsToGroup[3].group = groupID;
              txnsToGroup[4].group = groupID;
              txnsToGroup[5].group = groupID;
              txnsToGroup[6].group = groupID;
              
              const signedTx1 = await myAlgoConnect.signTransaction(txnsToGroup[0].toByte());
              const signedTx2 = await myAlgoConnect.signTransaction(txnsToGroup[1].toByte());
              const signedTx3 = await myAlgoConnect.signTransaction(txnsToGroup[2].toByte());
              const signedTx4 = algosdk.signLogicSigTransaction(txnsToGroup[3], lsig);
              const signedTx5 = algosdk.signLogicSigTransaction(txnsToGroup[4], lsig);
              const signedTx6 = algosdk.signLogicSigTransaction(txnsToGroup[5], lsig);
              const signedTx7 = algosdk.signLogicSigTransaction(txnsToGroup[6], lsig);
              
              const response = await algodclient.sendRawTransaction([signedTx1.blob,signedTx2.blob,signedTx3.blob,signedTx4.blob,signedTx5.blob,signedTx6.blob,signedTx7.blob]).do();
              console.log("TxID", JSON.stringify(response, null, 1));
              await waitForConfirmation(algodclient, response.txId);
              
              //db change here
                    
              fireDb.database().ref(`imagerefexploreoneAlgos/${props.dataall.ownerAddress}`).child(props.dataall.keyId).remove().then(()=>{
                fireDb.database().ref(`imagerefbuy/${localStorage.getItem("wallet")}`).child(props.dataall.keyId).set({
                    Assetid:props.dataall.Assetid,Imageurl:props.dataall.Imageurl,NFTPrice:props.dataall.NFTPrice,EscrowAddress:props.dataall.EscrowAddress,keyId:props.dataall.keyId,
                    NFTName:props.dataall.NFTName,userSymbol:props.dataall.userSymbol,Ipfsurl:props.dataall.Ipfsurl,ownerAddress:localStorage.getItem('wallet'),previousoaddress:props.dataall.ownerAddress,
                    TimeStamp:props.dataall.TimeStamp,NFTDescription:props.dataall.NFTDescription,HistoryAddress:props.dataall.ownerAddress,Appid:props.dataall.Appid,valid:props.dataall.valid            
                      }).then(()=>{          
                        setShowTestLoading(false)  
                        setshowTestSale(true)
                    }) 
              })
              .catch((e) => {
              console.error(e);
              setShowTestLoading(false)  
              });                            
              //db change end here
                } catch (err) {
                  console.error(err);
                }                                                                  
            }
        }
        }

        
        const bidready=()=>{
            alert("Bid has been hold")
        }
    
    
    return (
        <Card>
            <Card.Header className='d-flex align-items-center'>
                <div className="card-users d-flex align-items-center me-auto">
                    <OverlayTrigger
                        overlay={<Tooltip>E-Element</Tooltip>}
                    >
                        <Link to="/">
                            <img src={props.dataall.Imageurl} alt="pic" />
                        </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                        overlay={<Tooltip>E-Element</Tooltip>}
                    >
                        <Link to="/">
                            <img src={props.dataall.Imageurl} alt="pic" />
                            {props.verify ? (
                                <svg width="14" height="    14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                            ) : null}
                        </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                        overlay={<Tooltip>E-Element</Tooltip>}
                    >
                        <Link to="/">                            
                            <img src={props.dataall.Imageurl} alt="pic" />
                            {props.verify ? (
                                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                            ) : null}
                        </Link>
                    </OverlayTrigger>
                </div>

                <Dropdown className='dropdown-noarrow'>
                    <Dropdown.Toggle variant="reset">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='link-flex dropdown-menu-right'>
                        <Dropdown.Item onClick={()=>bidready()}>New bid</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="/">Refresh Metadata</Dropdown.Item>
                        <Dropdown.Item href="/">Share</Dropdown.Item>
                        <Dropdown.Item href="/">Report</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Header>
            <Link  to={{
                    pathname: "/liveauction",
                    state:{alldata:props.dataall}
                    }}>
            <Card.Body className='p-0'>
                <div className="position-relative">                
                    <img src={props.dataall.Imageurl} className='img-fluid card-image' alt="Preview" />
                    
                    {/* {props.timer ? (
                        <div className="timer">
                            <div>{props.timer} <span>left</span> <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f525.png" alt="fire" /></div></div>
                    ) : null} */}
                </div>

                <div className="card-title justify-content-between d-flex align-items-start">
                    <Link to="/">{props.dataall.NFTName}</Link>

                    <OverlayTrigger
                        overlay={<Tooltip>Algorand</Tooltip>}
                    >
                        <img src={EthereumIcon} alt="icon" />
                    </OverlayTrigger>
                </div>

                <div className="card-info d-flex align-items-end justify-content-between">
                    <div>                        
                        <h5 dangerouslySetInnerHTML={{__html: props.dataall.NFTPrice}} />
                        <Link to="/" className='btn-link-grad'>{props.dataall.NFTPrice}</Link>
                        <span>{props.dataall.Assetid}</span>
                    </div>                    
                    
                    {/* <Button variant='default' className='btn-count float-end'>
                        <svg viewBox="0 0 17 16" fill="none" width="14" height="14" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye bZjZGw"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path></svg>                        
                        <span>{props.dataall.Assetid}</span>
                    </Button>                     */}
                
            <Modal show={showTestLoading} centered size="sm" onHide={handleCloseTestLoading}>
                <Modal.Header  />
                <Modal.Body>
                    <div className="text-center py-4">
                        <h3>Loading...</h3>                                    
                    </div>                    
                </Modal.Body>
            </Modal>                          
                             
            <Modal show={showTestSale} centered size="sm" onHide={handleCloseTestSale}>
                <Modal.Header  />
                <Modal.Body>
                    <div className="text-center py-4">
                        <h3>Token Purchase Successfully</h3>  
                    </div>                    
                    <Button variant="primary" size="lg" className='w-100' onClick={()=>refreshSale()}>Done</Button>
                </Modal.Body>
            </Modal>                          
                </div>                   
                
            </Card.Body>
            </Link>
            
        </Card>
    );
};

export default CardLiveA;