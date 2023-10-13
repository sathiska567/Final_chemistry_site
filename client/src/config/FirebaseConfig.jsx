import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDmyEeb7wpU9j0QFSAAkgHC9in8w6PztJA",
  authDomain: "chemistryclass-ebe8a.firebaseapp.com",
  projectId: "chemistryclass-ebe8a",
  storageBucket: "chemistryclass-ebe8a.appspot.com",
  messagingSenderId: "918609206410",
  appId: "1:918609206410:web:02064bd33114120afc6173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth (app)