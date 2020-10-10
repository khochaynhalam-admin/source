import firebase from "firebase";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore()
export {fb, db};
