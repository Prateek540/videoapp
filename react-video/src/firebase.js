import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQsgxDtAX4vnqvAgClK__uGZLN-XZFaBM",
  authDomain: "video-e7d4a.firebaseapp.com",
  projectId: "video-e7d4a",
  storageBucket: "video-e7d4a.appspot.com",
  messagingSenderId: "944143528633",
  appId: "1:944143528633:web:de4c4367e9f37221a1a168",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
