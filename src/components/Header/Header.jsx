import { useAuthContext } from '@/hooks/useAuthContext';

import { StyledHeader } from './styled/StyledHeader';
import { StyledContainerButtons } from './styled/StyledHeader';
import { Logo } from './Logo';
import { NavAuthorize } from './navAuthorize';
import { NavNoAuthorize } from './navNoAuthorize';

export const Header = () => {
  // Ждем контекста, потом меняем на useContext
  const { userName } = useAuthContext();
  return (
    <StyledHeader>
      <Logo />
      <StyledContainerButtons>
        {userName ? <NavAuthorize /> : <NavNoAuthorize />}
      </StyledContainerButtons>
    </StyledHeader>
  );
};
