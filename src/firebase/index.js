import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBvWoeQcPa6fgqsii_PNi4lBIviWQL291Y",
  authDomain: "fir-auth-5ed78.firebaseapp.com",
  projectId: "fir-auth-5ed78",
  storageBucket: "fir-auth-5ed78.appspot.com",
  messagingSenderId: "424535067003",
  appId: "1:424535067003:web:857639e5295c5dcd1895de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export {auth}