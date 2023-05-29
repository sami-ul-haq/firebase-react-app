import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyANyPUnkjMMKON8poco0k2BsT6grqTccgk",
  authDomain: "fiebase-auth-todo.firebaseapp.com",
  projectId: "fiebase-auth-todo",
  storageBucket: "fiebase-auth-todo.appspot.com",
  messagingSenderId: "31600704261",
  appId: "1:31600704261:web:519c53df8f21321500956c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();

export const collectionRef = collection(db , "students");
