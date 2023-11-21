import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth'

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArkZYM28UyBe0ip0nc5rGrY_lNvwFzAos",
  authDomain: "ki67counter.firebaseapp.com",
  projectId: "ki67counter",
  storageBucket: "ki67counter.appspot.com",
  messagingSenderId: "988308834131",
  appId: "1:988308834131:web:82c96f0ac1f415d54343a6",
};

const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)

const storage = getStorage(app);

export { app, storage };
