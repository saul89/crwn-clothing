import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";

const config = {
  apiKey: "AIzaSyAxoqozB0XuF9Q8b5anJEBCF_wxLs6Zax8",
  authDomain: "crwn-db-5bb38.firebaseapp.com",
  databaseURL: "https://crwn-db-5bb38.firebaseio.com",
  projectId: "crwn-db-5bb38",
  storageBucket: "crwn-db-5bb38.appspot.com",
  messagingSenderId: "576274866789",
  appId: "1:576274866789:web:aef9b34678618765285c8c",
  measurementId: "G-ES47D7M1J7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
