import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDlAM_WGW7wzsrAVMgQt9wj5v7RHjL9OdI",
  authDomain: "smart-notes-hub-fc0ff.firebaseapp.com",
  projectId: "smart-notes-hub-fc0ff",
  storageBucket: "smart-notes-hub-fc0ff.firebasestorage.app",
  messagingSenderId: "415802018229",
  appId: "1:415802018229:web:7b9bcb00a29668bf0531fc",
  measurementId: "G-5MW4Z4FBRV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firestore database export
export const db = getFirestore(app);