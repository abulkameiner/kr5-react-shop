import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material';

function getButtonVariant(isAvailable) {
  return isAvailable ? 'contained' : 'outlined';
}

function ProductCard({ product, onAddToCart }) {
  const { id, title, category, price, discountPercent, rating, isAvailable, image } = product;
  const finalPrice = Math.round(price * (1 - discountPercent / 100));
  const formattedPrice = finalPrice.toLocaleString('ru-RU');
  const categoryLabel = category === 'coffee' ? 'Кофе' : 'Аксессуары';

  return (
    <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia component="img" image={image} alt={title} sx={{ aspectRatio: '4 / 3', objectFit: 'cover' }} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Chip label={categoryLabel} size="small" sx={{ mb: 1 }} />
        <Typography variant="h6" component="h3" gutterBottom>
          <Link to={`/catalog/${id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            {title}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Рейтинг: {rating}
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          {formattedPrice} ₽{' '}
          {discountPercent > 0 && <Chip label={`−${discountPercent}%`} color="primary" size="small" />}
        </Typography>
        <Typography variant="body2" color={isAvailable ? 'success.main' : 'error.main'}>
          {isAvailable ? 'В наличии' : 'Нет в наличии'}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          variant={getButtonVariant(isAvailable)}
          disabled={!isAvailable}
          onClick={() => onAddToCart(product)}
        >
          {isAvailable ? 'В корзину' : 'Нет в наличии'}
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;