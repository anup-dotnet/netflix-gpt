// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEXXv8XHSSaq14Igl9EtOXRcdD5G-7mI0",
  authDomain: "netflix-gpt-f931e.firebaseapp.com",
  projectId: "netflix-gpt-f931e",
  storageBucket: "netflix-gpt-f931e.appspot.com",
  messagingSenderId: "655222084750",
  appId: "1:655222084750:web:aa9178d2425fd50020a5df",
  measurementId: "G-3BC08308QX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
