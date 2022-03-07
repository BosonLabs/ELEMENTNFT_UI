import React,{useState,useEffect,useContext} from 'react';
import Layout from '../Layout';
import {Container, Row, Col, Form, InputGroup, Button, Modal} from 'react-bootstrap';
import icon from '../../assets/images/dummy-icon.svg'
import Compress from "react-image-file-resizer";
//import fireDb from '../../firebase';
//import ipfs from "./ipfs";
import { create } from 'ipfs-http-client';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import { useHistory } from "react-router-dom";
//import firebase from '../../firebase';
import configfile from '../../config.json'
//import logogif from '../../assets/images/gif1.svg';
import logogif from '../../assets/images/gif4.webp';
import { DataContext } from '../../Context/DataContext';
const client = create('https://ipfs.infura.io:5001/api/v0')
const algosdk = require('algosdk'); 
const axios = require('axios');



const Edit = () => {
    //let tempaddress=localStorage.getItem('wallet').slice(0,50);
    // React.useEffect(() => {
    //     window.scrollTo(0, 0);     
    // });
    const {getApiDataProfileNFT,setApiDataprofile}=useContext(DataContext)
    // const [getresponse, setresponse] = useState([]);
    // console.log("GetResponseUserInfo",getresponse)
    // useEffect(() => {
    //     const fetchPosts = async () => {     
    //     if(localStorage.getItem('wallet') === null || localStorage.getItem('wallet') === undefined || localStorage.getItem('wallet') === "" || localStorage.getItem('wallet') === null){
    //     }else{                                        
    //     const res = await axios.get(`${configfile['url']}/userinfo/${localStorage.getItem('wallet')}`)          
    //       setresponse(res.data)          
    //     }
    //     };            
    // fetchPosts();
    // }, []);
    let history=useHistory();    
    //const [proget,setpro] = useState([]);
    const [tname,setName] = useState("");
    const [tpurl,setPurl] = useState("");  
    const [tbio,setBio] = useState("");
    const [turl,setUrl] = useState("");        
    const [tTwitter,setTwitter] = useState("");  
    const [temail,setEmail] = useState("");  
    //const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    //const [showTest, setShowTest] = React.useState(false);
    const [showTestLoading, setshowTestLoading] = React.useState(false);    
    const [show, setShow] = React.useState(false);
    //const handleCloseTest = () => setShow(false);
    //const handleCloseTestLoading =()=> setshowTestLoading(false)
    // const handleShowTest = () => setShowTest(true);
    const [Img,setImg] = useState("")
    const [Imgname,setImgname] = useState("")
    const captureFile =async(event) => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        setImgname(file.name)
        let reader = new window.FileReader()
        try{
        Compress.imageFileResizer(file, 500, 500, 'JPEG', 200, 0,
        uri => {
          console.log("iuri",uri)
          setImg(uri)              
        },
        'base64'
        );
        reader.readAsArrayBuffer(file)
        console.log(reader)    
      }catch (err) {
        //console.error(err);    
        }
      };


      const onSubmitNFT = async (event) => {
        
        if(tname === ""){
            alert("please enter profile name")
        }
        else if(turl === "" ){
            alert("please enter url")
        }
        else if(tTwitter === "" ){
            alert("please enter twitter username")
        }else if(temail === ""){
            alert("please enter gmail")
        }else if(tbio === "" ){
            alert("please enter Bio")
        }
        else if(Img === ""){
            alert("please Upload Image")
        }
        else if(tpurl === ""){
            alert("please enter personal url")
        }
        else if(localStorage.getItem('wallet') === null || localStorage.getItem('wallet') === undefined || localStorage.getItem('wallet') === "" || localStorage.getItem('wallet') === " " ){
            alert("Please Connect Wallet")
            window.location.reload(false)
        }
        else if(getApiDataProfileNFT === null || getApiDataProfileNFT === undefined || getApiDataProfileNFT === "" || getApiDataProfileNFT.algoAddress === null || getApiDataProfileNFT.algoAddress === undefined || getApiDataProfileNFT.algoAddress === "" || getApiDataProfileNFT.length === 0){            
            setshowTestLoading(true)
            var date = new Date();
            let dateset=date.toJSON().slice(0,10).replace(new RegExp("-", 'g'),"/" ).split("/").reverse().join("")+""+date.toJSON().slice(11,9)        

           
            const userjsonkey= {
            "userKey":"",
            "algoAddress":localStorage.getItem('wallet'),
            "creationTime":dateset,
            "accountType":"test",
            "profileName":tname,
            "twitterName":tTwitter,
            "profileURL":tpurl,
            "bio":tbio,
            "profileImagePath":Img,
            "bgvImagePath":"",
            "profileImageAsString":Img,
            "bgvImageAsString": Img,
            "following":[""],
             "followers":[""],
             "validuser":0,            
            }            
            await axios.post(`${configfile['url']}/userinfo`,userjsonkey)
            .then(async(responseuser) => {              
                let activity={
                    "ipAddress": "profile update",
                    "algoAddress": localStorage.getItem('wallet'),
                    "networkType": dateset,
                    "walletType": "image"
                  }
                  axios.post(`${configfile['url']}/visitinfo`,activity)
                  .then(async(responseuser) => {
                    setshowTestLoading(false)  
                    setShow(true)                    
                  })                           
            })
            .catch((e) => {              
              setshowTestLoading(false)                     
            })                                          
        }
        else{
        setshowTestLoading(true)        
        var results = [];
        for (var i = 0, len = getApiDataProfileNFT.followers; i < len; i++)
        {            
            results.push(getApiDataProfileNFT[i]);
        }
        var resultss = [];
        for (var j = 0, lens = getApiDataProfileNFT.following; j < lens; j++)
        {            
            resultss.push(getApiDataProfileNFT[i]);
        }

        var dates = new Date();
        let dateset=dates.toJSON().slice(0,10).replace(new RegExp("-", 'g'),"/" ).split("/").reverse().join("")+""+dates.toJSON().slice(11,9)                
        const userjsonkey= {
                "userKey":"",
                "algoAddress":localStorage.getItem('wallet'),
                "creationTime":dateset,
                "accountType":tpurl,
                "profileName":tname,
                "twitterName":tTwitter,
                "profileURL":turl,
                "bio":tbio,
                "profileImagePath":Img,                
                "bgvImagePath":getApiDataProfileNFT.coverImagePath,
                "profileImageAsString":Img,
                "bgvImageAsString": getApiDataProfileNFT.coverImagePath,
                "following":resultss,
                "followers":results,
                "validuser":0
        }                
        await axios.put(`${configfile['url']}/userinfo`,userjsonkey)
            .then(async(responseuser) => {
              //console.log("uploadeduser",responseuser)   
              let activity={
                "ipAddress": "profile update",
                "algoAddress": localStorage.getItem('wallet').slice(0,50),
                "networkType": dateset,
                "walletType": "image"
              }
              axios.post(`${configfile['url']}/visitinfo`,activity)
              .then(async(responseuser) => {
                setshowTestLoading(false)  
                setShow(true)
              })                                                 
            })
            .catch((e) => {
              //console.log(e);  
              setshowTestLoading(false)                     
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
                            <h1 className='display-4 font-bold mb-3'>Edit profile</h1>
                            <p className='lead'>You can set preferred display name, create your branded profile URL and manage other personal settings</p>
                        </Col>
                    </Row>

                    <Row className='text-gray'>
                        <Col md={4} className='mb-4 order-md-2'>
                            <div className='text-center text-md-start'>
                                {Img === null || Img === undefined || Img === "" ?(
                                <>
                                <img src={icon} alt="icon" className='update-pic mb-3' />
                                <p className='mb-3'>We recommend an image <br />of at least 500x500. Gifs work too.</p>
                                <input type="file" hidden name="upload" id='upload' onChange = {captureFile}/>
                                <label htmlFor="upload" className='btn btn-light-blue'>Choose File</label>
                                </>
                                ):(
                                <>
                                <img src={Img} alt="icon" className='update-pic mb-3' />
                                <p className='mb-3'>Image Uploaded <br />{Imgname}</p>
                                <input type="file" hidden name="upload" id='upload' onChange = {captureFile}/>
                                <label htmlFor="upload" className='btn btn-light-blue'>Choose File</label>
                                </>
                                )}
                                
                            </div>
                        </Col>
                        <Col md={8} className='mb-4'>                                      
                            <div className="mb-4">                        
                                <h3>Display name</h3>
                                <InputGroup className="mb-4 input-group-field" onChange={event => setName( event.target.value)}>
                                    <Form.Control
                                        placeholder='Enter your display name'
                                    />
                                </InputGroup>

                                <h3>Custom URL</h3>    
                                <InputGroup className="mb-4 input-group-field" onChange={event => setUrl( event.target.value)}>
                                    <InputGroup.Text className='ps-0 font-weight-normal'>
                                        element.com/
                                    </InputGroup.Text>
                                    <Form.Control placeholder="Enter your custom URL" />
                                </InputGroup>     

                                <h3>Bio</h3>
                                <InputGroup className="mb-4 input-group-field" onChange={event => setBio( event.target.value)}>
                                    <Form.Control
                                        placeholder='Tell about yourself in a few words'
                                    />
                                </InputGroup>   

                                <h3>Twitter Username</h3>   
                                <p>Link your Twitter account to gain more trust on the marketplace</p> 
                                <InputGroup className="mb-4 input-group-field" onChange={event => setTwitter( event.target.value)}>
                                    <InputGroup.Text className='ps-0 font-weight-normal'>
                                        @
                                    </InputGroup.Text>
                                    <Form.Control placeholder="Enter your name in Twitter" />
                                    {/* <Button variant='reset' className='text-blue'>Link</Button> */}
                                </InputGroup>     

                                <h3>Personal site or portfolio</h3>
                                <InputGroup className="mb-4 input-group-field" onChange={event => setPurl( event.target.value)}>
                                    <Form.Control
                                        placeholder='https://'
                                    />
                                </InputGroup>     

                                <h3>Email</h3>   
                                <p>Your email for marketplace notifications</p> 
                                <InputGroup refs="email" className="mb-5 input-group-field" onChange={event => setEmail( event.target.value)}>
                                    <Form.Control placeholder="Enter your email" />
                                    {/* <Button variant='reset' className='text-blue' disabled>Confirm</Button> */}
                                </InputGroup>     

                                {/* <div className="d-flex">
                                    <div className='pe-3'>
                                        <h3>Verification</h3>   
                                        <p>Proceed with verification process to get more visibility and gain trust on Rarible Marketplace. Please allow up to several weeks for the process.</p> 
                                    </div>
                                    <div>
                                        <Button variant='light-blue'>Get verified</Button>
                                    </div>
                                </div>              */}
                            </div>

                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                <Button variant='primary' size="lg" className='w-100' onClick={()=>{onSubmitNFT()}}>Update profile</Button>
                            </div>
                        </Col>                        
                    </Row>
                </div>
            </Container>



            {/* onHide={handleCloseTestLoading} */}
            <Modal show={showTestLoading} centered size="sm" >
                <Modal.Header  />
                <Modal.Body>
                    <div className="text-center py-4">
                        {/* <h3>Loading...</h3> */}
                        {/* <img src={logogif} alt="loading..." /> */}
                    </div>                    
                </Modal.Body>
            </Modal>

            {/* onHide={handleCloseTest} */}
            <Modal show={show} centered size="sm" >
                <Modal.Header  />
                <Modal.Body>
                    <div className="text-center py-4">
                        <h3>Upload Successfully...</h3>
                    </div>                    
                    <Button variant="primary" size="lg" className='w-100' onClick={()=>done()}>Done</Button>
                </Modal.Body>
            </Modal>
        </Layout>
    );
};

export default Edit;