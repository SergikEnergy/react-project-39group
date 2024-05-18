import { Logo } from "./Logo";
import { useState } from "react";
import {NavNoAuthorize} from './navNoAuthorize'
import {NavAuthorize} from "./navAuthorize";

import { StyledHeader } from "./styled/StyledHeader";
import { StyledContainerButtons } from "./styled/StyledHeader";

export const Header = () => {
  // Ждем контекста, потом меняем на useContext
  const [isAuthorize, setAuthorize] = useState(null);
  return (
    <StyledHeader>
      <Logo />
      <StyledContainerButtons>
        {isAuthorize ? <NavAuthorize logOut={()=>setAuthorize(null)}/> : <NavNoAuthorize logIn={()=>setAuthorize(1)}/> }
      </StyledContainerButtons>
    </StyledHeader>);
};

