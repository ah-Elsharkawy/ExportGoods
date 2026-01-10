import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8Hg9ZtH9h0g8GHICJnM_XLYoG1G5DsII",
  authDomain: "exportgoods.firebaseapp.com",
  projectId: "exportgoods",
  storageBucket: "exportgoods.firebasestorage.app",
  messagingSenderId: "426997039702",
  appId: "1:426997039702:web:3f96277196885a1c80f1f7",
  measurementId: "G-T1K7GV9KPS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);

export default app;
