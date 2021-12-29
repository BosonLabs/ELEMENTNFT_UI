import React,{useState} from 'react';
import Layout from '../Layout';
import {Container, Row, Col, Card, Form, Tab, Tabs, InputGroup, Dropdown, Button, OverlayTrigger, Tooltip, Modal} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

//import CardInfo from '../Snippets/Card'
//import Preview from '../../assets/images/preview.jpg'
import Compress from "react-image-file-resizer";
//import ipfs from "./ipfs";
import { create } from 'ipfs-http-client';
import MyAlgoConnect from '@randlabs/myalgo-connect';
const client = create('https://ipfs.infura.io:5001/api/v0')



const Start = () => {
    const [fileUrl, updateFileUrl] = useState(``)
    console.log("Newipfs",fileUrl)
    const [show, setShow] = React.useState(false);
    const [tname,setName] = useState("");
    const [tdescription,setDescription] = useState("");  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [showTest, setShowTest] = React.useState(false);

    const handleCloseTest = () => setShowTest(false);
    const handleShowTest = () => setShowTest(true);

    const [Img,setImg] = useState("")

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
        event.preventDefault();  
          //new write below
          if(localStorage.getItem("wallet") === null || localStorage.getItem("wallet") === "0x" || localStorage.getItem("wallet") === undefined || localStorage.getItem("wallet") === ''){
            console.log("Empty",localStorage.getItem("wallet"))
          }
          else{
          let ta=tname;
          let tb='CIFI';
          let te=1000;
          let idget="";
          console.log("uploadonecheck",ta);
          console.log("uploadtwocheck",tb);
          console.log("uploadtwocheck",te);
          //setVisibleModal(false)                        
      //let algosdk = require('algosdk');  
      //setIsOpens(true)
      const server = "https://testnet-algorand.api.purestake.io/ps2";
      const port = "";  
      const token = {
            'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
      }
      //let algodclient = new algosdk.Algodv2(token, server, port);
      //const params = await algodclient.getTransactionParams().do();
      //params.fee = 1000;
      //params.flatFee = true;
      const myAlgoConnect = new MyAlgoConnect();
      //const accountswall = await myAlgoWallet.connect();
      //crypto-js@latest
      //const addresseswall = accountswall.map(accountswall => accountswall.address);
    //   const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({    
    //     from:localStorage.getItem('wallet'),
    //     assetName: tname,
    //     unitName: tb,
    //     total: 1,
    //     decimals: 0,
    //     note: undefined,
    //     //manager:lsig.address(),
    //     manager:localStorage.getItem('wallet'),
    //     reserve:localStorage.getItem('wallet'),
    //     freeze:localStorage.getItem('wallet'),
    //     clawback:localStorage.getItem('wallet'),
    //     suggestedParams: params
    //   });
      
    //   const signedTxn = await myAlgoConnect.signTransaction(txn.toByte());
    //   const response = await algodclient.sendRawTransaction(signedTxn.blob).do();
    //   console.log("optresponse",response)
    //   await waitForConfirmation(algodclient,response.txId);
    //   let ptx = await algodclient.pendingTransactionInformation(response.txId).do();
    //   let assetID = ptx["asset-index"];
    //   console.log("pendingass",assetID);        
      //appoptin(assetID,response.txId,localStorage.getItem('wallet'))              
          }
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

                                    <input type="file" hidden id='upload' onChange = {captureFile}/>
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
                                <InputGroup className="mb-2 input-group-field">
                                    <Form.Control
                                        placeholder='e. g. "After purchasing you’ll be able to get the real T-Shirt"'
                                    />
                                </InputGroup>                                
                            </div>

                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                <Button variant='primary' size="lg" onClick={handleShowTest}>Create item</Button>
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
                        <InputGroup.Text className='ps-0' id="basic-addon1">rarible.com/</InputGroup.Text>
                        <Form.Control
                            placeholder='Enter short url'
                        />
                    </InputGroup>
                    <p className='mb-4'>Will be used as public URL</p>

                    <Button className='w-100' variant='primary'>Create collection</Button>
                </Modal.Body>
            </Modal>


            <Modal show={showTest} centered size="sm" onHide={handleCloseTest}>
                <Modal.Header closeButton />
                <Modal.Body>
                    <div className="text-center py-4">
                        <h3>Form Successfully created</h3>
                    </div>

                    <Button variant="primary" size="lg" className='w-100'>Done</Button>
                </Modal.Body>
            </Modal>
        </Layout>
    );
};

export default Start;