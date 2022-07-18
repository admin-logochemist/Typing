// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkC-KF0rH4iPCyrHm6hcSEd_9NQT5SrUY",
  authDomain: "typingproject-85446.firebaseapp.com",
  projectId: "typingproject-85446",
  storageBucket: "typingproject-85446.appspot.com",
  messagingSenderId: "539170928193",
  appId: "1:539170928193:web:18792e4d6b7187619d38c0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth=getAuth(app);
// Initialize Firebase
export {app,db,storage,auth};