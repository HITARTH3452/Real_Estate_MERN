// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyBO1ypo9-iJjHzwBr72gzTvohSGnaKXUoE",
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-b73c4.firebaseapp.com",
  projectId: "real-estate-b73c4",
  storageBucket: "real-estate-b73c4.appspot.com",
  messagingSenderId: "940742577807",
  appId: "1:940742577807:web:03970c7ee01c88a275aafa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
