import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "like-home-app-5ebe6.firebaseapp.com",
  projectId: "like-home-app-5ebe6",
  storageBucket: "like-home-app-5ebe6.appspot.com",
  messagingSenderId: "777781233851",
  appId: process.env.NEXT_PUBLIC_FIREBASE_API_ID,
  measurementId: "G-11EK2MWM5S",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
