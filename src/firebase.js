import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMYwoT1vXVP3f__2qMvYsQ3PC6A1d00pg",
  authDomain: "testproduct-5e377.firebaseapp.com",
  projectId: "testproduct-5e377",
  storageBucket: "testproduct-5e377.appspot.com",
  messagingSenderId: "471957770697",
  appId: "1:471957770697:web:a6fb0b2a4c7aaf379b5818",
};

const app = initializeApp(firebaseConfig);
export const srorage = getStorage();
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
