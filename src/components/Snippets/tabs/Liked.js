import React, { useState,useEffect} from "react";
//import Select from 'react-select';
//import makeAnimated from 'react-select/animated';
import AllIcon from '../../../assets/images/cate-all-icon.svg';
//import {Dropdown, Row, Col, Button} from 'react-bootstrap';
//import Card from '../../Snippets/Card';
// import {
//     Link
//   } from "react-router-dom";
import firebase from '../../../firebase';
//import CardSale from "../CardSale";
import CardLike from "../CardLike";
//const animatedComponents = makeAnimated();

const OnLiked = (data) => {
    //console.log("datalike",data.data)
    const[getImgreffalgo,setgetImgreffalgo]=useState([]);
    //console.log("getImgalgo",getImgreffalgo)
    const dbcallalgo=async()=>{    
        let req = [];
        if(localStorage.getItem("wallet")  === null || localStorage.getItem("wallet")  === "" || localStorage.getItem("wallet")  === " " || localStorage.getItem("wallet") === 'undefined' || localStorage.getItem("wallet") === ''){
        }
        else{
          let getalgo=localStorage.getItem("wallet");              
          firebase.database().ref("dblike").child(getalgo).on("value", (data) => {
            if (data) {
              data.forEach((d) => {                
                let value=d.val();
                req.push(            
                  {
                    Assetid:data.val().Assetid,
                    Imageurl:data.val().Imageurl,
                    NFTPrice:data.val().NFTPrice,
                    keyId:data.val().keyId,
                    NFTName:data.val().NFTName,
                    userSymbol:data.val().userSymbol,
                    Ipfsurl:data.val().Ipfsurl,
                    ownerAddress:data.val().ownerAddress,
                    previousoaddress:data.val().previousoaddress,
                    TimeStamp:data.val().TimeStamp,
                    NFTDescription:data.val().NFTDescription,
                    HistoryAddress:data.val().HistoryAddress,
                    Appid:data.val().Appid,
                    valid:data.val().valid,
                    CreatorAddress:data.val().CreatorAddress,
                    like:data.val().like
                  },          
                )                
              });        
            }
            setgetImgreffalgo(req);
          });                  
        }
        //console.log("acc",getalgo)
    }      
    useEffect(()=>{dbcallalgo()},[])    
    return (
        <div className='mb-4'>            
            <div className="row d-none row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5">                
                <div className="col mb-4" >
                {data.data.map((x, index) => {                
                return(  
                    <>
                    <CardLike dataall={x}
                    />
                    <br/>
                    </>                                                                                          
              )})}                              
                </div>                
            </div>                          
        </div>
    );
};

export default OnLiked;