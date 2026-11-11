import { Link, useParams } from 'react-router-dom';
import products from '../data/products.js';
import { getFinalPrice } from '../utils/productUtils.js';

function ProductPage({ onAddToCart }) {
  const { productId } = useParams();
  const numericProductId = Number(productId);
  const product = products.find((item) => item.id === numericProductId);

  if (!product) {
    return (
      <main className="container">
        <h2 className="section-title">Товар не найден</h2>
        <p className="empty-state">Товара с номером «{productId}» нет в каталоге.</p>
        <Link to="/catalog" className="button">Вернуться в каталог</Link>
      </main>
    );
  }

  const categoryLabel = product.category === 'coffee' ? 'Кофе' : 'Аксессуары';

  return (
    <main className="container">
      <Link to="/catalog" className="back-link">← Назад в каталог</Link>
      <article className="product-details">
        <img className="product-details__image" src={product.image.replace('-small', '')} alt={product.title} />
        <div className="product-details__info">
          <span className="product-card__category">{categoryLabel}</span>
          <h2>{product.title}</h2>
          <p>Рейтинг: {product.rating}</p>
          <p className="product-card__price">
            {getFinalPrice(product).toLocaleString('ru-RU')} ₽
            {product.discountPercent > 0 && (
              <span className="product-card__discount">−{product.discountPercent}%</span>
            )}
          </p>
          <p className={product.isAvailable ? 'product-card__status' : 'product-card__status product-card__status--out'}>
            {product.isAvailable ? 'В наличии' : 'Нет в наличии'}
          </p>
          <button type="button" className="button" disabled={!product.isAvailable} onClick={() => onAddToCart(product)}>
            {product.isAvailable ? 'В корзину' : 'Нет в наличии'}
          </button>
        </div>
      </article>
    </main>
  );
}

export default ProductPage;