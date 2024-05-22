import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

export const StyledLoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledLoader = styled(RotatingLines)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate (-50%, -50%);
`;
