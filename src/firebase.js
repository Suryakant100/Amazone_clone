// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCYF1dtbvLo468XUx6KjDMInE4-zwq310E",
  authDomain: "full-stack-e-clone.firebaseapp.com",
  projectId: "full-stack-e-clone",
  storageBucket: "full-stack-e-clone.appspot.com",
  messagingSenderId: "188741045355",
  appId: "1:188741045355:web:3a69ffd2cac1e60cb3b52e",
  measurementId: "G-Y16JLQ8HTD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth };
