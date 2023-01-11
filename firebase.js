import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDf9jQ9l2RdAlgBP9ja7Q4s77_sw5ugRbQ",
    authDomain: "concadmic.firebaseapp.com",
    projectId: "concadmic",
    storageBucket: "concadmic.appspot.com",
    messagingSenderId: "1072583770441",
    appId: "1:1072583770441:web:6b1c0383f4088258069a98"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export {auth, db, storage};