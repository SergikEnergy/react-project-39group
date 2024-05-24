import { Navigate, useLocation } from 'react-router-dom';

import { useAuthUser } from '../hooks';
import { APP_PATHS } from '../route/paths';

// eslint-disable-next-line react/prop-types
export const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const userName = useAuthUser();

  return userName ? (
    children
  ) : (
    <Navigate
      to={APP_PATHS.SIGN_IN}
      state={{ from: location }}
    />
  );
};
