import { useSelector } from 'react-redux';

export const useLoaderSelector = () => useSelector((state) => state.loading);
