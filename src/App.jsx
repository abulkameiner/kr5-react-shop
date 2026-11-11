import Header from './components/Header.jsx';
import OrderPage from './pages/OrderPage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header title="СМЕНА" subtitle="Кофейня и магазин зерна" />
      <CatalogPage />
      <OrderPage />
    </div>
  );
}

export default App;