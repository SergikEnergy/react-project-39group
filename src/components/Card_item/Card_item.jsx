import { useState } from "react";
import './Card_item.css';

export const CardItem = ({ title, description, imageUrl }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="card" style={{ background: `url(${imageUrl}) center/contain no-repeat` }}>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="more-button">Подробнее</button>
        <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
          {liked ? 'Liked' : 'Like'}
        </button>
      </div>
    </div>
  );
};