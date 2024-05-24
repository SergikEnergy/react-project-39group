import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CustomLoader } from '../CustomLoader';
import { Header } from '../Header';

import { StyledWrapper } from './styled/StyledWrapper';

export const Layout = () => {
  return (
    <>
      <Header />
      <StyledWrapper>
        <Suspense fallback={<CustomLoader />}>
          <Outlet />
        </Suspense>
      </StyledWrapper>
    </>
  );
};
