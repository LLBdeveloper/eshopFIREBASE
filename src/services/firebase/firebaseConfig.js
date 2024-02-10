import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAXqpCp5g9oAHzTX_9Pm-bUQK5EDxbYHZU",
  authDomain: "eshopreactcoder2.firebaseapp.com",
  projectId: "eshopreactcoder2",
  storageBucket: "eshopreactcoder2.appspot.com",
  messagingSenderId: "681095273375",
  appId: "1:681095273375:web:3b4536cc6bd81d75b9fbaa"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

