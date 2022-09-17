import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
  const firebaseConfig = {
    apiKey: "AIzaSyCUS6kkkMrHObcG_iHOh0881tuhCg_4sP0",
    authDomain: "disney-plus-422b5.firebaseapp.com",
    projectId: "disney-plus-422b5",
    storageBucket: "disney-plus-422b5.appspot.com",
    messagingSenderId: "82402321964",
    appId: "1:82402321964:web:9ec3337a67f2e1a0809389",
    measurementId: "G-M6CTKE0J4Q"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;