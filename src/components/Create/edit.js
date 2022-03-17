import React,{useState,useEffect, useContext} from 'react';
import Layout from '../Layout';
import {Container, Row, Col, Form, InputGroup, Button, Modal} from 'react-bootstrap';
import icon from '../../assets/images/dummy-icon.svg'
import Compress from "react-image-file-resizer";
import fireDb from '../../firebase';
//import ipfs from "./ipfs";
//import { create } from 'ipfs-http-client';
//import MyAlgoConnect from '@randlabs/myalgo-connect';
import { useHistory } from "react-router-dom";
import firebase from '../../firebase';
//import configfile from '../../config.json'
import { DataContext } from '../../Context/DataContext';
//const axios = require('axios');

const Edit = () => {
const{getIPro2}=useContext(DataContext)
const [showTestAlert,setshowTestAlert] = React.useState(false);   
const [issuesdisplay,setissuesdisplay]=useState(null)    
let history=useHistory();        
const [tname,setName] = useState("");
const [tpurl,setPurl] = useState("");  
const [tbio,setBio] = useState("");
const [turl,setUrl] = useState("");        
const [tTwitter,setTwitter] = useState("");  
const [temail,setEmail] = useState("");      
const [showTestLoading, setshowTestLoading] = React.useState(false);    
const [show, setShow] = React.useState(false);    
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
        setImg(uri)          
    },
    'base64'
    );
    reader.readAsArrayBuffer(file)        
    }catch (err) {      
    }
};

const onSubmitNFT = async (event) => {        
if(tname === ""){
    setissuesdisplay("please enter profile name")
    setshowTestAlert(true)                                  
}        
else if(tTwitter === "" ){
    setissuesdisplay("please enter twitter username")
    setshowTestAlert(true)                                  
}else if(temail === ""){
    setissuesdisplay("please enter gmail")
    setshowTestAlert(true)                                  
}else if(tbio === "" ){
    setissuesdisplay("please enter Bio")
    setshowTestAlert(true)                                  
}
else if(Img === ""){
    setissuesdisplay("please Upload Image")
    setshowTestAlert(true)                               
}
else if(tpurl === ""){
    setissuesdisplay("please enter personal url")
    setshowTestAlert(true)                      
}
else if(localStorage.getItem('wallet') === null || localStorage.getItem('wallet') === undefined || localStorage.getItem('wallet') === "" || localStorage.getItem('wallet') === " " ){
    setissuesdisplay("Please Connect Wallet")
    setshowTestAlert(true)                                  
}
else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(temail))){
    setissuesdisplay("Please Enter Valid E-mail")
    setshowTestAlert(true)                                  
}
else if(getIPro2[0] === null || getIPro2[0] === "" || getIPro2[0] === undefined || getIPro2 === null || getIPro2 === undefined || getIPro2 === ""){                    
setshowTestLoading(true)                                             
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
    setissuesdisplay("your browser appearing issue")
    setshowTestAlert(true)                      
    console.log(err);
});               
}
else{
setshowTestLoading(true)        
if(getIPro2[0].bgurl === null || getIPro2[0].bgurl === undefined || getIPro2[0].bgurl === ""){
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
})
}                                                       
}    
}
      const done=()=>{
        history.push("/profile")
        window.location.reload(false);    
      }

    const refreshSale=()=>{
        setshowTestAlert(false)        
    }
    
return (
    <Layout>
        <Container fluid="md">
            <div className="py-md-0 py-4">                    
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
                    <h3>Upload completed Successfully...</h3>
                </div>                    
                <Button variant="primary" size="lg" className='w-100' onClick={()=>done()}>Done</Button>
            </Modal.Body>
        </Modal>
        <Modal show={showTestAlert} centered size="sm" >
            <Modal.Header  />
            <Modal.Body>
                <div className="text-center py-4">
                    <h3>{issuesdisplay}</h3>  
                </div>                    
                <Button variant="primary" size="lg" className='w-100' onClick={()=>refreshSale()}>Ok</Button>
            </Modal.Body>
        </Modal>         
    </Layout>
);
};
export default Edit;