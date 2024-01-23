import { createUserWithEmailAndPassword } from "firebase/auth"

import { auth } from "../firebase-config"

export const signUpWithForm = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}