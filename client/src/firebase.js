// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-intro.firebaseapp.com",
  projectId: "mern-intro",
  storageBucket: "mern-intro.appspot.com",
  messagingSenderId: "1015814739065",
  appId: "1:1015814739065:web:7d3adce82430af5c32b0a8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);