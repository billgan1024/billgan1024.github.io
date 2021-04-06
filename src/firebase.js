import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyCRxHZ0fUI7KAHMxv_wkzwK43aZ7VJh3js",
    authDomain: "portfolio-65a45.firebaseapp.com",
    projectId: "portfolio-65a45",
    storageBucket: "portfolio-65a45.appspot.com",
    messagingSenderId: "917471481369",
    appId: "1:917471481369:web:ec551368fc28583abc6488",
    measurementId: "G-3T9H2N420D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;