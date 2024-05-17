import { Logo } from "./Logo";

import { StyledHeader } from "./styled/StyledHeader";
import { StyledContainerButtons } from "./styled/StyledHeader";

import { Button } from "@mui/material";

import { APP_PATHS } from "../../route/paths";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [isAuthorize, setAuthorize] = useState(null);

  return (
    <StyledHeader>
      <Logo />
      <StyledContainerButtons>
        {/*Может надо прокидывать renderProps?*/}
        {/*Если не авторизированный пользователь*/}
        {!isAuthorize && <Link to={APP_PATHS.SIGN_IN}>
          <Button variant="outlined" onClick={() => setAuthorize(1)}>Вход</Button>
        </Link>}
        {!isAuthorize && <Link to={APP_PATHS.SIGN_UP}>
          <Button variant="outlined" onClick={() => setAuthorize(1)}>Регистрация</Button>
        </Link>}
        {/*Если авторизированный*/}
        {isAuthorize && <Link to={APP_PATHS.HISTORY}>
          <Button variant="outlined">История</Button>
        </Link>}
        {isAuthorize && <Link to={APP_PATHS.FAVORITES}>
          <Button variant="outlined">Избранное</Button>
        </Link>}
        {isAuthorize && <Link to={APP_PATHS.MAIN_PAGE}>
          <Button variant="outlined" onClick={() => setAuthorize(null)}>Выход</Button>
        </Link>}
      </StyledContainerButtons>
    </StyledHeader>);
};

