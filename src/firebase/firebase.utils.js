import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBu44VoXajX4YgACy5KhKXHi9aLAtE6MkI",
  authDomain: "shop-cart-db-83b88.firebaseapp.com",
  projectId: "shop-cart-db-83b88",
  storageBucket: "shop-cart-db-83b88.appspot.com",
  messagingSenderId: "834681666845",
  appId: "1:834681666845:web:1d49b7652ef437479775f4",
  measurementId: "G-QW3CQZY7C8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); //we want to triggger always google pop up whenever we use google auth

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
