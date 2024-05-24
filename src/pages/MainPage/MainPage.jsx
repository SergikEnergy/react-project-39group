import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CustomLoader } from '../../components/CustomLoader';
import { InputField } from '../../components/InputField';
import { getProducts } from '../../redux/actions/productsActions';
import { useLoaderSelector} from '../../redux/selectors';
import { CardList } from '../../components/CardList/CardList';
import { ProductInfo } from '../../components/ProductInfo/ProductInfo';

import './MainPage.css';

export const MainPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useLoaderSelector();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <InputField />
      <ProductInfo/>
      {/* <CardList/> */}
      {isLoading && <CustomLoader />}
    </>
  );
}