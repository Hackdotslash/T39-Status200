import firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzx8XNn5IZRN8PdybIR5U5cs3853zBbSo",
  authDomain: "ks-classroom-7fd43.firebaseapp.com",
  projectId: "ks-classroom-7fd43",
  storageBucket: "ks-classroom-7fd43.appspot.com",
  messagingSenderId: "512854288037",
  appId: "1:512854288037:web:2d07d75d69915f9d54cf4c",
  measurementId: "G-H7CRRSS3RM",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
