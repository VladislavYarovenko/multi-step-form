import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDctnXu15SJ3EIbViKsxamron_YjDHnKfQ",
  authDomain: "multi-step-form-75ef2.firebaseapp.com",
  databaseURL: "https://multi-step-form-75ef2-default-rtdb.firebaseio.com",
  projectId: "multi-step-form-75ef2",
  storageBucket: "multi-step-form-75ef2.appspot.com",
  messagingSenderId: "863338747932",
  appId: "1:863338747932:web:f1fa2ecb3a0f4bbb2967d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;