import { useEffect, useState } from 'react';
import { Alert, Box, Button, CircularProgress, Container, Typography } from '@mui/material';
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
    <Container component="main" maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Каталог товаров
      </Typography>

      <CatalogControls
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        sortType={sortType}
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        onSortChange={setSortType}
      />

      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert
          severity="error"
          sx={{ my: 2 }}
          action={<Button color="inherit" size="small" onClick={handleRetry}>Повторить</Button>}
        >
          {error}
        </Alert>
      )}

      {!isLoading && !error && (
        <>
          <Typography color="text.secondary" sx={{ my: 2 }}>
            Найдено товаров: {visibleProducts.length} · Добавлено в корзину: {addedCount}
          </Typography>
          <ProductList products={visibleProducts} onAddToCart={onAddToCart} />
        </>
      )}
    </Container>
  );
}

export default CatalogPage;