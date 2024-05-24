import { useEffect, useMemo, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { AuthContext } from '@/context/AuthContext';

import { userKeyLocalStorage } from '../data/userKeyLocalStorage';

export const AuthContextProvider = (props) => {
  const [userName, setUserName] = useState(localStorage.getItem(userKeyLocalStorage) ?? '');
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        setUserName(user.email);
        localStorage.setItem(userKeyLocalStorage, user.email);
      } else {
        setUserName('');
        localStorage.removeItem(userKeyLocalStorage);
      }
    });
  }, [auth]);

  const setUser = (name) => {
    setUserName(name);
    localStorage.setItem(userKeyLocalStorage, name);
  };
  const logOutUser = () => {
    setUserName('');
    localStorage.removeItem(userKeyLocalStorage);
  };
  const value = useMemo(() => {
    return {
      userName,
      setUser,
      logOutUser,
    };
  }, [userName]);

  // eslint-disable-next-line react/prop-types
  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};
