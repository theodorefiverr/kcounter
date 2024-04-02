import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCAHZjMfbrnQFWn3LdQXaukMaSC5BhlhwE",
  authDomain: "ki67-app.firebaseapp.com",
  projectId: "ki67-app",
  storageBucket: "ki67-app.appspot.com",
  messagingSenderId: "56553490214",
  appId: "1:56553490214:web:2dd72d89abe43bd2ad23e7",
  measurementId: "G-E28RR3HLG2"
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

logEvent(analytics, 'page_view', {
  page_path: '/', // dynamically set this based on the user's navigation
});