import { Link } from 'react-router-dom';
import products from '../data/products.js';
import { getFinalPrice } from '../utils/productUtils.js';

function CartPage({ cartItems, onClearCart }) {
  const lines = products
    .map((product) => ({
      product,
      quantity: cartItems.filter((id) => id === product.id).length
    }))
    .filter((line) => line.quantity > 0);

  const total = lines.reduce((sum, line) => sum + getFinalPrice(line.product) * line.quantity, 0);

  return (
    <main className="container">
      <h2 className="section-title">Корзина</h2>

      {lines.length === 0 ? (
        <>
          <p className="empty-state">Корзина пуста.</p>
          <Link to="/catalog" className="button">Перейти в каталог</Link>
        </>
      ) : (
        <>
          <ul className="cart-list">
            {lines.map(({ product, quantity }) => (
              <li key={product.id} className="cart-list__item">
                <Link to={`/catalog/${product.id}`}>{product.title}</Link>
                <span>{quantity} × {getFinalPrice(product).toLocaleString('ru-RU')} ₽</span>
              </li>
            ))}
          </ul>
          <p className="cart-total">Итого: {total.toLocaleString('ru-RU')} ₽</p>
          <button type="button" className="button" onClick={onClearCart}>Очистить корзину</button>{' '}
          <Link to="/order" className="button">Оформить заказ</Link>
        </>
      )}
    </main>
  );
}

export default CartPage;