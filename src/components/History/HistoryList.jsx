import { useId } from 'react';
import { useNavigate } from 'react-router-dom';

export const HistoryList = () => {
  const id = useId();

  const history = localStorage.getItem('history').split(',');
  console.log(history);

  const navigate = useNavigate();

  const routeToMain = (text) => {
    navigate('/main', { state: { searchInitialValue: text } });
  };
  return (
    <ul>
      {history.map((el) => (
        <li
          key={id}
          onClick={() => routeToMain(el)}>
          {el}
        </li>
      ))}
    </ul>
  );
};
