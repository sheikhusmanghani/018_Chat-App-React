import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useState } from "react";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// authentication
const auth = getAuth(app);
// database
const db = getFirestore(app);

//------------------------------------ add user in firestore  ------------------------------------
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log("user signed in", user);
  //   } else {
  //     console.log("user signed out");
  //   }
  // });
  //  ----------------------------- add user in firestore  ------------------------------------
 

export { auth, db };
