import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider, getAuth  } from "firebase/auth";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyRywEAhP9JdbSn7YRVsjrLvK2va9wrt8",
  authDomain: "ecommercenew-267d9.firebaseapp.com",
  projectId: "ecommercenew-267d9",
  storageBucket: "ecommercenew-267d9.appspot.com",
  messagingSenderId: "615783044284",
  appId: "1:615783044284:web:46f1146060f0c3db06acb9",
  measurementId: "G-SNRW2D0TJ4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();
