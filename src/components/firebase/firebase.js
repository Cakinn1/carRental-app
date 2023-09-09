// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlGnPl4kS5D4vqUeGOfpR86U2vaDYtqM8",
  authDomain: "todolist-15b64.firebaseapp.com",
  projectId: "todolist-15b64",
  storageBucket: "todolist-15b64.appspot.com",
  messagingSenderId: "624183435149",
  appId: "1:624183435149:web:5bd123f50ee1996be767c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
