/* eslint-disable no-undef */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDMrPEzUWepwb0eyJl5wUcQHfVsdM8AMyE',
  authDomain: 'react-intensieve-2024.firebaseapp.com',
  databaseURL: 'https://react-intensieve-2024-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-intensieve-2024',
  storageBucket: 'react-intensieve-2024.appspot.com',
  messagingSenderId: '759191039885',
  appId: '1:759191039885:web:caa9e5d855eeb3d00297c4',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
