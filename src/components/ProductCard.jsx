import { Link } from 'react-router-dom';

function ProductCard({ product, onAddToCart }) {
  const { id, title, category, price, discountPercent, rating, isAvailable, image } = product;
  const finalPrice = Math.round(price * (1 - discountPercent / 100));
  const formattedPrice = finalPrice.toLocaleString('ru-RU');
  const categoryLabel = category === 'coffee' ? 'Кофе' : 'Аксессуары';

  return (
    <article className="product-card">
      <img className="product-card__image" src={image} alt={title} />
      <div className="product-card__body">
        <span className="product-card__category">{categoryLabel}</span>
        <h3 className="product-card__title">`n          <Link to={`/catalog/${id}`}>{title}</Link>`n        </h3>
        <p className="product-card__rating">Рейтинг: {rating}</p>
        <p className="product-card__price">
          {formattedPrice} ₽
          {discountPercent > 0 && (
            <span className="product-card__discount">−{discountPercent}%</span>
          )}
        </p>
        <p className={isAvailable ? 'product-card__status' : 'product-card__status product-card__status--out'}>
          {isAvailable ? 'В наличии' : 'Нет в наличии'}
        </p>
        <button
          type="button"
          className="button"
          disabled={!isAvailable}
          onClick={() => onAddToCart(product)}
        >
          {isAvailable ? 'В корзину' : 'Нет в наличии'}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;