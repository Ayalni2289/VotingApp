// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHAljlZtU6yVVEQVLd2mB_mIFHZyl1uuQ",
  authDomain: "fir-authvoteapp.firebaseapp.com",
  projectId: "fir-authvoteapp",
  storageBucket: "fir-authvoteapp.firebasestorage.app",
  messagingSenderId: "309092347558",
  appId: "1:309092347558:web:225de2b570a3f6ab24ce67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export both app and auth
export { app, auth };
