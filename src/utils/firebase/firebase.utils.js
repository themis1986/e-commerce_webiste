import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNS3CgOQOpO9yvqtrPj2ylykeZvc2ftzM",
  authDomain: "e-commerce-website-d2a7e.firebaseapp.com",
  projectId: "e-commerce-website-d2a7e",
  storageBucket: "e-commerce-website-d2a7e.appspot.com",
  messagingSenderId: "394619870671",
  appId: "1:394619870671:web:8559f496dd4f057b0246ba",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
//   console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
//   console.log(userSnapshot);
//   console.log(userSnapshot.exists());

  //if user data does not exist
  //create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (err) {
      console.log(err.message);
    }
  }
  //if data exists
  //return userDocRef
  return userDocRef;
};
