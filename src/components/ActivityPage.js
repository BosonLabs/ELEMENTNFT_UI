import React,{useEffect} from 'react';
import Layout from './Layout';
import {Container, Tabs, Tab, Row, Col} from 'react-bootstrap';
import Filter from './Snippets/tabs/filters';
import Activity from './Snippets/Activity';
import {
    Link
  } from "react-router-dom";
import firebase from '../firebase';


function ActivityPage() {
    const[getImgreffalgo,setgetImgreffalgo]=React.useState([]);
    console.log("getImgalgo",getImgreffalgo)
    const dbcallalgo=async()=>{
        console.log("inside dbcallalgo function")  
        let req = [];
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
                  valid:value.valid,
                  CreatorAddress:value.CreatorAddress
                  }          
                )                
              });        
            }
            setgetImgreffalgo(req);
          });                  
        }        
      }      
    useEffect(()=>{dbcallalgo()},[])
    // React.useEffect(() => {
    //     window.scrollTo(0, 0);
    // });

    return (
        <Layout>
            <Container>
                <div className="page-spacer">
                    <div className='h1 w-100 d-flex align-items-center'>
                        Activity
                    </div>

                    <Tabs defaultActiveKey="created" id="profile-tabs" className="mb-4 nav-tabs-start">
                        {/* <Tab eventKey="onSale" title="All">
                            <Row>
                                <Col md={7}>
                                    
                                </Col>
                                <Col md={5}>
                                    <Filter />
                                </Col>
                            </Row>
                        </Tab> */}
                        {/* <Tab eventKey="owned" title="Following">
                            <Row>
                                <Col md={7}>
                                    <div className="no-found py-5p text-center">
                                        <h2>Nothing yet</h2>
                                        <p className="lead mb-4">Looks like there's still nothing. Activity will <br />be shown here</p>
                                        <Link to="/" className='btn btn-primary'>Explore Element</Link>
                                    </div>
                                </Col>                               
                                <Col md={5}>
                                    <Filter />
                                </Col>
                            </Row>
                        </Tab> */}
                        <Tab eventKey="created" title="My activity">
                                   <Row>                                      
                                   {getImgreffalgo.map((x, index) => {
                                    console.log("xvalue",x)
                                    return(  
                                    <>
                                    <Col md={7}>
                                    <Activity image={x.Imageurl} dataall={x}/>  
                                    </Col>                    
                                    </>
                                    )})}                                                        
                             
                             {/* <Col md={5}>
                                    <Filter />
                            </Col> */}
                            </Row>
                        </Tab>
                        {/* <Tab eventKey="activity" title="My bids">
                            <div className="no-found py-5p text-center">
                                <h2>Nothing yet</h2>
                                <p className="lead mb-4">Looks like there's still nothing. Activity will <br />be shown here</p>
                                <Link to="/" className='btn btn-primary'>Explore Element</Link>
                            </div>
                        </Tab> */}
                    </Tabs>
                </div>
            </Container>
        </Layout>
    );
}

export default ActivityPage;