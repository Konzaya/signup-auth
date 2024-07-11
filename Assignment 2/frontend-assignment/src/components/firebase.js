// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7a4E65pMtY6rr1wXCaB_b__4tyuKlFDw",
  authDomain: "frontend-assignment-797e1.firebaseapp.com",
  projectId: "frontend-assignment-797e1",
  storageBucket: "frontend-assignment-797e1.appspot.com",
  messagingSenderId: "867086157159",
  appId: "1:867086157159:web:c851857a8a0a77c1365bc2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
