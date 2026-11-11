import Header from './components/Header.jsx';
import ProductList from './components/ProductList.jsx';
import products from './data/products.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header title="СМЕНА" subtitle="Кофейня и магазин зерна" />
      <main className="container">
        <h2 className="section-title">Каталог товаров</h2>
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;