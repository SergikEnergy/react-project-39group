import { useId } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledHistoryList } from "@/components/History/styled/StyledHistoryList";

export const HistoryList = () => {
  const id = useId();

  const history = localStorage.getItem('history').split(',');

  const navigate = useNavigate();

  const routeToMain = (text) => {
    navigate('/main', { state: { searchInitialValue: text } });
  };
  return (
    <StyledHistoryList>
      {history.map((el) => (
        <li
          key={id}
          onClick={() => routeToMain(el)}>
          {el}
        </li>
      ))}
    </StyledHistoryList>
  );
};
