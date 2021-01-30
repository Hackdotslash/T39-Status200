//Secret data!
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHC917vxtaIBKzP6CJZGq66_fW1Qo3vQE",
  authDomain: "oecd-6e54a.firebaseapp.com",
  projectId: "oecd-6e54a",
  storageBucket: "oecd-6e54a.appspot.com",
  messagingSenderId: "697205554597",
  appId: "1:697205554597:web:699692f7a9d1ab63033c4c",
  measurementId: "G-WSW3800633",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
