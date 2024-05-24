import { useSelector } from 'react-redux';

export const useProductsSelector = () => useSelector((state) => state.products);
