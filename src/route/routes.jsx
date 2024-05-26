import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { PrivateRoutes } from '../hoc/PrivateRoutes';
import { CardPage } from '../pages/CardPage';
import { FavoritesPage } from '../pages/FavoritesPage';
import { HistoryPage } from '../pages/HistoryPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import { MainPage } from '../pages/MainPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

import { APP_PATHS } from './paths';

export const routes = (
  <Routes>
    <Route
      path={APP_PATHS.BASE}
      element={<Layout />}>
      <Route
        index
        element={<MainPage />}
      />
      <Route
        path={APP_PATHS.MAIN_PAGE}
        element={<MainPage />}
      />
      <Route
        path={APP_PATHS.CARD_PAGE}
        element={<CardPage />}
      />
      <Route
        path={APP_PATHS.SIGN_IN}
        element={<LoginPage />}
      />
      <Route
        path={APP_PATHS.SIGN_UP}
        element={<SignUpPage />}
      />

      <Route
        path={APP_PATHS.FAVORITES}
        element={
          <PrivateRoutes>
            <FavoritesPage />
          </PrivateRoutes>
        }
      />
      <Route
        path={APP_PATHS.HISTORY}
        element={
          <PrivateRoutes>
            <HistoryPage />
          </PrivateRoutes>
        }
      />
    </Route>
    <Route
      path={APP_PATHS.CARD_PAGE}
      element={<CardPage />}
    />
    <Route
      path={`${APP_PATHS.CARD_PAGE}/*`}
      element={
        <Navigate
          to={APP_PATHS.NOT_FOUND}
          replace={true}
        />
      }
    />
    <Route
      path={APP_PATHS.NOT_FOUND}
      element={<NotFoundPage />}
    />
    <Route
      path={APP_PATHS.OTHER}
      element={
        <Navigate
          to={APP_PATHS.NOT_FOUND}
          replace={true}
        />
      }
    />
  </Routes>
);
