import { useSelector } from 'react-redux';

export const useFavoritesSelector = () => useSelector((state) => state.favorites);
