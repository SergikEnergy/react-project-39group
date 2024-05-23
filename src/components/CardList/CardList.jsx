import { CardItem } from "../CardItem/CardItem";
import { useSelector } from "react-redux";
import styled from 'styled-components';

const CardWrapper = styled.ul`
    padding: 0 10px;
    max-width: 1440px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background: linear-gradient(45deg, #EECFBA, #C5DDE8);
`

export const CardList = () => {
  const products = useSelector((state) => {
    return state.products.products
    });

  return (
    <CardWrapper>
      {products.map(card => {
        return <CardItem key={card.id} {...card}/>
      })}
    </CardWrapper>
  );
};
