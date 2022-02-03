import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDOmhxCrM50xefyT7nncF0f7UlicUbZzOY",
    authDomain: "note-app-f3d08.firebaseapp.com",
    projectId: "note-app-f3d08",
    storageBucket: "note-app-f3d08.appspot.com",
    messagingSenderId: "663057090012",
    appId: "1:663057090012:web:0a2cb0679abe546de53b19",
    measurementId: "G-VJQ5EZVE81"
  };
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

