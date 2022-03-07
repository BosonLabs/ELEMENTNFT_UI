import React,{useState} from 'react';
import {Card, Dropdown, Button, OverlayTrigger, Tooltip,Modal,Form, InputGroup } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

import User from '../../assets/images/dummy-icon.svg';
import Preview from '../../assets/images/preview.jpg';
import EthereumIcon from '../../assets/images/Algo.png'
import configfile from '../../config.json'
import MyAlgoConnect from '@randlabs/myalgo-connect';
//import fireDb from '../../firebase';
import dataescrow from "../../escrow.js";
const myAlgoWallet = new MyAlgoConnect();
const CardLike = (props) => {   
    //console.log("likeprops",props.dataall)   
    return (
        <>
        <h1>{props.Appid}</h1>                
        <Card>  
            <Card.Body className='p-0'>                
                <h1>{props.Appid}</h1>                
            </Card.Body>            
        </Card>
        </>
    );
};

export default CardLike;