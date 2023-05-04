// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1OwZlOvJoYMUHInfzEQlo1tCozbTAT0c",
  authDomain: "the-dragon-news-10.firebaseapp.com",
  projectId: "the-dragon-news-10",
  storageBucket: "the-dragon-news-10.appspot.com",
  messagingSenderId: "1073302964110",
  appId: "1:1073302964110:web:9922e84c1e8cd86d5446df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;