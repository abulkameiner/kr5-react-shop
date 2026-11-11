import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Alert, Box, Button, Chip, CircularProgress, Container, Paper, Typography } from '@mui/material';
import { getProductById } from '../api/productsApi.js';
import { getFinalPrice } from '../utils/productUtils.js';

function ProductPage({ onAddToCart }) {
  const { productId } = useParams();
  const numericProductId = Number(productId);

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadProduct() {
      setIsLoading(true);
      setError('');
      setProduct(null);

      try {
        const loadedProduct = await getProductById(numericProductId, { signal: controller.signal });
        setProduct(loadedProduct);
      } catch (err) {
        if (err.name === 'AbortError') {
          return;
        }
        setError(err.message || 'Не удалось загрузить товар.');
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadProduct();

    return () => controller.abort();
  }, [numericProductId, reloadKey]);

  function handleRetry() {
    setReloadKey((prevKey) => prevKey + 1);
  }

  if (isLoading) {
    return (
      <Container component="main" maxWidth="lg" sx={{ py: 4, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container component="main" maxWidth="lg" sx={{ py: 3 }}>
        <Alert
          severity="error"
          sx={{ mb: 2 }}
          action={<Button color="inherit" size="small" onClick={handleRetry}>Повторить</Button>}
        >
          {error}
        </Alert>
        <Button component={Link} to="/catalog">← Назад в каталог</Button>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container component="main" maxWidth="lg" sx={{ py: 3 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Товар не найден
        </Typography>
        <Alert severity="warning" sx={{ mb: 2 }}>
          Товара с номером «{productId}» нет в каталоге.
        </Alert>
        <Button variant="contained" component={Link} to="/catalog">Вернуться в каталог</Button>
      </Container>
    );
  }

  const categoryLabel = product.category === 'coffee' ? 'Кофе' : 'Аксессуары';

  return (
    <Container component="main" maxWidth="lg" sx={{ py: 3 }}>
      <Button component={Link} to="/catalog" sx={{ mb: 2 }}>← Назад в каталог</Button>
      <Paper
        variant="outlined"
        sx={{ p: 2, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 3 }}
      >
        <Box component="img" src={product.image.replace('-small', '')} alt={product.title} sx={{ width: '100%', borderRadius: 2 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start' }}>
          <Chip label={categoryLabel} size="small" />
          <Typography variant="h4" component="h2">{product.title}</Typography>
          <Typography>Рейтинг: {product.rating}</Typography>
          <Typography variant="h5">
            {getFinalPrice(product).toLocaleString('ru-RU')} ₽{' '}
            {product.discountPercent > 0 && <Chip label={`−${product.discountPercent}%`} color="primary" size="small" />}
          </Typography>
          <Typography color={product.isAvailable ? 'success.main' : 'error.main'}>
            {product.isAvailable ? 'В наличии' : 'Нет в наличии'}
          </Typography>
          <Button variant="contained" disabled={!product.isAvailable} onClick={() => onAddToCart(product)}>
            {product.isAvailable ? 'В корзину' : 'Нет в наличии'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default ProductPage;