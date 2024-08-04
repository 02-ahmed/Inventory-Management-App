// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCisxY6dU1LlS-dvB95YJYy7RO7dF2mfo",
  authDomain: "inventory-management-app-ab9ba.firebaseapp.com",
  projectId: "inventory-management-app-ab9ba",
  storageBucket: "inventory-management-app-ab9ba.appspot.com",
  messagingSenderId: "585523799363",
  appId: "1:585523799363:web:df311771689aa277d9fbf6",
  measurementId: "G-19BPHYQWQZ"
};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


export {firestore}