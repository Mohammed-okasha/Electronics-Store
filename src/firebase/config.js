import { initializeApp } from 'firebase/app';
import {
    getDatabase,
    ref
}
from "firebase/database";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQQ_eanaByQ7nDBoZW8v7HbGtQyRulpbo",
    authDomain: "multimart-ecommerce.firebaseapp.com",
    projectId: "multimart-ecommerce",
    storageBucket: "multimart-ecommerce.appspot.com",
    messagingSenderId: "941077240454",
    appId: "1:941077240454:web:5f67a7eef5e1327d1c8f07"
};
//!================================================================
// initialize App
export const app = initializeApp(firebaseConfig);
//!================================================================
// Database Refrence
export const dbRef = ref(getDatabase(app));
//!================================================================
// Auth
export const auth = getAuth(app);
//!================================================================
