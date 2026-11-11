import { useState } from 'react';
import CatalogControls from '../components/CatalogControls.jsx';
import ProductList from '../components/ProductList.jsx';
import products from '../data/products.js';
import { getPreparedProducts } from '../utils/productUtils.js';

function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortType, setSortType] = useState('default');
  const [addedCount, setAddedCount] = useState(0);

  const visibleProducts = getPreparedProducts(
    products,
    searchQuery,
    selectedCategory,
    sortType
  );

  function handleAddToCart() {
    setAddedCount((prevCount) => prevCount + 1);
  }

  return (
    <main className="container">
      <h2 className="section-title">Каталог товаров</h2>

      <CatalogControls
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        sortType={sortType}
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        onSortChange={setSortType}
      />

      <p className="catalog-summary">
        Найдено товаров: {visibleProducts.length} · Добавлено в корзину: {addedCount}
      </p>

      <ProductList products={visibleProducts} onAddToCart={handleAddToCart} />
    </main>
  );
}

export default CatalogPage;