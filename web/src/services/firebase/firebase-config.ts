import { initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your_domain>.firebaseapp.com",
  projectId: "<your_domain>",
  storageBucket: "<your_domain>.appspot.com",
  messagingSenderId: "<your-sender-id>",
  appId: "<your-app-id>"
};

export const app =
  getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
