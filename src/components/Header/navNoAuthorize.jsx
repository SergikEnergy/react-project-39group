import { Link } from 'react-router-dom';
import { APP_PATHS } from '../../route/paths';
import { Button } from '@mui/material';

export const NavNoAuthorize = () => {
  return (
    <>
      <Link to={APP_PATHS.SIGN_IN}>
        <Button variant="outlined">Вход</Button>
      </Link>
      <Link to={APP_PATHS.SIGN_UP}>
        <Button variant="outlined">Регистрация</Button>
      </Link>
    </>
  );
};
