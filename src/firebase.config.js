import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXuFgx1-Smjibhsur9vBAxb55YsFwywJA",
  authDomain: "home-marketplace-app-95e79.firebaseapp.com",
  projectId: "home-marketplace-app-95e79",
  storageBucket: "home-marketplace-app-95e79.appspot.com",
  messagingSenderId: "314425422985",
  appId: "1:314425422985:web:0fc04ace99f2c0ecf74258"
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()