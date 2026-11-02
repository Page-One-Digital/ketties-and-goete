import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWDrUEiZm3IfTJbShyD2QsLZnOFdwo9g",
  authDomain: "ketties-n-goete.firebaseapp.com",
  databaseURL: "https://ketties-n-goete-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ketties-n-goete",
  storageBucket: "ketties-n-goete.appspot.com",
  messagingSenderId: "33272737255",
  appId: "1:33272737255:web:55ca69854bd4001c26142",
  measurementId: "G-RWZ63YNWPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and export it
export const db = getDatabase(app);
