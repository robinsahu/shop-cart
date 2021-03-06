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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); //we want to triggger always google pop up whenever we use google auth

export const signInWithGmail = () => {
  auth
    .signInWithPopup(provider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default firebase;
