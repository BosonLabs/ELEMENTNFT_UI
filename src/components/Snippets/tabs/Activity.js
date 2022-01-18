import React,{useEffect} from 'react';
import {Row, Col} from 'react-bootstrap'
import {
    Link
  } from "react-router-dom";
import Filter from './filters';
import Activity from '../Activity';
import firebase from '../../../firebase';

const OnSale = ({other,ownersend}) => {
    
    console.log("otherp",other)
    const[getImgreffalgo,setgetImgreffalgo]=React.useState([]);
    console.log("getImgalgo",getImgreffalgo)
    const dbcallalgo=async()=>{
        console.log("inside dbcallalgo function")  
        let req = [];
        if(other === "other" && ownersend !== null){
            firebase.database().ref("activitytable").child(ownersend).on("value", (data) => {
                if (data) {
                  data.forEach((d) => {
                    //console.log("keycheck",d.key)
                    let value=d.val();
                    req.push(            
                      {
                      Assetid:value.Assetid,
                      Imageurl:value.Imageurl,
                      NFTPrice:value.NFTPrice,
                      EscrowAddress:value.EscrowAddress,
                      keyId:value.keyId,
                      NFTName:value.NFTName,
                      userSymbol:value.userSymbol,
                      Ipfsurl:value.Ipfsurl,
                      ownerAddress:value.ownerAddress,
                      previousoaddress:value.previousoaddress,
                      TimeStamp:value.TimeStamp,
                      NFTDescription:value.NFTDescription,
                      HistoryAddress:value.HistoryAddress,
                      Appid:value.Appid,
                      valid:value.valid  
                      }          
                    )                
                  });        
                }
                setgetImgreffalgo(req);
              });                    
        }
        else if(other === "local" && ownersend === null){
            if(localStorage.getItem("wallet")  === null || localStorage.getItem("wallet")  === "" || localStorage.getItem("wallet")  === " " || localStorage.getItem("wallet") === 'undefined' || localStorage.getItem("wallet") === ''){
            }
            else{
              let getalgo=localStorage.getItem("wallet");    
              firebase.database().ref("activitytable").child(getalgo).on("value", (data) => {
                if (data) {
                  data.forEach((d) => {
                    //console.log("keycheck",d.key)
                    let value=d.val();
                    req.push(            
                      {
                      Assetid:value.Assetid,
                      Imageurl:value.Imageurl,
                      NFTPrice:value.NFTPrice,
                      EscrowAddress:value.EscrowAddress,
                      keyId:value.keyId,
                      NFTName:value.NFTName,
                      userSymbol:value.userSymbol,
                      Ipfsurl:value.Ipfsurl,
                      ownerAddress:value.ownerAddress,
                      previousoaddress:value.previousoaddress,
                      TimeStamp:value.TimeStamp,
                      NFTDescription:value.NFTDescription,
                      HistoryAddress:value.HistoryAddress,
                      Appid:value.Appid,
                      valid:value.valid   
                      }          
                    )                
                  });        
                }
                setgetImgreffalgo(req);
              });                  
            }        
        }        
    }      
    useEffect(()=>{dbcallalgo()},[])
    return (
        <div className='mb-4'>
            <Row>
                <Col md="8" lg="9">
                    {/* <div className="no-found d-none py-5 text-center">
                        <h2>Nothing yet</h2>
                        <p className="lead mb-4">Looks like there's still nothing. Activity will <br />be shown here</p>
                        <Link to="/" className='btn btn-primary'>Explore ELEMENT</Link>
                    </div> */}

                    {getImgreffalgo.map((x, index) => {
                                    console.log("xvalue",x)
                                    return(  
                                    <>
                                    <Col md={7}>
                                    <Activity image={x.Imageurl} dataall={x}/>  
                                    </Col>                    
                                    </>
                    )})}
                    {/* <Activity image="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:46386767890875363675912719809176821470837137778525415945768420073840868065291/6bd66461" />
                    <Activity image="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xca0eb7e3991f5c93ff4ed674cd840f9daa8c5911/avatar/QmU4Eh4EXworX2zdQ7EAhd8qMUgXZa8XNcMNusNJ98d7Ug" />
                    <Activity image="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:46386767890875363675912719809176821470837137778525415945768420073840868065291/6bd66461" />
                    <Activity image="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xca0eb7e3991f5c93ff4ed674cd840f9daa8c5911/avatar/QmU4Eh4EXworX2zdQ7EAhd8qMUgXZa8XNcMNusNJ98d7Ug" />
                    <Activity image="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:46386767890875363675912719809176821470837137778525415945768420073840868065291/6bd66461" />
                    <Activity image="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xca0eb7e3991f5c93ff4ed674cd840f9daa8c5911/avatar/QmU4Eh4EXworX2zdQ7EAhd8qMUgXZa8XNcMNusNJ98d7Ug" />
                    <Activity image="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:46386767890875363675912719809176821470837137778525415945768420073840868065291/6bd66461" />
                    <Activity image="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xca0eb7e3991f5c93ff4ed674cd840f9daa8c5911/avatar/QmU4Eh4EXworX2zdQ7EAhd8qMUgXZa8XNcMNusNJ98d7Ug" />
                    <Activity image="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:46386767890875363675912719809176821470837137778525415945768420073840868065291/6bd66461" />
                    <Activity image="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xca0eb7e3991f5c93ff4ed674cd840f9daa8c5911/avatar/QmU4Eh4EXworX2zdQ7EAhd8qMUgXZa8XNcMNusNJ98d7Ug" /> */}
                </Col>
                {/* <Col md="4" lg="3">
                    <Filter />
                </Col> */}
            </Row>
            
        </div>
    );
};

export default OnSale;