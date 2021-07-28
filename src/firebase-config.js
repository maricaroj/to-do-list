import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBr8wGSw7eQfc0hX-rQyVXVGffVXg9FBSE",
    authDomain: "lista-tareas-4cddd.firebaseapp.com",
    projectId: "lista-tareas-4cddd",
    storageBucket: "lista-tareas-4cddd.appspot.com",
    messagingSenderId: "704403511717",
    appId: "1:704403511717:web:c18b7b5e5eb1f61e22304c"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();