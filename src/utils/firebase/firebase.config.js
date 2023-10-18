import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC4kfimkLIlpWcxajVTLxFBcHhtoIGpwBk",
  authDomain: "gari-dekhun.firebaseapp.com",
  projectId: "gari-dekhun",
  storageBucket: "gari-dekhun.appspot.com",
  messagingSenderId: "564036970961",
  appId: "1:564036970961:web:f054589d892e82220e18f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
