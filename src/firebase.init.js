// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCJXFM7WpwzOmsH5D-WOrR2tWQf5wVPSvA",
  authDomain: "react-fire-auth-react-router.firebaseapp.com",
  projectId: "react-fire-auth-react-router",
  storageBucket: "react-fire-auth-react-router.appspot.com",
  messagingSenderId: "882035333595",
  appId: "1:882035333595:web:eb3256ce148c348a14effe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;