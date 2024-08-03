import { getFirestore, getAnalytics } from "firebase/firestore";

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
  const analytics = getAnalytics(app);
  const firestore = getFirestore
  export {firestore};
  export {analytics}