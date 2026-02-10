// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC94vgZgWxn5gNyZIYVLfnD7kFndVaK4PE",
  authDomain: "mentor-connect-3f633.firebaseapp.com",
  projectId: "mentor-connect-3f633",
  storageBucket: "mentor-connect-3f633.firebasestorage.app",
  messagingSenderId: "460800200437",
  appId: "1:460800200437:web:5e8040978a08ab3a69bfbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)

export { auth, db};