// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_vcxAx2ct6nXoR_SlVZvYTuyHY9ISakQ",
  authDomain: "netflix-ver2.firebaseapp.com",
  projectId: "netflix-ver2",
  storageBucket: "netflix-ver2.appspot.com",
  messagingSenderId: "386546771999",
  appId: "1:386546771999:web:72cca007c9eac3b67e4d2a",
  measurementId: "G-CT9Y2VK30G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const analytics = getAnalytics(app);
export {db, auth}