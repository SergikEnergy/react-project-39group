import { Routes, Route, Navigate } from 'react-router-dom';
import { APP_PATHS } from './paths';
import { MainPage } from '../pages/MainPage';
import { LoginPage } from '../pages/LoginPage';
import { SignUpPage } from '../pages/SignUpPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { FavoritesPage } from '../pages/FavoritesPage';
import { HistoryPage } from '../pages/HistoryPage';

import { Layout } from '../components/Layout';

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
        path={APP_PATHS.SIGN_IN}
        element={<LoginPage />}
      />
      <Route
        path={APP_PATHS.SIGN_UP}
        element={<SignUpPage />}
      />
      <Route
        path={APP_PATHS.FAVORITES}
        element={<FavoritesPage />}
      />
      <Route
        path={APP_PATHS.HISTORY}
        element={<HistoryPage />}
      />
    </Route>
    <Route
      path={APP_PATHS.NOT_FOUND}
      element={<NotFoundPage />}
    />
    <Route
      path={APP_PATHS.OTHER}
      element={
        <Navigate
          to={APP_PATHS.NOT_FOUND}
          replace
        />
      }
    />
  </Routes>
);
