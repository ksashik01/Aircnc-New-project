// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// VITE_apiKey=AIzaSyAyUg9usCSfdICxlmAp0qp4OILRBAyaCs8
// VITE_authDomain=aircc-november-project.firebaseapp.com
// VITE_projectId=aircc-november-project
// VITE_storageBucket=aircc-november-project.appspot.com
// VITE_messagingSenderId=609545000920
// VITE_appId=1:609545000920:web:f7e87dd60597e8631344ad