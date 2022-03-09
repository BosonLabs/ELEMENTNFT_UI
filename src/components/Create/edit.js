import React,{useState,useEffect} from 'react';
import Layout from '../Layout';
import {Container, Row, Col, Form, InputGroup, Button, Modal} from 'react-bootstrap';
import icon from '../../assets/images/dummy-icon.svg'
import Compress from "react-image-file-resizer";
import fireDb from '../../firebase';
//import ipfs from "./ipfs";
import { create } from 'ipfs-http-client';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import { useHistory } from "react-router-dom";
import firebase from '../../firebase';
import configfile from '../../config.json'
//import logogif from '../../assets/images/gif1.svg';
import logogif from '../../assets/images/gif4.webp';
const client = create('https://ipfs.infura.io:5001/api/v0')
const algosdk = require('algosdk'); 
const axios = require('axios');



const Edit = () => {
    let tempaddress=localStorage.getItem('wallet').slice(0,5);
    // React.useEffect(() => {
    //     window.scrollTo(0, 0);     
    // });
    const [getresponse, setresponse] = useState([]);
    //console.log("NU2",getresponse)
    useEffect(() => {
        const fetchPosts = async () => {      
            //algoAddress2
            //
          //localStorage.getItem('wallet')
          const res = await axios.get(`${configfile['url']}/userinfo/${tempaddress}`)
          setresponse(res.data)          
        };    
    fetchPosts();
    }, []);
    let history=useHistory();    
    const [proget,setpro] = useState([]);
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
    const handleCloseTest = () => setShow(false);
    const handleCloseTestLoading =()=> setshowTestLoading(false)
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
          //console.log("iuri",uri)
          setImg(uri)          
        },
        'base64'
        );
        reader.readAsArrayBuffer(file)
        //console.log(reader)    
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
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(temail))){
            alert("Please Enter Valid E-mail")
        }
        else if(getresponse[0] === null || getresponse[0] === "" || getresponse[0] === undefined || getresponse === null || getresponse === undefined || getresponse === ""){
        setshowTestLoading(true)                                     
        //setshowTestLoading(false)  
        //setShow(true)
        let ref2=fireDb.database().ref(`userprofile/${localStorage.getItem('wallet')}`);                    
        let dateset=new Date().toDateString();
        ref2.set({
        Imageurl:Img,bgurl:"",
        UserName:tname,Customurl:turl,WalletAddress:localStorage.getItem('wallet'),
        TimeStamp:dateset,Twittername:tTwitter,Personalsiteurl:tpurl,Email:temail,Bio:tbio,valid:""})
        .then(()=>{             
            setshowTestLoading(false)  
            setShow(true)
        }).catch((err) => {                                    
            setshowTestLoading(false)                     
            console.log(err);
        });               
        }
        else{
        setshowTestLoading(true)
        if(fireDb.database().ref(`userprofile/${localStorage.getItem('wallet')}`).orderByCalled_ === false ){
        let ref2=fireDb.database().ref(`userprofile/${localStorage.getItem('wallet')}`);
        let dateset=new Date().toDateString();
        ref2.set({
        Imageurl:Img,bgurl:"",
        UserName:tname,Customurl:turl,WalletAddress:localStorage.getItem('wallet'),
        TimeStamp:dateset,Twittername:tTwitter,Personalsiteurl:tpurl,Email:temail,Bio:tbio,valid:""})
        .then(()=>{             
            setshowTestLoading(false)  
            setShow(true)
        }).catch((err) => {                                    
            setshowTestLoading(false)                     
            console.log(err);
        });   
        }else{                
        let ref2=fireDb.database().ref(`userprofile/${localStorage.getItem('wallet')}`);                    
        let dateset=new Date().toDateString();
        let r=[];
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
        console.log("InData",r)                      
        console.log("bgu",r[0])
        ref2.set({
            Imageurl:Img,bgurl:r[0].bgurl,
            UserName:tname,Customurl:turl,WalletAddress:localStorage.getItem('wallet'),
            TimeStamp:dateset,Twittername:tTwitter,Personalsiteurl:tpurl,Email:temail,Bio:tbio,valid:r[0].valid})
            .then(()=>{             
                setshowTestLoading(false)  
                setShow(true)
            }).catch((err) => {                                    
                setshowTestLoading(false)                     
                console.log(err);
            });   
        }
        setpro(r)
        })
        }                                               
        setshowTestLoading(false)  
        setShow(true)
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