// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMd8_4lQXxVzXRq_e-8bdeN_GLK3YUzfk",
  authDomain: "vt-shop.firebaseapp.com",
  projectId: "vt-shop",
  storageBucket: "vt-shop.appspot.com",
  messagingSenderId: "980909398814",
  appId: "1:980909398814:web:c0920fd27ef6bde687470f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore(app);

const storage = getStorage(app)

export { auth, db, storage }