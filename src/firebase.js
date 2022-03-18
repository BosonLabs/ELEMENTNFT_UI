import firebase from "firebase";
import config from "./config.json"
// const firebaseConfig = {  
  
//   databaseURL: config['firebaseurl'],  
// };
const firebaseConfig = {
  apiKey: "AIzaSyAZBlbVDfnV7CKTtEk_EUjwXYtEG11wMiE",
  //authDomain: "nftmarketplace-7bcb5.firebaseapp.com",
  databaseURL: "https://nftmarketplace-7bcb5-default-rtdb.firebaseio.com",
  //projectId: "nftmarketplace-7bcb5",
  //storageBucket: "nftmarketplace-7bcb5.appspot.com",
  //messagingSenderId: "814546102167",
  //appId: "1:814546102167:web:ae135dc0058e34dff806d2",
  //measurementId: "G-Z6Z5933K60"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb;