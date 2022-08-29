// Import the functions you need from the SDKs you need
import { initializeApp , getApps,getApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7wfNgFj3FixuQudsm6PuferWOIDSnCr0",
  authDomain: "insta-clone-73242.firebaseapp.com",
  projectId: "insta-clone-73242",
  storageBucket: "insta-clone-73242.appspot.com",
  messagingSenderId: "877341030800",
  appId: "1:877341030800:web:e74f300bab59d6e326db15"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore();
const storage=getStorage();
export {app,db,storage};