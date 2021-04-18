
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseConfig } from "./FirebaseConfig";

if (firebase.apps.length === 0) {
    firebase.initializeApp(FirebaseConfig);
}

export const googleSignIn = () => {
    const google = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(google)
        .then((result) => {
            var user = result.user;
            return user;
        }).catch((error) => {
            var errorMessage = error.message;
            return errorMessage;
        });
}

export const signOut = () => {
    return firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}