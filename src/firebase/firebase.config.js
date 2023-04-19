// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAn27Db67Qd_JWTLM5r2elZ2T7wmzuAnY",
  authDomain: "ema-jon-with-firebase-c03a4.firebaseapp.com",
  projectId: "ema-jon-with-firebase-c03a4",
  storageBucket: "ema-jon-with-firebase-c03a4.appspot.com",
  messagingSenderId: "1055784334882",
  appId: "1:1055784334882:web:c510e5ef666c0f24f9fc7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;