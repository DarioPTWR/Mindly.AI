// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu0uGseW7iQ3kWM9Rp2bMBHsqv8pAFKgA",
  authDomain: "mindlyai.firebaseapp.com",
  projectId: "mindlyai",
  storageBucket: "mindlyai.appspot.com",
  messagingSenderId: "816880545897",
  appId: "1:816880545897:web:46e77f95c9de0d265232f8",
  measurementId: "G-2WJ5P0EH3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);