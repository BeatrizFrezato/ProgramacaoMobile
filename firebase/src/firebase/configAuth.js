import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWnOe5EtlUp7z4KAh-LC_zYgTv1K60Q5g",
  authDomain: "projotemobile.firebaseapp.com",
  projectId: "projotemobile",
  storageBucket: "projotemobile.firebasestorage.app",
  messagingSenderId: "489515439587",
  appId: "1:489515439587:web:7614df1d61ecd47160fcd6"
};


const app = initializeApp(firebaseConfig);
const auth_mod = getAuth(app);

export { auth_mod }