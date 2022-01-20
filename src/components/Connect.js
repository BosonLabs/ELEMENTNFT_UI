import React,{useState} from 'react';
// import {
//     Link
//   } from "react-router-dom";
// import {Badge} from 'react-bootstrap';

import Banner from '../assets/images/loginBanner2.png';
import MyAlgoConnect from '@randlabs/myalgo-connect';
//import history from './history';
// import {Container, Button, Modal, Toast, Dropdown} from 'react-bootstrap';
import {Button, Modal} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
//import ModalList from "../components/ModalList";
//import FolowStepsList from "../components/FolowStepList";
import ElementIcon from '../assets/images/elementlogo.png'
import firebase from '../firebase';
const myAlgoWallet = new MyAlgoConnect();


function Login() {
    let history=useHistory();
    //const [isListtry, setisListtry] = useState([]);
    //const [isOpenlisttry, setIsOpenlisttry] = useState(false);
    //const [isOpen, setIsOpen] = useState(false);
    //const [addwallet, setaddwallet] = useState(null);
    const [isListtrys, setisListtrys] = useState([]);
    console.log("islock",isListtrys)
    const [show, setShow] = React.useState(false);
    const [showcall, setShowcall] = React.useState(false);
    // const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });

const connect=async()=>{  
  const myAlgoConnect = new MyAlgoConnect();
  const accountswall = await myAlgoWallet.connect();
  const addresseswall = accountswall.map(accountswall => accountswall.address);
  console.log("one",myAlgoConnect)
  console.log("oneacc",addresseswall[0])
  console.log("oneadd",addresseswall) 
  localStorage.setItem('wallet',addresseswall[0])
  //alert("Wallet Connect Successfully")
  //window.location.reload();
  setisListtrys(accountswall)
  //alert(addresseswall[0])
  //history.push("/")
  //window.location.reload();
  //setIsOpenlisttry(true)  
  setShow(true)
}

const setaddwallet=async(a)=>{    
    localStorage.setItem('wallet',a)    
    let logo = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAUDc8RjwyUEZBRlpVUF94yIJ4bm549a+5kcj////////////////////////////////////////////////////bAEMBVVpaeGl464KC6//////////////////////////////////////////////////////////////////////////AABEIAKkBLAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EAC4QAAICAQMDAwIGAwEBAAAAAAABAhEhEjFBA1FhM3GBIjIEEyNCkaFDUrFi4f/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABkRAQEBAQEBAAAAAAAAAAAAAAABESExUf/aAAwDAQACEQMRAD8AlFAMgQoAAAACgCApAABQICgIhRaGAABaCoKBLAtCgmtSTLJaXnYm9wxmgW/AsqAI2LAAWLAAWLAoIQClJZLwBQCXQFFEsAUCxYUAsWAAFhACwAsABQABDcAoEBQAjcrSq13Gt8wQ6XqsgVVUlLSsrhsmv/wXpffIlAHHXFyjhriyxevp+UOj+4zF6J+GZv1VIamqeNmQ1LrKUUgKAAAAAAAAAAAWLGAAsAARg0CKzdC/BoAS8FA2AmSlIAAKEQFVEAAFAgLYwBmDrqmnuYT/AFcGg1fDpP8AVaBmD/VZoFOk6lJEkrQ6b/UaNAqw+uFcmSReifhnSa/cuTM5cKwADTIAABCgCD4LYAgKAAAAgsoAgFCvIUAAAoAAAABYoAAGgAACAAoA5pfqm3uSC/VZprLC1iHrM1Zeml+aHuCs9P1WasnSS/NZWgVJK0b6DU4ODWTNE1PpS1Je5UHgGpfUtS2ZmiACkAAAAACgAAAAIAAAACmAA5FAAGgAIUUAAoUAAruKAoJRaYE+S/IFASHrMsnTZIKuqaa+phU6fqh7sdP1Q07eGA6fqsPdjpquqHFpugBJLUmjVPsRxfYIz0JZcH8GmqdHLqJ9OanR6HU4qcSqwBTQ0siIC6S0BkGtPsSsgQFoV7AQFaYSwBAWhRRpJUNK7FoBUpdty6UOQBKS4LS7FAEpCl2GC0BKQ0oPwAFIDcUAFcjgUBMgtDIGF6xt7mF6puW5BmPrGndmV6yNPdgYXrG29zH+ZG3uwFk1DYqaKMdRKcHH+Cfhp09D2OmOxymtM9S5yB2kqZDSeuBn5AfBALILkhSFAewADgUCAANygVAUyAaslkryWsALFjSKAXZLLQSAXYFeRQEF2aoUBkWWgBPgX4G5JzXTWf4QGf8AKjo92eb89a1JxdHoU1NaosYIvVRqS+pmf8qNy3ZBz26qNv7jD9WJuW4CvJKLgXkolWSUbj/w0AMdGVOjpJZtbM4TTUrrHc7wlqiBKfIqlkckvyBaDsWu435Al2CsfwBK8CigCAu4AYwLIKAoJRaAXjdC3QoUA+QKKBAUAZuijbYewDgDcAZnJQi28nklNydt5Z2/FPEVZzl0XFK2sq1RYjlZvpTcZ4fuF09S+l262MqLbxuUeuU6kp7o6W3msM8cZTW2fB2/Dynp0OL8OiYa23fUizo9zElTibf3GVSsEd8F4BRMjID3wBmcdcaZnpTUZVwdMnLq9N3qXyB3ec8kM9Kdqnualh7+wAEryKzdgUBEAoIALYtAleAA+QTAFsWS0LQFTHyS0LVgUNk1Ial3AtiyNx7jUgNWPYzqRbT8gWxZlyrhjX4/oDl+KVxT7M4p2qfB6ZNTi008+DySThKmixG7qVq0Wf1/UsSW9f8ATEpJ5jhdhbtSRRpV1N2oy78M79FOMa001/ZwcVPNpP8ApnWOuKSyKOjf232r/huTeoxJO1vRtvODKpb7BukLfYNvsAvyNyW62Ga4/kC5GexE2M9v7AxKLi7Wx1i9ca5MXLsRKcZXFJJgbaaGRl/c8l+QJtyLDinh5CSSAnIsuBi6YETtFFLuMMDTSe1MjxxREqLlvNMCfIs1Ud7oy15AX3F+wob8ogX7CxS7hLyAuuxbQaRK8lC/DI5vsy15FLuBHOX+rJrl/q/5NYGEgMa5f6f2ZmtazD5s3t/9KnjYDyvoTTxkq6Uk/c9GGORpjh+TJ9kdIwp5e2xsWNMVMPAvwT4ICZUZaTd0NgrXwDNl4AoM58otvgC5Jsi2yXgIZLkEVgLeRmslsX4AmRkNuuRbS2YD6h9fcWT3CtBMq+0nYIAq+4j2KGwywti8IgIcZQRXsBCKyoLdgH7EK90AMjgr3RnkKu5cEXJANY25BzfJoClVEWwewC+EW0QoB1Wwqwi8gZotDuOAFMtAchEa5FcGuCcgSgUcARpjIXI/cBGnwR2aQ4Cs5LfgvAQH/9k='
    try {                    
    firebase.database().ref("userprofile").orderByChild("WalletAddress").equalTo(a).once("value").then(snapshot =>{
        let r=[];
        if(snapshot.val()){            
             console.log("firstaddress1  ",snapshot.val()[a])
                    r.push({
                  Bio:snapshot.val()[a].Bio,
                  Customurl: snapshot.val()[a].Customurl,
                  Email: snapshot.val()[a].Email,
                  Imageurl:snapshot.val()[a].Imageurl,
                  Personalsiteurl: snapshot.val()[a].Personalsiteurl,
                  TimeStamp: snapshot.val()[a].TimeStamp,
                  Twittername: snapshot.val()[a].Twittername,
                  UserName: snapshot.val()[a].UserName,
                  WalletAddress: snapshot.val()[a].WalletAddress,
                  bgurl:snapshot.val()[a].bgurl,
                  valid:snapshot.val()[a].valid
                })                                                
                console.log("InData",r)        
                firebase.database().ref("userprofile").child(a).update({
                Imageurl:r[0].Bio,bgurl:r[0].bgurl,
                UserName:r[0].UserName,Customurl:r[0].Customurl,WalletAddress:a,
                TimeStamp:r[0].TimeStamp,Twittername:r[0].Twittername,Personalsiteurl:r[0].Personalsiteurl,Email:r[0].Email,Bio:r[0].Bio,valid:r[0].valid
                }).then(()=>{
                setShow(false)
                setShowcall(true)    
                })                  
        }
        else{
            console.log("firstaddress",snapshot.val())
            firebase.database().ref("userprofile").child(a).set({
            Imageurl:logo,bgurl:logo,
            UserName:"",Customurl:"",WalletAddress:a,
            TimeStamp:"",Twittername:"",Personalsiteurl:"",Email:"",Bio:"",valid:""
            }).then(()=>{
            setShow(false)
            setShowcall(true)    
            })    
        }
    })
    //)
    // if(firebase.database().ref("userprofile").child(a).orderByCalled_ === false){ 
    //  firebase.database().ref("userprofile").child(a).set({
    //         Imageurl:logo,bgurl:logo,
    //         UserName:"",Customurl:"",WalletAddress:a,
    //         TimeStamp:"",Twittername:"",Personalsiteurl:"",Email:"",Bio:"",valid:""
    //     }).then(()=>{
    //         setShow(false)
    //         setShowcall(true)    
    //     })    
    // }else{
    //     let r=[];
    //     firebase.database().ref("userprofile").child(a).on("value", (data) => {          
    //         if (data) {                      
    //             r.push({
    //               Bio:data.val().Bio,
    //               Customurl: data.val().Customurl,
    //               Email: data.val().Email,
    //               Imageurl:data.val().Imageurl,
    //               Personalsiteurl: data.val().Personalsiteurl,
    //               TimeStamp: data.val().TimeStamp,
    //               Twittername: data.val().Twittername,
    //               UserName: data.val().UserName,
    //               WalletAddress: data.val().WalletAddress,
    //               bgurl:data.val().bgurl,
    //               valid:data.val().valid
    //             })                                                
    //         console.log("InData",r)                      
    //         firebase.database().ref("userprofile").child(a).update({
    //             Imageurl:r[0].Bio,bgurl:r[0].bgurl,
    //             UserName:r[0].UserName,Customurl:r[0].Customurl,WalletAddress:a,
    //             TimeStamp:r[0].TimeStamp,Twittername:r[0].Twittername,Personalsiteurl:r[0].Personalsiteurl,Email:r[0].Email,Bio:r[0].Bio,valid:r[0].valid
    //         }).then(()=>{
    //             setShow(false)
    //             setShowcall(true)    
    //         })    
    //         }              
    //     })        
    // }    
    } catch (error) {
        
        alert("no data")
    }
    //history.push("/")
    //window.location.reload();    
}

const oncloseAll=async()=>{
    setShowcall(false)
    history.push("/profile")
    window.location.reload(false);    
}

    return (
       <div className="login-view d-flex flex-column">
           <img src={Banner} className='login-image d-none d-md-block' alt="banner" />
           <div className="login-header">
                {/* <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="8" fill="#FEDA03"></rect>
                    <path d="M27.6007 19.8536C28.8607 19.5262 29.9817 18.5838 29.9817 16.6889C29.9817 13.5342 27.3031 12.8 23.8706 12.8H10.2V27.0064H15.9539V22.185H22.7793C23.8309 22.185 24.446 22.6016 24.446 23.6334V27.0064H30.2V23.4548C30.2 21.5203 29.1087 20.3 27.6007 19.8536ZM22.8785 18.3556H15.9539V16.9667H22.8785C23.6325 16.9667 24.0888 17.0659 24.0888 17.6612C24.0888 18.2564 23.6325 18.3556 22.8785 18.3556Z" fill="black">
                    </path>
                    </svg> */}
                    <img src={ElementIcon} alt="elementlogo" width={"40px"} height={"40px"}/>
           </div>
           <div className="login-middle my-md-auto mb-auto">
                <h1>Sign in with your wallet</h1>
                {/* <h6>Sign in with one of available wallet providers or create a new wallet. <Link to="/">What is a wallet?</Link></h6> */}
                <div className="py-4">
                    {/* <Link to="/" className='mb-3 btn btn-login'>
                        <img src="https://rarible.com/6eb10dd4202620a6d06e.svg" alt="icon" />
                        <span>Torus</span>
                    </Link> */}
                    {/* <Link to="/" className='mb-3 btn btn-login'>
                        <img src="https://rarible.com/970342d3c19a87a56dba.svg" alt="icon" />
                        <span>Beacon</span>

                        <Badge bg="primary"><img src="https://rarible.com/61c387f0aceb9f1a4028.svg" alt="icon" /> Tezos</Badge>
                    </Link> */}
                    {/* <Link to="/" className='mb-3 btn btn-login'>
                        <img src="https://rarible.com/945cf4b0cd1feed1f9f0.svg" alt="icon" />
                        <span>Blocto</span>
                        <Badge bg="success"><img src="https://rarible.com/3f5633921f56ebd660bd.svg" alt="icon" /> Flow</Badge>
                    </Link>
                    <Link to="/" className='mb-3 btn btn-login'>
                        <img src="https://rarible.com/46e9de883ee51bb6239f.png" alt="icon" />
                        <span>Mobile Wallet</span>
                    </Link>
                    <Link to="/" className='mb-3 btn btn-login btn-login-eq'>
                        <span>Show more options</span>
                    </Link> */}                    
                    <Button className='mb-3 btn btn-login' onClick={()=>connect()}>
                        <img src="https://rarible.com/970342d3c19a87a56dba.svg" alt="icon" />
                        <span>MyAlgo Wallet</span>
                        {/* <Badge bg="primary"><img src="https://rarible.com/61c387f0aceb9f1a4028.svg" alt="icon" /> Tezos</Badge> */}
                    </Button>
                </div>
                
           </div>           
           {/* onHide={handleClose} */}
<Modal show={show} size="sm" className="modal-reset" centered >
                <Modal.Header >
                <Modal.Title>SELECT ADDRESS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {isListtrys.map((x) => (
                    // <h6 style={{cursor:"pointer",color:bgcolor}} onClick={()=>boxClick()}>{x.address}</h6>))}               
                    <>
                    <h6 style={{cursor:"pointer"}} onClick={()=>{(setaddwallet(x.address))                     
                    }}>{x.address.slice(0,15)}....{x.address.slice(45,58)}</h6>                     
                    </>
                    ))}          
                </Modal.Body>
</Modal>     

<Modal show={showcall} size="sm" className="modal-reset" centered>
<Modal.Header >
<h5>ALGOWALLET CONNECTED SUCCESSFULLY</h5>
</Modal.Header>
    <Modal.Body>    
    <Button variant="white" className='w-100' size={'lg'} onClick={()=>{oncloseAll()}}>
    OK
    </Button>
</Modal.Body>
</Modal>        
       </div> 
    );
}

export default Login;

// localStorage.setItem("wallet",x.address)                    