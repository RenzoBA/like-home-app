import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCKt14DTi9pEf6bcYE31V53hcXgTFMS8I4",
  authDomain: "like-home-app-5ebe6.firebaseapp.com",
  projectId: "like-home-app-5ebe6",
  storageBucket: "like-home-app-5ebe6.appspot.com",
  messagingSenderId: "777781233851",
  appId: "1:777781233851:web:f7e35b993e71bea9e3819e",
  measurementId: "G-11EK2MWM5S",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
