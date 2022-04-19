// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const App = firebase.initializeApp({
  apiKey: "AIzaSyC8Ma86LHF1uQrq8vuSV0WGniDgO-w63xU",
  authDomain: "petskaro.firebaseapp.com",
  projectId: "petskaro",
  storageBucket: "petskaro.appspot.com",
  messagingSenderId: "283259827907",
  appId: "1:283259827907:web:a1f3789fc83986736d9476",
});

// Initialize Firebase
const db = App.firestore(); 

export { App, db };
