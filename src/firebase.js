import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDIglbi4yGTPKtAXEN0Nwy6ZjVdiixTmAk",
    authDomain: "crud-fe5f5.firebaseapp.com",
    projectId: "crud-fe5f5",
    storageBucket: "crud-fe5f5.appspot.com",
    messagingSenderId: "702251244699",
    appId: "1:702251244699:web:35cc38adc53dc67c45fa3e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export { db };
