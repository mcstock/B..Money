// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
} from 'firebase/firestore'
import { getStorage, ref } from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEIGxOS47d9rOPmh9KMPghljgCfSOAudc",
  authDomain: "website-3297b.firebaseapp.com",
  databaseURL: "https://website-3297b-default-rtdb.firebaseio.com",
  projectId: "website-3297b",
  storageBucket: "website-3297b.appspot.com",
  messagingSenderId: "625808178037",
  appId: "1:625808178037:web:f55960588ab092b8b9313c",
  measurementId: "G-D67EZ15ZSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export {
  db,
  storage,
  auth
}