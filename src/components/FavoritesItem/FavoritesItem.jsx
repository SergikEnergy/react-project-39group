import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { removeFromFavorits } from '../../redux/actions';

import './FavoritesItem.css';

export const FavoritesItem = (props) => {
  const { title, price, thumbnail, id } = props;

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeFromFavorits(id));
  };

  const handleMore = () => {
    navigate(`/card/${id}`, { state: location.pathname });
  };

  return (
    <div
      className="card"
      style={{ background: `url(${thumbnail}) center/cover no-repeat` }}>
      <div className="card__content">
        <h3>{title}</h3>
        <p>{price} $</p>
        <button
          className="more-button"
          onClick={handleMore}>
          Подробнее
        </button>
        <button
          className="like-button liked"
          onClick={handleClick}>
          Dislike
        </button>
      </div>
    </div>
  );
};
