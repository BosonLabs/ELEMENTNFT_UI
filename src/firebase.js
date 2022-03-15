//import React,{useEffect} from "react";
import firebase from "firebase";
// import AES from 'crypto-js/aes';
// import Utf8 from 'crypto-js/enc-utf8';
const firebaseConfig = {
  apiKey: "AIzaSyAZBlbVDfnV7CKTtEk_EUjwXYtEG11wMiE",
  authDomain: "nftmarketplace-7bcb5.firebaseapp.com",
  databaseURL: "https://nftmarketplace-7bcb5-default-rtdb.firebaseio.com",
  projectId: "nftmarketplace-7bcb5",
  storageBucket: "nftmarketplace-7bcb5.appspot.com",
  messagingSenderId: "814546102167",
  appId: "1:814546102167:web:ae135dc0058e34dff806d2",
  measurementId: "G-Z6Z5933K60"
};

// const datae="U2FsdGVkX1+fxSOg4JowdRkKWPg8uSEdZLVwZEyclUgLccmY/xDy2OqUqdPjUBnFUV1IpmS92cOyp9Z3e4da7LP1V00KBDy8XSN8lqmv3DE0D7KVSV48DiJoEyZxYrPJ7QXhAKZ1cKoi1HF84atDRCBEK45sDcSZC88vacTmGDyVlI+5QTi1btP2v279r6zJvy5snI5shePlX5Fb9pl9PuY9jG6EmDk9tDvMZZcaZ65Pg1JIYzSG5W1sRnT1NvJ2DkGq1Gp5vN0jfs35ik+ccn17wqzN+7ZbUT58UpfHFmSpJgId9PAHunmr37sTKk2gJTtLSdaoC/arFNVS04nsP8XT39LcPuVKke1Oe9Iu8FRzGjtwb9KdYxIQhTpLTMz6LvXB+3/IoGkcIsjxyHk0JFNkKGPN/Ib/u4TaCGXwX/ozMOT3YCHNQyh1Z0UX4+nvy1UxlxLnZ+JNgVbuQgVUPrbwh6R/XJQz0H551RXa63FeMS7AT3p6IuAWnF9tCKUXsuyzHSZO0Tyq2dQ3XPPaBQ=="
// const datap="boson2020"
// const decryptWithAES = () => {
//   const bytes = AES.decrypt(datae,datap);
//   const originalText = bytes.toString(Utf8);
//   return originalText;
// };

//const firebaseConfig= decryptWithAES();
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb;
//const analytics = getAnalytics(app);
