import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import OrderPage from './pages/OrderPage.jsx';
import CartPage from './pages/CartPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import './App.css';

const CART_STORAGE_KEY = 'kr5-react-shop-cart-items';

function loadCartItems() {
  try {
    const savedItems = localStorage.getItem(CART_STORAGE_KEY);
    const parsedItems = savedItems ? JSON.parse(savedItems) : [];
    return Array.isArray(parsedItems) ? parsedItems : [];
  } catch {
    return [];
  }
}

function App() {
  const [cartItems, setCartItems] = useState(loadCartItems);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // localStorage недоступен
    }
  }, [cartItems]);

  function handleAddToCart(product) {
    setCartItems((prevItems) => [...prevItems, product.id]);
  }

  function handleClearCart() {
    setCartItems([]);
  }

  return (
    <div className="app">
      <Header title="2much" subtitle="Кофейня и магазин зерна" cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage addedCount={cartItems.length} onAddToCart={handleAddToCart} />} />
        <Route path="/catalog/:productId" element={<ProductPage onAddToCart={handleAddToCart} />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} onClearCart={handleClearCart} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;