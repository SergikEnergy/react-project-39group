import { createContext } from 'react';

const initialContext = {
  userName: '',
  setUser: (name) => {},
  logOutUser: () => {},
};

export const AuthContext = createContext(initialContext);
