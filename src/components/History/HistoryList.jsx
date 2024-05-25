import { useId } from 'react';
import { useSelector } from 'react-redux';

export const HistoryList = () => {
  const id = useId();

  const listHistory = useSelector((state) => {
    const { historyReducer } = state;
    // return historyReducer.historyQueries.slice(-10);
  });

  return (
    <ul>
      {/*{listHistory.map((el) => (*/}
      {/*  <li key={id}>{el}</li>*/}
      {/*))}*/}
    </ul>
  );
};
