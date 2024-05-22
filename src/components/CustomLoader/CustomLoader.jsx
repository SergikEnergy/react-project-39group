import { StyledLoader, StyledLoaderWrapper } from './CustomLoader.styles';

export const CustomLoader = () => (
  <StyledLoaderWrapper>
    <StyledLoader
      visible={true}
      height="96"
      width="96"
      strokeWidth="3"
      animationDuration="2"
    />
  </StyledLoaderWrapper>
);
