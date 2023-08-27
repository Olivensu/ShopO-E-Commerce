// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzMPqZpnVDSZPDNUA636i4L3bx_396z7s",
    authDomain: "e-commerce-a3c67.firebaseapp.com",
    projectId: "e-commerce-a3c67",
    storageBucket: "e-commerce-a3c67.appspot.com",
    messagingSenderId: "708591125003",
    appId: "1:708591125003:web:91fd323d5a948817203d0e",
    measurementId: "G-WCX0XNX0BD"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;