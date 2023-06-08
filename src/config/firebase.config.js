import {getApp,getApps,initializeApp} from 'firebase/app'
// import {getStorage} from 'firebase/storage';
// import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAmiscOkXKUKVPD_hufCt71E2cNwdWagyU",
    authDomain: "servicely-7b985.firebaseapp.com",
    projectId: "servicely-7b985",
    storageBucket: "servicely-7b985.appspot.com",
    messagingSenderId: "364335253754",
    appId: "1:364335253754:web:be407ad7c236ffa691a143"
  };

  //intialize app in firebase
  const app= getApps.length>0?getApp(): initializeApp(firebaseConfig);
  //if app is already there then use it else intialize the app

  export {app};