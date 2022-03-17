import firebase from "firebase";
import config from "./config.json"
const firebaseConfig = {  
  databaseURL: config['firebaseurl'],  
};
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb;