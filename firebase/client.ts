// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqxZYbBdTOPMJeJLnuB4ZKzTxbPowbqMw",
  authDomain: "aceai-aa535.firebaseapp.com",
  projectId: "aceai-aa535",
  storageBucket: "aceai-aa535.firebasestorage.app",
  messagingSenderId: "522497471898",
  appId: "1:522497471898:web:0fa90213e809c0f9e7f623",
  measurementId: "G-S0BREG3C1M",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
