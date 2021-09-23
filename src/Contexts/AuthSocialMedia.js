import firebase from "../firebase";
import { AuthProvider } from "./AuthContext";

const socialMediaAuth = (provider) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result)    
      return result.user;
    })
    .catch((er) => {
      return er;
    });
};

export default socialMediaAuth;
