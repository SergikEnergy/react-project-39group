import ImageGallery from 'react-image-gallery';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './ProductInfo.css';

export const ProductInfo = () => {
  const products = useSelector(({ products }) => products.products);
  const product = products[5];

  return <div className="product__wrapper">{product && <View {...product} />}</div>;
};

const View = ({ title, description, price, discountPercentage, rating, images }) => {
  const imageGalleryItems = images.map((image) => ({
    original: image,
    thumbnail: image,
  }));
  console.log(imageGalleryItems);

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
          <div className="prod_price">
            Цена:
            <span> {price}$</span>
          </div>
          <div className="prod_discount">
            Скидка:
            <span> {discountPercentage}$</span>
          </div>
        </div>
        <div className="product__rating">
          Средний рейтинг товара:
          <span> {rating}</span>
        </div>
        <Link
          to="/product"
          className="product__btnBack">
          Назад
        </Link>
      </div>
    </>
  );
};
