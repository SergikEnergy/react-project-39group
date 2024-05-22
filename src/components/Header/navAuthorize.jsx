import { getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import { HelloMessage } from '@/components/Header/HelloMessage';
import { useAuthContext } from '@/hooks/useAuthContext';
import { APP_PATHS } from '@/route/paths';

export const NavAuthorize = () => {
  const { userName, logOutUser } = useAuthContext();
  const auth = getAuth();
  const handleLogOut = () => {
    logOutUser();
    auth.signOut();
  };
  return (
    <>
      <HelloMessage userName={userName} />
      <Link to={APP_PATHS.HISTORY}>
        <Button variant="outlined">История</Button>
      </Link>
      <Link to={APP_PATHS.FAVORITES}>
        <Button variant="outlined">Избранное</Button>
      </Link>
      <Link to={APP_PATHS.MAIN_PAGE}>
        <Button
          onClick={handleLogOut}
          variant="outlined">
          Выход
        </Button>
      </Link>
    </>
  );
};
