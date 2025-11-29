import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjN8DPp0R0dbwIyOL-Q80LwvsIlnm4Pfo",
  authDomain: "yamada-club-f387e.firebaseapp.com",
  projectId: "yamada-club-f387e",
  storageBucket: "yamada-club-f387e.firebasestorage.app",
  messagingSenderId: "191895475806",
  appId: "1:191895475806:web:0cd12ecd883ac0314686cf",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
