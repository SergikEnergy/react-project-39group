import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToFavorits, removeFromFavorits} from "../../redux/actions"
import {useFavoritesSelector} from '../../redux/selectors';
import './CardItem.css';

export const CardItem = (props) => {
  const { title, price, thumbnail, id } = props;
  const {favoritesProducts} = useFavoritesSelector();
  const isLiked = favoritesProducts.some(item => item.id === id);

  const location = useLocation();

  const [liked, setLiked] = useState(isLiked);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleLike = () => {
    setLiked(state => !state);
  };

  const handleLikeClick = () => {
    toggleLike();
    dispatch(addToFavorits(props));
  }

  const handleDislikeClick = () => {
    toggleLike();
    dispatch(removeFromFavorits(id))
  }
  
  const handleMore = () => {
    navigate(`/card/${id}`, {state: location.pathname})
  }

  return (
    <div className="card" style={{background: `url(${thumbnail}) center/cover no-repeat`}}>
      <div className="card__content">
        <h3>{title}</h3>
        <p>{price} $</p>
        <button 
          className="more-button"
          onClick={handleMore}>Подробнее</button>
        <button
          className={`like-button ${liked ? 'liked' : ''}`}
          onClick={liked ? handleDislikeClick : handleLikeClick}>
          {liked ? 'Dislike' : 'Like'}
        </button>
      </div>
    </div>
  );
};
