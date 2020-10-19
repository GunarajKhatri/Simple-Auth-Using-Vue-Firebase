import "firebase/auth";
import * as firebase from "firebase/app";
var firebaseConfig = {
    apiKey: "AIzaSyDrCLWmJyhpWSJJA7p6Z-C_SrPI_s9PuPU",
    authDomain: "vue-firebase-89718.firebaseapp.com",
    databaseURL: "https://vue-firebase-89718.firebaseio.com",
    projectId: "vue-firebase-89718",
    storageBucket: "vue-firebase-89718.appspot.com",
    messagingSenderId: "447366213570",
    appId: "1:447366213570:web:d81ca6f0708ccd25d3705b",
    measurementId: "G-SMEKQR2RFP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;