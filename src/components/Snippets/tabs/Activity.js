import React,{useEffect} from 'react';
import {Row, Col} from 'react-bootstrap'
import {
    Link
  } from "react-router-dom";
import Filter from './filters';
import Activity from '../Activity';
//import firebase from '../../../firebase';
import configfile from '../../../config.json'
const axios = require('axios');

const OnSale = ({other,ownersend,datas}) => {
    
    console.log("otherpActivity",datas)
    const[getImgreffalgo,setgetImgreffalgo]=React.useState([]);
    console.log("getDataActivityOther",getImgreffalgo)
    const[getImgreffalgo2,setgetImgreffalgo2]=React.useState([]);
    console.log("getDataActivityOther2",getImgreffalgo2)
    const dbcallalgo=async()=>{
        //console.log("inside dbcallalgo function")          
        if(other === "other" && ownersend !== null){  
          console.log("First",ownersend)          
          const res = await axios.get(`${configfile['url']}/visitinfo/${ownersend}`)
          setgetImgreffalgo(res.data)                                 
        }
        else if(other === "local" && ownersend === null){
          console.log("Second",ownersend)          
            if(localStorage.getItem("wallet")  === null || localStorage.getItem("wallet")  === "" || localStorage.getItem("wallet")  === " " || localStorage.getItem("wallet") === 'undefined' || localStorage.getItem("wallet") === ''){
            }
            else{
              const res = await axios.get(`${configfile['url']}/visitinfo/${localStorage.getItem('wallet')}`)
              setgetImgreffalgo2(res.data)                                 
            }        
        }        
    }      
    useEffect(()=>{dbcallalgo()},[])
    return (
        <div className='mb-4'>
          {getImgreffalgo === null || getImgreffalgo === "" || getImgreffalgo === undefined ? (
            <div className="no-found py-5p text-center">
                        <h2>Nothing to look at</h2>
                        <p className="lead mb-4">Subscribe to authors and come back to see <br />NFTs from your favorite artists</p>
                        <Link to="/profile" className='btn btn-primary'>Browse marketplace</Link>
            </div>
           ):(
             
            <Row>
                <Col md="8" lg="9">
                    {/* <div className="no-found d-none py-5 text-center">
                        <h2>Nothing yet</h2>
                        <p className="lead mb-4">Looks like there's still nothing. Activity will <br />be shown here</p>
                        <Link to="/" className='btn btn-primary'>Explore ELEMENT</Link>
                    </div> */}
          
          {getImgreffalgo.map((x, index) => {
                                    // console.log("xvalue",x)
                                    return(  
                                    <>
                                    <Col md={7}>
                                    <Activity image={x.ipAddress} dataall={x} ActivityData={x}/>  
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
          )}
        </div>
    );
};

export default OnSale;