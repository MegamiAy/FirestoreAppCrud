import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAn3XrenG6CyAmLtoUBygWktKf3jyDS4qU",
  authDomain: "myfire-7ba10.firebaseapp.com",
  projectId: "myfire-7ba10",
  storageBucket: "myfire-7ba10.appspot.com",
  messagingSenderId: "509571394860",
  appId: "1:509571394860:web:b2663982c912ecdc5c9089",
  measurementId: "G-N0CZ3Y03SH",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
