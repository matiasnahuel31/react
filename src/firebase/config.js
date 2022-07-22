// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmbqrH8Ax4WIhwMX7P83vskTPl63nfsZA",
  authDomain: "ecommerce-dc46a.firebaseapp.com",
  projectId: "ecommerce-dc46a",
  storageBucket: "ecommerce-dc46a.appspot.com",
  messagingSenderId: "278912049895",
  appId: "1:278912049895:web:7323be6c5b91d794abb842",
  measurementId: "G-43HEMNEGE6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);