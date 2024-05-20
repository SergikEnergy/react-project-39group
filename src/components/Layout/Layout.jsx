import { Outlet } from "react-router-dom";
import { Header } from "../Header";

import { Wrapper } from "./styled/Wrapper";

export const Layout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};
