import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC38Y7HFE-mm0O8w3f_UpXSN5_yQdhHBlQ",
  authDomain: "react-app-auth-430f0.firebaseapp.com",
  projectId: "react-app-auth-430f0",
  storageBucket: "react-app-auth-430f0.firebasestorage.app",
  messagingSenderId: "109007113157",
  appId: "1:109007113157:web:4fbc755c51fbc0968799ac"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);