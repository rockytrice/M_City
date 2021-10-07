import "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "m-city-4469c.firebaseapp.com",
  databaseURL: "https://m-city-4469c.firebaseio.com",
  projectId: "m-city-4469c",
  storageBucket: "m-city-4469c.appspot.com",
  messagingSenderId: "228784706500",
  appId: "1:228784706500:web:115ef6f2a5e5f00602ca91",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export { firebase };
