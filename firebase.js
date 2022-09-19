import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiFS_ALtvk24luU2FnmbhCW1G_pfcvJ14",
  authDomain: "todo-list-next-js.firebaseapp.com",
  projectId: "todo-list-next-js",
  storageBucket: "todo-list-next-js.appspot.com",
  messagingSenderId: "530952612826",
  appId: "1:530952612826:web:426f4538b3029a2d5e6ee3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
