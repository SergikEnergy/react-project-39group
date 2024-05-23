import { Outlet } from 'react-router-dom';

import { Header } from '../Header';

import { StyledWrapper } from './styled/StyledWrapper';

export const Layout = () => {
  return (
    <>
      <Header />
      <StyledWrapper>
        <Outlet />
      </StyledWrapper>
    </>
  );
};
