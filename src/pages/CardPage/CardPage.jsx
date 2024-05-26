import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CustomLoader } from '../../components/CustomLoader';
import { ProductInfo } from '../../components/ProductInfo/ProductInfo';
import { getProductById } from '../../redux/actions/productsActions';
import { useLoaderSelector, useProductsSelector } from '../../redux/selectors';

export const CardPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { selectedProduct, error } = useProductsSelector();
  const { isLoading } = useLoaderSelector();

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [id, dispatch]);

  const isShowedCard = !isLoading && 'id' in selectedProduct && !error;
  const isErrorShowedCard = !isLoading && error;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}>
      {isLoading && <CustomLoader />}
      {isShowedCard && <ProductInfo />}
      {isErrorShowedCard && <div>Ошибка получения карточки</div>}
    </div>
  );
};
