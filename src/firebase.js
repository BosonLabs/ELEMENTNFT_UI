import firebase from "firebase";
import config from "./config.json"
// const firebaseConfig = {  
  
//   databaseURL: config['firebaseurl'],  
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyAZBlbVDfnV7CKTtEk_EUjwXYtEG11wMiE",
//   //authDomain: "nftmarketplace-7bcb5.firebaseapp.com",
//   authDomain: "https://elementnft.vercel.app/",
//   databaseURL: "https://nftmarketplace-7bcb5-default-rtdb.firebaseio.com",
//   //projectId: "nftmarketplace-7bcb5",
//   //storageBucket: "nftmarketplace-7bcb5.appspot.com",
//   //messagingSenderId: "814546102167",
//   //appId: "1:814546102167:web:ae135dc0058e34dff806d2",
//   //measurementId: "G-Z6Z5933K60"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDrd6K6rgiDwbCb-X5ytTKtCiqLXIOk004",
  //authDomain: "testproject-50b11.firebaseapp.com",
  databaseURL: "https://testproject-50b11-default-rtdb.firebaseio.com",
  //projectId: "testproject-50b11",
  //storageBucket: "testproject-50b11.appspot.com",
  //messagingSenderId: "869026201510",
  //appId: "1:869026201510:web:1308437873297656031967",
  //measurementId: "G-D2V5S5FNHV"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb;