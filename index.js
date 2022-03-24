//import firebase from '../ELEMENTNFT_UI/src/firebase'
//import Firebase from 'firebase';
//import express from 'express'
const PORT = 9000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
// require("@babel/register")({
//     presets: ["@babel/preset-env"]
//   });
// module.exports = require('../ELEMENTNFT_UI/src/firebase')
//const firebase = require('../ELEMENTNFT_UI/src/firebase')
//const firebase = require('firebase')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/news', (req,res) => {
    res.json('hi')
})

// app.get('/convert', (req,res) => {
//     const toCurrency = req.query.to_currency
//     const fromCurrency = req.query.from_currency


//     const options = {
//         method: 'GET',
//         url: 'https://alpha-vantage.p.rapidapi.com/query',
//         params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
//         headers: {
//             'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
//             'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
//         }
//     }

//     axios.request(options).then((response) => {
//         res.json(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
//     }).catch((error) => {
//         console.error(error)
//     })
// })

// app.get('/', (req,res) => {
//     const options = {
//         method: 'GET',        
//         url: 'https://testproject-50b11-default-rtdb.firebaseio.com/testtable.json/?access_token=AIzaSyDrd6K6rgiDwbCb-X5ytTKtCiqLXIOk004',
//         // headers: {
//         //     // 'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
//         //     'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
//         // }
//     }

//     axios.request(options).then((response) => {
//         res.json(response.data)
//         console.log("serverTest1",response.data)

//     }).catch((error) => {
//         console.error(error)
//     })
// })

app.get('/', (req,res) => {
    // firebase.auth().signInAnonymously().then((response)=>{      
    //     firebase.database().ref("imagerefAlgo").on("value", (data) => {
    //       if (data) {
    //         let a=data.val()                   
    //         console.log("FirstResponse1",a)
    //         Object.keys(a).map(async(k)=>{                                    
    //           console.log("FirstResponse2",a[k])
    //         })            
    //       }
    //     })         
    //   })              

    // const firebaseConfig = {
    //     apiKey: "AIzaSyAZBlbVDfnV7CKTtEk_EUjwXYtEG11wMiE",
    //     //authDomain: "nftmarketplace-7bcb5.firebaseapp.com",
    //     authDomain: "https://elementnft.vercel.app/",
    //     databaseURL: "https://nftmarketplace-7bcb5-default-rtdb.firebaseio.com",
    //     //projectId: "nftmarketplace-7bcb5",
    //     //storageBucket: "nftmarketplace-7bcb5.appspot.com",
    //     //messagingSenderId: "814546102167",
    //     //appId: "1:814546102167:web:ae135dc0058e34dff806d2",
    //     //measurementId: "G-Z6Z5933K60"
    //   };
    //   const fireDb = module.exports.initializeApp(firebaseConfig);
    //   fireDb.auth().signInAnonymously().then((response)=>{      
    //     fireDb.database().ref("imagerefAlgo").on("value", (data) => {
    //       if (data) {
    //         let a=data.val()                   
    //         console.log("FirstResponse1",a)
    //         Object.keys(a).map(async(k)=>{                                    
    //           console.log("FirstResponse2",a[k])
    //         })            
    //       }
    //     })         
    //   })              


      const options = {
        method: 'GET',        
        url: 'https://nftmarketplace-7bcb5-default-rtdb.firebaseio.com/imagerefAlgo.json',
        //headers: {"Authorization" : `Bearer `} 
        // headers: {
        //     // 'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
        //     'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
        // }
    }

    axios.request(options).then((response) => {
        res.json(response.data)
        //console.log("serverTest1",response.data)

    }).catch((error) => {
        console.error(error)
    })
})


app.listen(9000, () => console.log(`Server is running on port ${PORT}`))