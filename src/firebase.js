// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL1JulTaqVMXnG92ilkvWYYDeegfvSKcQ",
  authDomain: "clone-33e97.firebaseapp.com",
  projectId: "clone-33e97",
  storageBucket: "clone-33e97.appspot.com",
  messagingSenderId: "560998641366",
  appId: "1:560998641366:web:9297a4141ccd2ddab72377"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);