import { useLocation, useNavigate } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { useSelector } from "react-redux";
import './ProductInfo.css'

export const ProductInfo = () => {
  const {title, description, price, discountPercentage, rating, images} = useSelector(({products}) => products.selectedProduct);

  const location = useLocation();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(location.state ?? '/')
  }

  const imageGalleryItems = images.map(image => ({
    original: image,
    thumbnail: image,
  }));

  return (
      <div className="product__wrapper">
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
          <button onClick={handleBackClick} className="product__btnBack">Назад</button>
        </div>
      </div>
  )
}