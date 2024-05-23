import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import './ProductInfo.css'

const ProductWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px;
  width: 100%;
  max-width: 800px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
  background: linear-gradient(45deg, #EECFBA, #C5DDE8);

  .product_slider {
  flex: 0 0 60%;
  max-height: 400px;
  background-color: #f9f9f9;
  }

  .product__info {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .product__title {
    margin: 0 0 10px;
    font-size: 24px;
    font-weight: bold;
  }

  .product__description {
    margin: 10px 0;
    font-size: 16px;
    color: black;
  }

  .product__prices {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #555;
    margin: 10px 0;
  }

  .prod_price {
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
    span{
      color: #dc3545;
    }
  }

  .prod_discount {
    font-size: 18px;
    font-weight: bold;
    text-decoration: underline;
    span {
      color: #28a745;
    }
  }

  .product__rating {
    margin: 10px 0;
    font-size: 18px;
    span {
      color: #ffb400;
    }
  }

  .product__btnBack {
    margin-top: auto;
    align-self: flex-end;
    width: 25%;
    padding: 3px;
    font-weight: bold;
    border-radius: 25px;
    color: white;
    text-decoration: none;
    text-align: center;
    box-shadow: 3px 3px 8px #b9abab;
    background-color: #e45454;
  }

`

export const ProductInfo = () => {
  const products = useSelector((state) => {
    return state.products.products
    });

  const product = products[0];

  return (
    <ProductWrapper>
     {product && <View {...product} />}
    </ProductWrapper>
  )
}

const View = ({title, description, price, discountPercentage, rating, images }) => {
  const imageGalleryItems = images.map(image => ({
    original: image,
    thumbnail: image,
  }));

  return (
      <>
        <div className="product_slider">
        <ImageGallery 
        items={imageGalleryItems}
        showFullscreenButton={false}
        showPlayButton={false}
        slideInterval={10000}
        originalHeight={'250px'}
        infinite
        autoPlay
         />
        </div>
        <div className="product__info">
          <h2 className="product__title">Продукт: {title}</h2>
          <p className="product__description">Описание: {description}</p>
          <div className="product__prices">
            <div className="prod_price">Цена:
              <span> {price}$</span>
            </div>
            <div className="prod_discount">Скидка: 
              <span> {discountPercentage}$</span>
            </div>
          </div>
          <div className="product__rating">Средний рейтинг товара: 
            <span> {rating}</span>
          </div>
          <Link to="/product" className="product__btnBack">Назад</Link>
        </div>
      </>
  )
}