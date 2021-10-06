import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBe72vcZxUhr9Bs1PmjJUgUB2CVQmoztcA",
  authDomain: "netflix-clone-622cc.firebaseapp.com",
  projectId: "netflix-clone-622cc",
  storageBucket: "netflix-clone-622cc.appspot.com",
  messagingSenderId: "408661610843",
  appId: "1:408661610843:web:cf7bf9d7124fc9e5ed4a7e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;
