import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CustomLoader } from '../../components/CustomLoader';
import { InputField } from '../../components/InputField';
import { getProducts } from '../../redux/actions/productsActions';
import { useLoaderSelector, useProductsSelector } from '../../redux/selectors';

import './MainPage.css';

export const MainPage = () => {
  const dispatch = useDispatch();
  const products = useProductsSelector();
  const { isLoading } = useLoaderSelector();
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <InputField />
      {isLoading && <CustomLoader />}
    </>
  );
}