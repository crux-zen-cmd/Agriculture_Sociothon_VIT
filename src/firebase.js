import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDAhidyhVcX6834uqgWVZm5bwPCXJxlcl0",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "aimandi-837b6.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "aimandi-837b6",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "aimandi-837b6.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "591498763317",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:591498763317:web:a18ca8a5253ca8fe53257c",
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-WT2NNZ74YE",
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://aimandi-837b6-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const firestore = getFirestore(app);


