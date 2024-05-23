import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NotFoundPage } from '../NotFoundPage'
import { CustomLoader } from '../../components/CustomLoader';
import { InputField } from '../../components/InputField';
import { getInitialProducts } from '../../redux/actions/productsActions';
import { useLoaderSelector, useProductsSelector } from '../../redux/selectors';

import './MainPage.css';
import { productsWithSearchUrl } from '../../redux/api.data';

export const MainPage = () => {
  const dispatch = useDispatch();
  const products = useProductsSelector();
  const { isLoading } = useLoaderSelector();
  console.log(products);
  const isCardsListShowed = !isLoading && !products.error & products.products.length !== 0;
  const isErrorShowed = !isLoading && !products.error;
  const isEmptyShowed = !isLoading && !products.error & products.products.length === 0;
  useEffect(() => {
    dispatch(getInitialProducts());
  }, [dispatch]);


  return (
    <>
      <InputField />
      {isLoading && <CustomLoader />}
      {/* { isCardsListShowed && <CardList /> } // Добвать CardList  */}
      { isErrorShowed && <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>'Ошибка'</div>}
      { isEmptyShowed && <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>Ничего не найдено!</div>}
    </>
  );
};

// products.title
// products.id