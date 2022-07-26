import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import { doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyRywEAhP9JdbSn7YRVsjrLvK2va9wrt8",
  authDomain: "ecommercenew-267d9.firebaseapp.com",
  projectId: "ecommercenew-267d9",
  storageBucket: "ecommercenew-267d9.appspot.com",
  messagingSenderId: "615783044284",
  appId: "1:615783044284:web:46f1146060f0c3db06acb9",
  measurementId: "G-SNRW2D0TJ4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, `users/${userAuth.uid}`);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(db, "users", `${userAuth.uid}`), {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error while creating user!");
    }
  }
  return userRef;
};

export const addCollectionAndDocs = async (collectionKey, collectionArray) => {
  if (collectionArray.length == 0) return;
  // array operations
  let newArray = Object.values(collectionArray).map((item) => {
    let { title, items } = item;
    return { title, items };
  });
  // Get a new write batch prevents data loss for complex queries

  newArray.forEach(async (obj) => {
    await addDoc(collection(db, collectionKey), obj);
  });
};

export const updateCollectionFormat = (payload) => {
  const transformedData = payload.docs.map((item) => {
    const { title, items } = item.data();

    return {
      id: item.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });

  return transformedData.reduce((acc, item) => {
    acc[item.title.toLowerCase()] = item;
    return acc;
  }, {});
};

export const provider = new GoogleAuthProvider();
export const auth = getAuth();
