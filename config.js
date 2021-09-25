import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD72U8yzUuqdErvt-zzPy5gSNR0D7uRxj0",
  authDomain: "react-library-fe770.firebaseapp.com",
  projectId: "react-library-fe770",
  storageBucket: "react-library-fe770.appspot.com",
  messagingSenderId: "566210532117",
  appId: "1:566210532117:web:4fec1ae926961b30210f1c",
  measurementId: "G-KCWQWF9NJ8",
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}
