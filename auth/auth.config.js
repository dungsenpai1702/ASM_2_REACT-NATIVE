// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// import {} from 'react-native-f' q
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC88ZkGDov555dcO6wPnVk3woA7m4OubRw",
    authDomain: "asm-react-2.firebaseapp.com",
    projectId: "asm-react-2",
    storageBucket: "asm-react-2.appspot.com",
    messagingSenderId: "705229363028",
    appId: "1:705229363028:web:8e818e5ab9c41d5c139ac1",
    measurementId: "G-B8RM4PR5YN"
};
// 


// Initialize Firebase


export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);