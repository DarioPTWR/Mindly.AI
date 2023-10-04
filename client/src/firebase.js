// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB78I-dyNnYeFXW9iukfITzd2-lKELqOw",
  authDomain: "mindly-ai-ccd16.firebaseapp.com",
  projectId: "mindly-ai-ccd16",
  storageBucket: "mindly-ai-ccd16.appspot.com",
  messagingSenderId: "822424859545",
  appId: "1:822424859545:web:40dfa6d9e438117a415908",
  measurementId: "G-9J09PVHVCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);