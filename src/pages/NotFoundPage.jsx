import { Link } from 'react-router-dom';
import { Alert, Button, Container, Typography } from '@mui/material';

function NotFoundPage() {
  return (
    <Container component="main" maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Страница не найдена
      </Typography>
      <Alert severity="warning" sx={{ mb: 2 }}>Такой страницы не существует.</Alert>
      <Button variant="contained" component={Link} to="/">На главную</Button>
    </Container>
  );
}

export default NotFoundPage;