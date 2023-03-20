import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC9BcvsVy57VQJ1nx2gI7uUzOrTGcaVS5g",
    authDomain: "my-startup-dfec3.firebaseapp.com",
    projectId: "my-startup-dfec3",
    storageBucket: "gs://my-startup-dfec3.appspot.com",
    messagingSenderId: "674005511056",
    appId: "1:674005511056:web:a753d21a65e6da3fc02115",
    measurementId: "G-ZEC05YR264"
  };
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  export {storage}