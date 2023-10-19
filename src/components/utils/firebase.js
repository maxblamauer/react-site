
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({

  apiKey: "AIzaSyCQuwi_nHuNj1JO6k0z9FatA4y6FyseAJk",
  authDomain: "react-site-75805.firebaseapp.com",
  projectId: "react-site-75805",
  storageBucket: "react-site-75805.appspot.com",
  messagingSenderId: "504673270218",
  appId: "1:504673270218:web:40820d48ddb60258327733",
  measurementId: "G-PZ9RC7VBZH"

  })

  export const auth = app.auth()
  export default app

  var provider = new firebase.auth.GoogleAuthProvider();

  export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

