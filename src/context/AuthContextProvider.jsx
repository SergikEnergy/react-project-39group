import { useEffect, useMemo, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { AuthContext } from '@/context/AuthContext';

export const AuthContextProvider = (props) => {
  const [userName, setUserName] = useState('');
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        setUserName(user.email);
      } else {
        setUserName('');
      }
    });
  }, [auth]);

  const setUser = (name) => {
    setUserName(name);
  };
  const logOutUser = () => {
    setUserName('');
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
