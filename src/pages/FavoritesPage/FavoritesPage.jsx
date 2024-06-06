import { useSelector } from 'react-redux';
/* TODO: 
  Сокращаем пути для удобства использования через файл index.ts
  */
import { FavoritesItem } from '../../components/FavoritesItem/FavoritesItem';

import './FavoritesPage.css';

export const FavoritesPage = () => {
    const favoriteItems = useSelector((state) => {
        return state.favorites.favoritesProducts;
    });

    return favoriteItems.length > 0 ? (
        <div className="card__wrapper">
            {favoriteItems.map((item) => {
                return <FavoritesItem {...item} key={item.id} />;
            })}
        </div>
    ) : (
        <h1>Пожалуйста добавьте товары в избранное, сейчас тут пусто...</h1>
    );
};
