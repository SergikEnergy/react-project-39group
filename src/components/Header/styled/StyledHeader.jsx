import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.08);
  margin-bottom: 30px;
  background: #f9f7fa;

  a {
    cursor: pointer;
  }
`;

export const StyledContainerButtons = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
`;
