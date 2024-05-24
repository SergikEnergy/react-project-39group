import { createContext } from 'react';

import { userKeyLocalStorage } from '../data/userKeyLocalStorage';

const initialContext = {
  userName: localStorage.getItem(userKeyLocalStorage) || '',
  setUser: (name) => {},
  logOutUser: () => {},
};

export const AuthContext = createContext(initialContext);
