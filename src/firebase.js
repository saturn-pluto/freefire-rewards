import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_aZ_V361pb8l0fVhORom-1vtrQx2wp1s",
  authDomain: "pripayer-71b72.firebaseapp.com",
  projectId: "pripayer-71b72",
  storageBucket: "pripayer-71b72.firebasestorage.app",
  messagingSenderId: "183538858322",
  appId: "1:183538858322:web:17d994d27f74aa4d3f628b",
  measurementId: "G-JRHGXZHM1K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
