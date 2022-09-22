import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyCwmJFXy6r_ypPanfOt6x4Mdt39GV9S6jE",
    authDomain: "journal-app-c3a44.firebaseapp.com",
    projectId: "journal-app-c3a44",
    storageBucket: "journal-app-c3a44.appspot.com",
    messagingSenderId: "173928465866",
    appId: "1:173928465866:web:ed4a258d82b9f8fc41fb33"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);