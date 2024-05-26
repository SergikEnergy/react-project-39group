import styled from 'styled-components';

export const StyledHistoryList = styled.ul`
  list-style-type: none;
  padding: unset;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: Arial;
  width: fit-content;
  li {
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
  }
  li:hover {
    font-weight: bold;
    transform: scale(1.1);
    width: fit-content;
  }
`;
