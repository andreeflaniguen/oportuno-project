import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCBf-s9WbhK8bSk0g7q568BXgPY5sQmEKg",
  authDomain: "oportuno-project.firebaseapp.com",
  projectId: "oportuno-project",
  storageBucket: "oportuno-project.appspot.com",
  messagingSenderId: "196841915185",
  appId: "1:196841915185:web:6b15ffebb54f192a466610"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)