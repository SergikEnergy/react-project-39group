import React from 'react';
import { useSelector } from 'react-redux';

import { CardItem } from '../CardItem/CardItem';

import './CardList.css';

export const CardList = () => {
  const products = useSelector((state) => state.products.products);
  const search = useSelector((state) => state.products.searchProducts);

  return (
    <div className="card__wrapper">
      {search.length > 0
        ? search.map((card) => (
            <CardItem
              key={card.id}
              {...card}
            />
          ))
        : products.map((card) => (
            <CardItem
              key={card.id}
              {...card}
            />
          ))}
    </div>
  );
};
