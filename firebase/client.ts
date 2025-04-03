// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDRqYqonIWDqoUTdxDwkT1gyXHnw9oOIU0",
  authDomain: "prepwise-59ccc.firebaseapp.com",
  projectId: "prepwise-59ccc",
  storageBucket: "prepwise-59ccc.firebasestorage.app",
  messagingSenderId: "2832752067",
  appId: "1:2832752067:web:9798d8d8a434147f337176",
  measurementId: "G-FV3ZV7Z39N"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)