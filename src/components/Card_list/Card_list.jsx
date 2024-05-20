import { dataCards } from "../../data/dataCards";
import { CardItem } from "../Card_item/Card_item";
import './Card_list.css'

export const CardList = () => {
  return (
    <div className="card-list">
      {dataCards.map((card, i) => (
        <CardItem key={i} {...card} />
      ))}
    </div>
  );
};