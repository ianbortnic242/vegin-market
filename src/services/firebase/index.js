// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU4dwy9hXP5ymPnoFk8e4QBXY0wMeF1fI",
  authDomain: "vegin-market.firebaseapp.com",
  projectId: "vegin-market",
  storageBucket: "vegin-market.appspot.com",
  messagingSenderId: "660593078057",
  appId: "1:660593078057:web:957b42aaf9bc49291cd138"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)