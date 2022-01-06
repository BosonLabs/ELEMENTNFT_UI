import React,{useState} from 'react';
import Layout from './LayoutNoFooter';
import {Container, Button, Dropdown, Row, Col, Tabs, Tab,Modal} from 'react-bootstrap';
import {
    Link,useLocation
  } from "react-router-dom";
import configfile from '../config.json'
import MyAlgoConnect from '@randlabs/myalgo-connect';
import fireDb from '../firebase';
import dataescrow from "../escrow.js";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const myAlgoWallet = new MyAlgoConnect();

const SingleBid = (props) => {
    const history = useHistory();
    const location = useLocation();
    console.log("Biddata2",location.state.alldata)
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
            history.push('/')
            window.location.reload(false)            
        }

        const buynow=async()=>{
            if(localStorage.getItem("wallet") === null || localStorage.getItem("wallet") === "0x" || localStorage.getItem("wallet") === undefined || localStorage.getItem("wallet") === ''){
            }
            else{          
            if(location.state.alldata.ownerAddress === localStorage.getItem("wallet"))
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
                let convert95=(((parseInt(location.state.alldata.NFTPrice))/100)*95)
                console.log("convert95",convert95)  
                let convert5=(((parseInt(location.state.alldata.NFTPrice))/100)*5);
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
                assetIndex: parseInt(location.state.alldata.Assetid),
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
                amount: parseInt(location.state.alldata.NFTPrice)
              });
              
                const txn4 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
                  suggestedParams:params,
                  from: lsig.address(),
                  to:localStorage.getItem('wallet'), 
                  amount: 1,
                  assetIndex: parseInt(location.state.alldata.Assetid)
                });
              
                
                const txn5 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
                  suggestedParams:params,
                  from: lsig.address(),
                  to: location.state.alldata.ownerAddress, 
                  amount: parseInt(convert95)
              });
              
              const txn6 = algosdk.makeAssetConfigTxnWithSuggestedParamsFromObject({
                reKeyTo: undefined,
                from : lsig.address(),
                manager:localStorage.getItem('wallet'),
                assetIndex: parseInt(location.state.alldata.Assetid),
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
              let dateset=new Date().toDateString();
              fireDb.database().ref(`imagerefexploreoneAlgos/${location.state.alldata.ownerAddress}`).child(location.state.alldata.keyId).remove().then(()=>{
                fireDb.database().ref(`imagerefbuy/${localStorage.getItem("wallet")}`).child(location.state.alldata.keyId).set({
                    Assetid:location.state.alldata.Assetid,Imageurl:location.state.alldata.Imageurl,NFTPrice:location.state.alldata.NFTPrice,EscrowAddress:location.state.alldata.EscrowAddress,keyId:location.state.alldata.keyId,
                    NFTName:location.state.alldata.NFTName,userSymbol:location.state.alldata.userSymbol,Ipfsurl:location.state.alldata.Ipfsurl,ownerAddress:localStorage.getItem('wallet'),previousoaddress:location.state.alldata.ownerAddress,
                    TimeStamp:dateset,NFTDescription:location.state.alldata.NFTDescription,HistoryAddress:location.state.alldata.ownerAddress,Appid:location.state.alldata.Appid            
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

    return (
        <Layout>
            <Container fluid className='d-md-flex'>
                <div className="content-left d-flex">
                    {/* <video playsInline={true} autoPlay={true} controls={true} loop={true} src="https://img.rarible.com/prod/video/upload/t_big/prod-itemAnimations/0x5c3daa7a35d7def65bfd9e99120d5fa07f63f555:10061/271db129"></video> */}
                    <img src={location.state.alldata.Imageurl} alt="test"/>
                </div>
                <div className="content-right d-flex flex-column ms-auto">
                    <div className="d-flex align-items-start mb-4">
                        <div>
                            <h2 className='mb-1'>{location.state.alldata.NFTName}</h2>
                            <div className="category">From <span className='text-dark'>0.06 ALGO</span> · 474 of 500 available</div>
                        </div>
                        <div className="ms-auto d-flex align-items-center">
                            <Button variant='white' className='btn-count me-2 py-3 btn-rounded'>
                                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye fDKaYE sc-cnHmbd lkEDtX">
                                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2">
                                </path></svg>
                                50
                            </Button>

                            <Dropdown className='dropdown-noarrow'>
                                <Dropdown.Toggle variant="white" className='btn-round'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                </svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='link-flex dropdown-menu-right'>
                                    {/* <Dropdown.Item href="/">New bid</Dropdown.Item> */}
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="/bid-2">Refresh Metadata</Dropdown.Item>
                                    <Dropdown.Item href="/bid-2">Share</Dropdown.Item>
                                    <Dropdown.Item href="/bid-2">Report</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <div className="mb-4 content-right-description">
                        {/* <p>#0009 </p> */}
                        {/* <p>"Gas Station Pills" </p> */}
                    </div>

                    {/* <Row className="bid-users mb-4">
                        <Col>
                            <h6><span>Creator</span> 10% royalties</h6>

                            <Link to="/" className="avatar d-flex align-items-center text-truncate">
                                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                <span>HEX TOYS</span>
                            </Link>
                        </Col>
                        <Col>
                            <h6>Collection</h6>

                            <Link to="/" className="avatar d-flex align-items-center text-truncate">
                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                <span>HEX TOYS</span>
                            </Link>
                        </Col>
                    </Row> */}

                    {/* <div className="mb-4 pt-2">
                        <Button className='w-100' size="lg" variant='light-grad'>
                            <span>
                                <svg viewBox="0 0 10 12" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL me-2 sc-hKwDye kpPkaN"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 0.75C3.067 0.75 1.5 2.317 1.5 4.25V5.125C1.01675 5.125 0.625 5.51675 0.625 6V10.375C0.625 10.8582 1.01675 11.25 1.5 11.25H8.5C8.98325 11.25 9.375 10.8582 9.375 10.375V6C9.375 5.51675 8.98325 5.125 8.5 5.125V4.25C8.5 2.317 6.933 0.75 5 0.75ZM6.75 5.125V4.25C6.75 3.2835 5.9665 2.5 5 2.5C4.0335 2.5 3.25 3.2835 3.25 4.25V5.125H6.75Z" fill="currentColor"></path></svg>
                                Unlockable content included
                            </span>
                        </Button>
                    </div> */}

                    {/* <Tabs defaultActiveKey="owners" id="bids-tabs" className="mb-4 nav-tabs-start">
                        <Tab eventKey="owners" title="Owners">
                            <div className="d-flex mb-4 align-items-center">
                                <Link to="/" className="avatar d-flex align-items-center text-truncate">
                                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                    <div>
                                        <span>HEX TOYS</span>
                                        <p>474/474 on sale for <span>0.06 ETH</span> each</p>
                                    </div>
                                </Link>

                                <Button variant='primary' className='ms-auto'>Buy</Button>
                            </div>
                            <div className="d-flex mb-4 align-items-center">
                                <Link to="/" className="avatar d-flex align-items-center text-truncate">
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                    <div>
                                        <span>DAIYOX</span>
                                        <p>1 edition <span>not for sale</span></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="d-flex mb-4 align-items-center">
                                <Link to="/" className="avatar d-flex align-items-center text-truncate">
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                    <div>
                                        <span>0xd848904449c4c7d5421...4912</span>
                                        <p>1 edition <span>not for sale</span></p>
                                    </div>
                                </Link>
                            </div>
                        </Tab>
                        <Tab eventKey="bids" title="Bids">
                            <div className="no-found py-5p text-gray text-center">
                                <svg viewBox="0 0 12 16" fill="none" width="38" height="38" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL mb-3 sc-hKwDye jggBKf"><path d="M7.00146 0V6H11.0015L4.00146 16V10H0.00146484L7.00146 0Z" fill="currentColor"></path></svg>
                                <p className="lead mb-4">No active bids yet. Be the <br />first to make a bid!</p>
                            </div>
                        </Tab>
                        <Tab eventKey="details" title="Details">
                            <div className="mb-4">
                                <h6 className='subheading'>Blockchain</h6>
                                <div className="avatar d-flex align-items-center text-truncate">
                                    <img src="https://rarible.com/9b703a21b9f93a1f0065.svg" alt="avatar" />
                                    <span>Ethereum</span>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="history" title="History">
                            <div className="d-flex mb-4 align-items-center">
                                <div className="avatar d-flex align-items-center text-truncate">
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                    <div>
                                        <span><span>Purchased 1 edition for</span> 0.06 ETH</span>
                                        <p>by <span>AppSec</span> 12/23/2021, 2:01 AM <Link to="/"><svg viewBox="0 0 12 12" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye vZMA-D"><path d="M3.69233 0.92308V0.92308C2.16292 0.92308 0.923096 2.16291 0.923096 3.69231V8.07693C0.923096 9.73378 2.26624 11.0769 3.9231 11.0769H8.30771C9.83712 11.0769 11.0769 9.8371 11.0769 8.3077V8.3077" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M6.46143 0.92308H11.0768V5.53847" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M11.077 0.92308L5.53857 6.46154" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mb-4 align-items-center">
                                <div className="avatar d-flex align-items-center text-truncate">
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                    <div>
                                        <span><span>Purchased 1 edition for</span> 0.06 ETH</span>
                                        <p>by <span>AppSec</span> 12/23/2021, 2:01 AM <Link to="/"><svg viewBox="0 0 12 12" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye vZMA-D"><path d="M3.69233 0.92308V0.92308C2.16292 0.92308 0.923096 2.16291 0.923096 3.69231V8.07693C0.923096 9.73378 2.26624 11.0769 3.9231 11.0769H8.30771C9.83712 11.0769 11.0769 9.8371 11.0769 8.3077V8.3077" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M6.46143 0.92308H11.0768V5.53847" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M11.077 0.92308L5.53857 6.46154" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mb-4 align-items-center">
                                <div className="avatar d-flex align-items-center text-truncate">
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                    <div>
                                        <span><span>Purchased 1 edition for</span> 0.06 ETH</span>
                                        <p>by <span>AppSec</span> 12/23/2021, 2:01 AM <Link to="/"><svg viewBox="0 0 12 12" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye vZMA-D"><path d="M3.69233 0.92308V0.92308C2.16292 0.92308 0.923096 2.16291 0.923096 3.69231V8.07693C0.923096 9.73378 2.26624 11.0769 3.9231 11.0769H8.30771C9.83712 11.0769 11.0769 9.8371 11.0769 8.3077V8.3077" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M6.46143 0.92308H11.0768V5.53847" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M11.077 0.92308L5.53857 6.46154" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></Link></p>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs> */}

                    <div className="sticky-bottom mt-auto text-center">
                        <Row>
                            <Col xs={6}>
                                <Button variant='primary' className='w-100 mw-auto px-0' size='lg' onClick={()=>buynow()}>Buy for {(location.state.alldata.NFTPrice)/1000000} ALGO</Button>
                            </Col>
                            <Col xs={6}>
                                <Button variant='light-blue' className='w-100 mw-auto px-0' size='lg'>Place a bid</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
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
            </Container>
        </Layout>
    );
};

export default SingleBid;