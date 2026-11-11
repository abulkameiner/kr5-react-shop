import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <main className="container">
      <h2 className="section-title">Страница не найдена</h2>
      <p className="empty-state">Такой страницы не существует.</p>
      <Link to="/" className="button">На главную</Link>
    </main>
  );
}

export default NotFoundPage;