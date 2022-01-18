import React,{useState,useEffect} from "react";
import {
    Link,useLocation
  } from "react-router-dom";
import firebase from './firebase';
const Validornotcheck=()=>{
    const[getIPro,setgetIPro]=useState([""]);
    console.log("getIPro",getIPro) 
    const dbcallPro=async()=>{            
        let r=[];
        try {         
        firebase.database().ref("userprofile").on("value", (data) => {                    
          if (data) {                                            
            Object.keys(data.val()).map(async(k)=>{ 
                console.log("FireView2",data.val()[k])                                       
                r.push({
                    Bio:data.val()[k].Bio,
                    Customurl: data.val()[k].Customurl,
                    Email: data.val()[k].Email,
                    Imageurl:data.val()[k].Imageurl,
                    Personalsiteurl: data.val()[k].Personalsiteurl,
                    TimeStamp: data.val()[k].TimeStamp,
                    Twittername: data.val()[k].Twittername,
                    UserName: data.val()[k].UserName,
                    WalletAddress: data.val()[k].WalletAddress,
                    bgurl:data.val()[k].bgurl,
                    valid:data.val()[k].valid
                  })                    
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

    const dbupdatecall=async(user)=>{
      console.log("userche",user)
      firebase.database().ref("userprofile").child(user.WalletAddress).set({
        Imageurl:user.Imageurl,bgurl:user.bgurl,
        UserName:user.UserName,Customurl:user.Customurl,WalletAddress:user.WalletAddress,
        TimeStamp:user.TimeStamp,Twittername:user.Twittername,Personalsiteurl:user.Personalsiteurl,Email:user.Email,Bio:user.Bio,valid:"validated"
      }).then(()=>{
        alert("Validated")
        window.location.reload(false)        
    })            
        
    }

    return(
        <>
              <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>BIO</th>
                        <th>Cus-URL</th>
                        <th>E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                        <th>P-url</th>                        
                        <th>TimeStamp</th>                        
                        <th>WalletAddress</th>
                        <th>UserName</th>
                        <th>TwitterName</th>                        
                        <th>STATUS</th>
                        <th>APPROVE</th>                        
                    </tr>
                </thead>
                <tbody>                
                    {getIPro && getIPro.map(user =>
                    
                        <tr key={user.Bio}>
                            <td>{user.Bio}</td>                            
                            <td>{user.Customurl}</td>                            
                            <td>{user.Email}</td>
                            <td>{user.Personalsiteurl}</td>                            
                            <td>{user.TimeStamp}</td>    
                            <td>{user.WalletAddress}</td>                                                            
                            <td>{user.UserName}</td>                                                      
                            <td>{user.Twittername}</td>                            
                            <td>{user.valid === null || user.valid === "" ? (
                              <>pending</>                              
                            ):(
                              <>{user.valid}</>                              
                            )}</td>
                            <td style={{cursor:"pointer",styles:"bold",color:"#4a54f1"}} onClick={()=>dbupdatecall(user)}>Approve</td>                            
                        </tr>
                    )}
                </tbody>
            </table>         
        </>
    )
}
export default Validornotcheck;

//user.Bio,user.Customurl,user.Email,user.Personalsiteurl,user.TimeStamp,user.WalletAddress,user.UserName,user.Twittername,user.valid,user.Imageurl,user.bgurl