import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCggrAu8oJt-wPezAbx-77ehzeY57MoPIM",
  authDomain: "credisure-ec0a5.firebaseapp.com",
  projectId: "credisure-ec0a5",
  appId: "1:289970738130:web:c359a9a943fa6df0902e0b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
