import { CardItem } from '../CardItem/CardItem';
import { useSelector } from 'react-redux';

import './CardList.css';

export const CardList = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="card__wrapper">
      {products.map((card) => (
        <CardItem
          key={card.id}
          {...card}
        />
      ))}
    </div>
  );
};
