// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7wzzlTkX1neVFGrwme2CQI1bi9UQ1rcs",
  authDomain: "portfolio-react-vite-e8ae4.firebaseapp.com",
  projectId: "portfolio-react-vite-e8ae4",
  storageBucket: "portfolio-react-vite-e8ae4.firebasestorage.app",
  messagingSenderId: "990329480596",
  appId: "1:990329480596:web:42c46fe2e6a663e83c5b81",
};

const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);