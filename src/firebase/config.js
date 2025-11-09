import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTxhvKFAu6ScaawI2od5EQness1XdYkfQ",
  authDomain: "experiment-cb211.firebaseapp.com",
  projectId: "experiment-cb211",
  storageBucket: "experiment-cb211.firebasestorage.app",
  messagingSenderId: "628634873457",
  appId: "1:628634873457:web:7f0375f48b31cd685e35d0",
  measurementId: "G-K91FDKDJ3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
