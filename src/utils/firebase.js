// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6aZ5er0YKnTyceOyin-mIV8XaNkmVLK8",
  authDomain: "netflix-gpt-28e66.firebaseapp.com",
  projectId: "netflix-gpt-28e66",
  storageBucket: "netflix-gpt-28e66.appspot.com",
  messagingSenderId: "593375418032",
  appId: "1:593375418032:web:e2edcaebd07eb026134d75",
  measurementId: "G-Y5CFKKRCF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
