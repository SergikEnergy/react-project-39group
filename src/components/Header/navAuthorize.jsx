import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { Link, NavLink } from 'react-router-dom';
import { Alert, Button, Snackbar } from '@mui/material';

import { HelloMessage } from '@/components/Header/HelloMessage';
import { useAuthContext } from '@/hooks/useAuthContext';
import { APP_PATHS } from '@/route/paths';

import { ActiveNavLink } from './styled/StyledNavLinkRouterFunction';

export const NavAuthorize = () => {
  const { userName, logOutUser } = useAuthContext();
  const [loginError, setLoginError] = useState(false);
  const auth = getAuth();
  const handleLogOut = () => {
    if (userName) {
      logOutUser();
      auth.signOut();
    } else {
      setLoginError(false);
    }
  };

  const handleLoginError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setLoginError(false);
  };
  return (
    <>
      <HelloMessage userName={userName} />
      <NavLink
        to={APP_PATHS.HISTORY}
        style={ActiveNavLink}>
        История
      </NavLink>
      <NavLink
        to={APP_PATHS.FAVORITES}
        style={ActiveNavLink}>
        Избранное
      </NavLink>
      <Link to={APP_PATHS.MAIN_PAGE}>
        <Button
          onClick={handleLogOut}
          variant="outlined">
          Выход
        </Button>
      </Link>
      <Snackbar
        open={loginError}
        autoHideDuration={4000}
        onClose={handleLoginError}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
        <Alert
          onClose={handleLoginError}
          severity="error">
          Неверно введён логин или пароль
        </Alert>
      </Snackbar>
    </>
  );
};
