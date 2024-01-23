import { signOut } from "firebase/auth";

import { auth } from "../firebase-config";

export const signOutWithFirebase = () => {
  return signOut(auth);
};
