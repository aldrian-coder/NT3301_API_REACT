// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAISXHRBI9rO1SQkHJ29ICZWDU0JA_c3gA",
  authDomain: "login-auth-c497d.firebaseapp.com",
  projectId: "login-auth-c497d",
  storageBucket: "login-auth-c497d.appspot.com",
  messagingSenderId: "884820669075",
  appId: "1:884820669075:web:53288e24a04ff69917d366",
  measurementId: "G-4CZLPP7WHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;