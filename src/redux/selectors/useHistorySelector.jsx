import { useSelector } from 'react-redux';

export const useHistorySelector = () => useSelector((state) => state.history);
