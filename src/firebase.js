// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2ZPYfpDPLV6aDfx0ftRcXoJ_dBsztvpQ",
  authDomain: "barberappointments-d3913.firebaseapp.com",
  projectId: "barberappointments-d3913",
  storageBucket: "barberappointments-d3913.appspot.com",
  messagingSenderId: "626154390204",
  appId: "1:626154390204:web:d02aa6a9bcdc63a3e786b9",
  measurementId: "G-6HRL15TK26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);


