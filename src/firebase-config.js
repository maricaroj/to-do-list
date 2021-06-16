import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCl_Iddqor5zwXBLwZ1-DJGDv5O9tHhCHE",
    authDomain: "to-do-list-b40b5.firebaseapp.com",
    projectId: "to-do-list-b40b5",
    storageBucket: "to-do-list-b40b5.appspot.com",
    messagingSenderId: "318093837478",
    appId: "1:318093837478:web:8422cd166e161f6d926067"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();