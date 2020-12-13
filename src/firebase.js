import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCr0XTX9FIGzAVwHRJm-Da8pTtJ4AdIzIM",
    authDomain: "crud-a613a.firebaseapp.com",
    projectId: "crud-a613a",
    storageBucket: "crud-a613a.appspot.com",
    messagingSenderId: "436818619625",
    appId: "1:436818619625:web:3c3302a08553b376f91478"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export { db }
