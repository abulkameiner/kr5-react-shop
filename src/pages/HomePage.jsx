import { Link } from 'react-router-dom';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import ProductList from '../components/ProductList.jsx';
import products from '../data/products.js';

function HomePage() {
  const featuredProducts = products.filter((product) => product.isAvailable).slice(0, 3);

  return (
    <Container component="main" maxWidth="lg">
      <Paper variant="outlined" sx={{ mt: 3, p: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Свежеобжаренный кофе каждый день
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Подберите зерно и аксессуары для домашней заварки в кофейне «СМЕНА».
        </Typography>
        <Button variant="contained" component={Link} to="/catalog">
          Перейти в каталог
        </Button>
      </Paper>

      <Typography variant="h5" component="h2" sx={{ my: 3 }}>
        Популярное
      </Typography>
      <Box>
        <ProductList products={featuredProducts} onAddToCart={() => {}} />
      </Box>
    </Container>
  );
}

export default HomePage;