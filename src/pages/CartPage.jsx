import { Link } from 'react-router-dom';
import { Alert, Box, Button, Container, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
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
    <Container component="main" maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Корзина
      </Typography>

      {lines.length === 0 ? (
        <>
          <Alert severity="info" sx={{ mb: 2 }}>Корзина пуста.</Alert>
          <Button variant="contained" component={Link} to="/catalog">Перейти в каталог</Button>
        </>
      ) : (
        <>
          <Paper variant="outlined">
            <List>
              {lines.map(({ product, quantity }) => (
                <ListItem key={product.id} divider>
                  <ListItemText
                    primary={<Link to={`/catalog/${product.id}`}>{product.title}</Link>}
                    secondary={`${quantity} × ${getFinalPrice(product).toLocaleString('ru-RU')} ₽`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
          <Typography variant="h6" sx={{ my: 2 }}>
            Итого: {total.toLocaleString('ru-RU')} ₽
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="outlined" onClick={onClearCart}>Очистить корзину</Button>
            <Button variant="contained" component={Link} to="/order">Оформить заказ</Button>
          </Box>
        </>
      )}
    </Container>
  );
}

export default CartPage;