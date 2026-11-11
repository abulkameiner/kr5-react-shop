import { Alert, Box } from '@mui/material';
import ProductCard from './ProductCard.jsx';

function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return <Alert severity="info">По вашему запросу ничего не найдено.</Alert>;
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
        gap: 2,
        pb: 4
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </Box>
  );
}

export default ProductList;