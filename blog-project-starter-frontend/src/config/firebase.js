// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsEv7LLItGG4kaqTAyBM_mtl_mxryOejE",
  authDomain: "blog-app-shiva.firebaseapp.com",
  projectId: "blog-app-shiva",
  storageBucket: "blog-app-shiva.firebasestorage.app",
  messagingSenderId: "972696518308",
  appId: "1:972696518308:web:c4fd27aab3bf50cde93031"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;