import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDJLN6yw-r79QHq9t7ipU-8ZzSXly-cgFY",
  authDomain: "light-weight-for-you.firebaseapp.com",
  projectId: "light-weight-for-you",
  storageBucket: "light-weight-for-you.appspot.com",
  messagingSenderId: "1018068854412",
  appId: "1:1018068854412:web:43ca53c2e59c2fb1ebfda9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { collection, addDoc, getDocs, Timestamp, query, where };
export default app;
