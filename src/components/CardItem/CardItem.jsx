import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {APP_PATHS} from "../../route/paths"
import { useDispatch } from "react-redux";
import {addToFavorits, removeFromFavorits} from "../../redux/actions"
import './CardItem.css';

export const CardItem = (props) => {
  const { title, price, thumbnail, id } = props;

  // TODO Вытянуть масив favorits из редакса
  // Проверить есть ли в редаксе такая карточка (по title и description) если есть filter => в use.state передать initial true

  const [liked, setLiked] = useState(false);
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
    navigate(APP_PATHS.CARDPAGE)
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
