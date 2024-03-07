// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bca90.firebaseapp.com",
  projectId: "mern-blog-bca90",
  storageBucket: "mern-blog-bca90.appspot.com",
  messagingSenderId: "27684689029",
  appId: "1:27684689029:web:cb57f62973a41014be85ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);