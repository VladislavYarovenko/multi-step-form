import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDctnXu15SJ3EIbViKsxamron_YjDHnKfQ",
  authDomain: "multi-step-form-75ef2.firebaseapp.com",
  projectId: "multi-step-form-75ef2",
  databaseURL: "https://multi-step-form-75ef2-default-rtdb.firebaseio.com/",
  storageBucket: "multi-step-form-75ef2.appspot.com",
  messagingSenderId: "863338747932",
  appId: "1:863338747932:web:f1fa2ecb3a0f4bbb2967d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;