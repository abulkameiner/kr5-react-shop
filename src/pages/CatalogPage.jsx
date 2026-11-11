import { useEffect, useState } from 'react';
import CatalogControls from '../components/CatalogControls.jsx';
import ProductList from '../components/ProductList.jsx';
import { getProducts } from '../api/productsApi.js';
import { getPreparedProducts } from '../utils/productUtils.js';

function CatalogPage({ addedCount, onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [reloadKey, setReloadKey] = useState(0);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      setIsLoading(true);
      setError('');

      try {
        const loadedProducts = await getProducts({ signal: controller.signal });
        setProducts(loadedProducts);
      } catch (err) {
        if (err.name === 'AbortError') {
          return;
        }
        setError(err.message || 'Не удалось загрузить товары.');
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadProducts();

    return () => controller.abort();
  }, [reloadKey]);

  function handleRetry() {
    setReloadKey((prevKey) => prevKey + 1);
  }

  const visibleProducts = getPreparedProducts(
    products,
    searchQuery,
    selectedCategory,
    sortType
  );

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

      {isLoading && <p className="status-message">Загрузка товаров...</p>}

      {error && (
        <div className="status-message status-message--error" role="alert">
          <p>{error}</p>
          <button type="button" className="button" onClick={handleRetry}>Повторить</button>
        </div>
      )}

      {!isLoading && !error && (
        <>
          <p className="catalog-summary">
            Найдено товаров: {visibleProducts.length} · Добавлено в корзину: {addedCount}
          </p>
          <ProductList products={visibleProducts} onAddToCart={onAddToCart} />
        </>
      )}
    </main>
  );
}

export default CatalogPage;