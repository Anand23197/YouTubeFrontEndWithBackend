// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFbaKq5A5WiOhUNJFzy1cpBQxPsdsqMpU",
  authDomain: "video-5f039.firebaseapp.com",
  projectId: "video-5f039",
  storageBucket: "video-5f039.appspot.com",
  messagingSenderId: "220283862681",
  appId: "1:220283862681:web:d02e6363ed017d00a00208"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider();
export default app;