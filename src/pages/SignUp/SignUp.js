import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjThree } from './Data';

import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import { render } from '@testing-library/react';
import UserProfile from '../../Status';

require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);

function SignUp() {

  const login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        UserProfile.setEmail(user.email)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorMessage);
        // ...
      });
  }
  return (
    <>
      <button onClick={login}>LOGIN </button>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
