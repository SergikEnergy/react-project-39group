import { auth } from 'firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const createUserByEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserByEmailAmdPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth.email, password);
};

export const logOutUser = () => {
  return signOut();
};
