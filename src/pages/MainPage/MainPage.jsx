import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CardList } from '../../components/CardList/CardList';
import { CustomLoader } from '../../components/CustomLoader';
import { InputField } from '../../components/InputField';
import { getProducts } from '../../redux/actions/productsActions';
import { useLoaderSelector} from '../../redux/selectors';
import { CardList } from '../../components/CardList/CardList';

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
      <CardList/>
      {isLoading && <CustomLoader />}
    </>
  );
};
