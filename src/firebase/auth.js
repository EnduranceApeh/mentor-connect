import { serverTimestamp } from "@firebase/firestore";
import {auth, db} from "./config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {doc, setDoc, serverTimestamp} from "firebase/firestore";

//Sing-up function
export async function signUp (email, password, name, role) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  const user = userCredential.user

  await setDoc(doc(db, "users", user.id), {
    uid: user.uid,
    name,
    email: user.email,
    role,
    createAt: serverTimestamp()
  })

  return user;
}

//singn-in
export async function signIn(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  return userCredential.user;
}