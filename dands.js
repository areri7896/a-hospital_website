import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyATYDhTzQUCuz46Pu3ledwICGe9J-I8u4w",
    authDomain: "a-hospital-website.firebaseapp.com",
    projectId: "a-hospital-website",
    storageBucket: "a-hospital-website.appspot.com",
    messagingSenderId: "17198961804",
    appId: "1:17198961804:web:eb568fd979fce262d497a9",
    measurementId: "G-FH90XBSB7S"
  };

//initialize firebase and firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db};

import{db} from"https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import{collection,addDoc,Timestamp} from 'firebase/firestore'

// function to add new drug to firestore
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "drug"), {
        title: title,
        number: number,
        description: description,
        completed: false,
        created: Timestamp.now(),
      });
    } catch (err) {
      alert(err);
    }
  };
  