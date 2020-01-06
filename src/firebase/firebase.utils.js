import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBChJdrleX1kapx4FlFopEH0EpLbip3EIU",
  authDomain: "villa-shop.firebaseapp.com",
  databaseURL: "https://villa-shop.firebaseio.com",
  projectId: "villa-shop",
  storageBucket: "villa-shop.appspot.com",
  messagingSenderId: "181886427259",
  appId: "1:181886427259:web:f8625258ccbdbaf6fa82de",
  measurementId: "G-1G71D8EH2W"
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
        ...additionalData
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
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
