import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CardList } from '../../components/CardList/CardList';
import { CustomLoader } from '../../components/CustomLoader';
import { SearchBar } from '../../components/SearchBar';
import { getInitialProducts } from '../../redux/actions/productsActions';
import { useLoaderSelector, useProductsSelector } from '../../redux/selectors';

import './MainPage.css';

export const MainPage = () => {
  const dispatch = useDispatch();
  const { products, error } = useProductsSelector();
  const { isLoading } = useLoaderSelector();

  const isCardsListShowed = !isLoading && !error && products.length !== 0;
  const isErrorShowed = !isLoading && error;
  const isEmptyShowed = !isLoading && !error && products.length === 0;

  useEffect(() => {
    dispatch(getInitialProducts());
  }, [dispatch]);

  return (
    <>
      <SearchBar />
      {isLoading && <CustomLoader />}
      {isCardsListShowed && <CardList />}
      {isErrorShowed && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
          Ошибка получения данных о товарах. Пожалуйста, попробуйте повторить запрос позже!
        </div>
      )}
      {isEmptyShowed && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
          Ничего не найдено!
        </div>
      )}
    </>
  );
};
