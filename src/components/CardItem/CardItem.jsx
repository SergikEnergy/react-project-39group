import { useState } from "react";
import styled from 'styled-components';

const Card = styled.ul`
  padding: 0;
  width: 300px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px;
  position: relative;
  background: ${props => `url(${props.thumbnail}) center/cover no-repeat`};
  h3 {
    font-size: 18px;
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  .more-button,
  .like-button {
    display: inline-block;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s ease-in-out;
  }

  .more-button:hover,
  .like-button:hover {
    box-shadow: 0 5px 20px rgba(159, 0, 19, 0.5);
    transform: scale(1.05);
  }

  .more-button {
    margin-right: 10px;
    background-color: #007bff;
    color: white;
  }

  .like-button {
    background-color: #28a745;
    color: white;
  }

  .like-button.liked {
    background-color: #dc3545;
  }
`;

export const CardItem = ({ title, price, thumbnail }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <Card thumbnail={thumbnail}>
      <CardContent>
        <h3>{title}</h3>
        <p>{price} $</p>
        <button className="more-button">Подробнее</button>
        <button
          className={`like-button ${liked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          {liked ? 'Liked' : 'Like'}
        </button>
      </CardContent>
    </Card>
  );
};
