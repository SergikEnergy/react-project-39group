import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { InputField } from '../../components/MainPage/InputField';
import { getProducts } from '../../redux/actions/productsActions';
import { useProductsSelector } from '../../redux/selectors';

import './MainPage.css';

export const MainPage = () => {
  const dispatch = useDispatch();
  const products = useProductsSelector();
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return <InputField />;
};
