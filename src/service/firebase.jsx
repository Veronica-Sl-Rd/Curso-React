// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzkYm2IQMpL5GjD0eE02aY2lVhJ-qHhyc",
    authDomain: "versum-react.firebaseapp.com",
    projectId: "versum-react",
    storageBucket: "versum-react.firebasestorage.app",
    messagingSenderId: "972776326660",
    appId: "1:972776326660:web:7a797ca8f60267e268d751"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)