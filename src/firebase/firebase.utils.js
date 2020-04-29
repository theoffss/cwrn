import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAXEYHzvbgS2FxMZPm_rsFYXEFW4IK9MtY",
    authDomain: "crw-clothing-441a6.firebaseapp.com",
    databaseURL: "https://crw-clothing-441a6.firebaseio.com",
    projectId: "crw-clothing-441a6",
    storageBucket: "crw-clothing-441a6.appspot.com",
    messagingSenderId: "938504702685",
    appId: "1:938504702685:web:83b43bf55189ca145c6934",
    measurementId: "G-V3BWEYBYV9"
  };

  firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();
 
 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account' });
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;