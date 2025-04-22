// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAhIZ1-l0GdIH5l0adjbBQRvLOYOTUYcSA",
    authDomain: "quasartodolist-56b71.firebaseapp.com",
    projectId: "quasartodolist-56b71",
    storageBucket: "quasartodolist-56b71.firebasestorage.app",
    messagingSenderId: "980481458960",
    appId: "1:980481458960:web:566f253e8786c57e5c5b95"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db;
