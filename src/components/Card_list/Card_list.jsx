import { useState } from "react";
import './Card_list.css'

const Card = ({ title, description, imageUrl }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
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

export const CardList = () => {
  const cards = [
    {
      title: 'Card 1',
      description: 'This is the description for card 1.',
      imageUrl: 'https://robohash.org/Johnathon.png?set=set1',
    },
    {
      title: 'Card 2',
      description: 'This is the description for card 2.',
      imageUrl: 'https://robohash.org/Johnathon.png?set=set2',
    },
    {
      title: 'Card 3',
      description: 'This is the description for card 3.',
      imageUrl: 'https://robohash.org/Johnathon.png?set=set3',
    },
    {
      title: 'Card 4',
      description: 'This is the description for card 4.',
      imageUrl: 'https://robohash.org/Johnathon.png?set=set4',
    },
    {
      title: 'Card 5',
      description: 'This is the description for card 5.',
      imageUrl: 'https://robohash.org/Johnathon.png?set=set5',
    },
    {
      title: 'Card 6',
      description: 'This is the description for card 6.',
      imageUrl: 'https://robohash.org/Johnathon.png?set=set1',
    },
    {
      title: 'Card 7',
      description: 'This is the description for card 7.',
      imageUrl: 'https://robohash.org/Johnathon.png?set=set2',
    },
    {
      title: 'Card 8',
      description: 'This is the description for card 8.',
      imageUrl: 'https://robohash.org/Johnathon.png?set=set3',
    },
    {
      title: 'Card 9',
      description: 'This is the description for card 9.',
      imageUrl: 'https://robohash.org/Johnathon.png?set=set4',
    },
    {
      title: 'Card 10',
      description: 'This is the description for card 10.',
      imageUrl: 'https://robohash.org/Johnathon.png?set=set5',
    },
  ];

  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

