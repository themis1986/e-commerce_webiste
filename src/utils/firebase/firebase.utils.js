import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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
