import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CardList } from '../../components/CardList/CardList';
import { CustomLoader } from '../../components/CustomLoader';
import { InputField } from '../../components/InputField';
import { ProductInfo } from '../../components/ProductInfo/ProductInfo';
import { getInitialProducts } from '../../redux/actions/productsActions';
import { useLoaderSelector, useProductsSelector } from '../../redux/selectors';
import { NotFoundPage } from '../NotFoundPage';

import './MainPage.css';

export const MainPage = () => {
  const dispatch = useDispatch();
  const products = useProductsSelector();
  const { isLoading } = useLoaderSelector();

  const isCardsListShowed = !isLoading && !products.error & (products.products.length !== 0);
  const isErrorShowed = !isLoading && !products.error;
  const isEmptyShowed = !isLoading && !products.error & (products.products.length === 0);
  useEffect(() => {
    dispatch(getInitialProducts());
  }, [dispatch]);

  return (
    <>
      <InputField />
      <ProductInfo />
      {/* <CardList/> */}
      {isLoading && <CustomLoader />}
      {isCardsListShowed && <CardList />}
      {isErrorShowed && <NotFoundPage />}
      {isEmptyShowed && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
          Ничего не найдено!
        </div>
      )}
    </>
  );
};
