import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-T0Z5z8j1O1FvaOSODejYP9iwcaX-1Fg",
  authDomain: "uber-eats-clone-358414.firebaseapp.com",
  projectId: "uber-eats-clone-358414",
  storageBucket: "uber-eats-clone-358414.appspot.com",
  messagingSenderId: "560352792360",
  appId: "1:560352792360:web:46cdb8f72f189ec4630a1d",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
