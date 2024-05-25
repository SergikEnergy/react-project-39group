import { useId } from 'react';

export const HistoryList = () => {
  const id = useId();

  const history = localStorage.getItem('history').split(',');
  console.log(history);

  return (
    <ul>
      {history.map((el) => (
        <li key={id}>{el}</li>
      ))}
    </ul>
  );
};
