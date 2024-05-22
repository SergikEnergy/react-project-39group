import WavingHandIcon from '@mui/icons-material/WavingHand';

import { StyledHelloMessage } from '@/components/Header/styled/StyledHelloMessage';

export const HelloMessage = ({ userName }) => {
  return (
    <StyledHelloMessage>
      <div>
        Привет, <span>{userName}</span>
      </div>
      <WavingHandIcon />
    </StyledHelloMessage>
  );
};
