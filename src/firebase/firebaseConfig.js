/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
// Importamos la función que inicializa la app de firebase Web ModularAPI
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Objeto de Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCB0CoWp0bY0llJ3l85YN97viF2BljOvsQ",
  authDomain: "curso-react-firebase-app-marq.firebaseapp.com",
  projectId: "curso-react-firebase-app-marq",
  storageBucket: "curso-react-firebase-app-marq.appspot.com",
  messagingSenderId: "599660714419",
  appId: "1:599660714419:web:1b340d44c2c882a93493c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;