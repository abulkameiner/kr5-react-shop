import { NavLink } from 'react-router-dom';
import { AppBar, Badge, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const navItems = [
  { to: '/', label: 'Главная', end: true },
  { to: '/catalog', label: 'Каталог' },
  { to: '/order', label: 'Заказ' }
];

const linkSx = {
  color: 'inherit',
  borderRadius: 0,
  borderBottom: '2px solid transparent',
  '&.active': { borderBottomColor: '#fff', fontWeight: 700 }
};

function Header({ title, subtitle, cartCount = 0 }) {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ flexWrap: 'wrap', gap: 1 }}>
          <Typography variant="h5" component="h1" sx={{ fontWeight: 700, letterSpacing: 3 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.85, display: { xs: 'none', sm: 'block' }, ml: 2 }}>
            {subtitle}
          </Typography>
          <Box component="nav" sx={{ ml: 'auto', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {navItems.map((item) => (
              <Button key={item.to} component={NavLink} to={item.to} end={item.end} sx={linkSx}>
                {item.label}
              </Button>
            ))}
            <Button component={NavLink} to="/cart" sx={linkSx}>
              <Badge badgeContent={cartCount} color="secondary" showZero sx={{ mr: 1 }}>
                <ShoppingCartIcon />
              </Badge>
              Корзина
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;