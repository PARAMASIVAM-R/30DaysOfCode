// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTUyfDjJgwxxa0QKk51OYLwyoLiKNge3M",
  authDomain: "notes-d8498.firebaseapp.com",
  projectId: "notes-d8498",
  storageBucket: "notes-d8498.firebasestorage.app",
  messagingSenderId: "895786308729",
  appId: "1:895786308729:web:6285fe616549d55fe530a8",
  measurementId: "G-J731CB5XR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};