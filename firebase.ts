// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0CuwGp4QB3kq8YLDPQMunyqyQlrqwag0",
    authDomain: "usermanagementapp-26978.firebaseapp.com",
    projectId: "usermanagementapp-26978",
    storageBucket: "usermanagementapp-26978.firebasestorage.app",
    messagingSenderId: "1017772076425",
    appId: "1:1017772076425:web:65d12afeb9e819554a4558",
    measurementId: "G-5BNPC1NL4Y"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
