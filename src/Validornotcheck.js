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
                    bgurl:data.val()[k].bgurl
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
    return(
        <>
              <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                      <th>BIO</th>
                        <th>Cus-URL</th>
                        <th>E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                        <th>P-url</th>                        
                        <th>IMAGE</th>
                        {/* <th>ACCOUNT TYPE</th>                         */}
                        <th>STATUS</th>
                        <th>APPROVE</th>
                    </tr>
                </thead>
                <tbody>                
                    {getIPro && getIPro.map(user =>
                    <></>
                        // <tr key={user.userKey}>
                        //     <td>{user.userKey}</td>
                        //     <td>{user.profileName}</td>
                        //     <td>{user.creationTime}</td>
                        //     <td>{user.algoAddress.slice(0,20)}....</td>                            
                        //     <td>{user.profileURL}</td>                            
                        //     <td>{user.twitterName}</td>                            
                        // </tr>
                    )}
                </tbody>
            </table>         
        </>
    )
}
export default Validornotcheck;
