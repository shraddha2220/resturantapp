import {getApp , getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyD4m4DbrkcEcLpB14ujK8NCLmZvy1g0cuM",
    authDomain: "restaurantapp-86932.firebaseapp.com",
    databaseURL: "https://restaurantapp-86932-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-86932",
    storageBucket: "restaurantapp-86932.appspot.com",
    messagingSenderId: "355840757591",
    appId: "1:355840757591:web:53abc8eb86a13459fbb812"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app , firestore , storage};