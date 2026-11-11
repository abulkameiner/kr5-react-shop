import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList.jsx';
import products from '../data/products.js';

function HomePage() {
  const featuredProducts = products.filter((product) => product.isAvailable).slice(0, 3);

  return (
    <main className="container">
      <section className="hero">
        <h2>Свежеобжаренный кофе каждый день</h2>
        <p>Подберите зерно и аксессуары для домашней заварки в кофейне «СМЕНА».</p>
        <Link to="/catalog" className="button">Перейти в каталог</Link>
      </section>

      <h2 className="section-title">Популярное</h2>
      <ProductList products={featuredProducts} onAddToCart={() => {}} />
    </main>
  );
}

export default HomePage;