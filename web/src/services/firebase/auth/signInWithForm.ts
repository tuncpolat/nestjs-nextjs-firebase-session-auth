import { signInWithEmailAndPassword } from "firebase/auth"

import { auth } from "../firebase-config"

export const signInWithForm = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
}