import { useSelector } from 'react-redux';

import { FavoritesItem } from '../../components/FavoritesItem/FavoritesItem';

import './FavoritesPage.css';

export const FavoritesPage = () => {
  const favoriteItems = useSelector((state) => {
    return state.favorites.favoritesProducts;
  });

  return (
    <div className="card__wrapper">
      {favoriteItems.map((item) => {
        return (
          <FavoritesItem
            key={item.id}
            {...item}
          />
        );
      })}
    </div>
  );
};
