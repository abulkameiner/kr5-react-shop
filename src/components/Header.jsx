import { NavLink } from 'react-router-dom';

function getLinkClassName({ isActive }) {
  return isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link';
}

function Header({ title, subtitle, cartCount = 0 }) {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="site-header__logo">{title}</h1>
        <p className="site-header__subtitle">{subtitle}</p>
        <nav className="site-nav">
          <NavLink to="/" end className={getLinkClassName}>Главная</NavLink>
          <NavLink to="/catalog" className={getLinkClassName}>Каталог</NavLink>
          <NavLink to="/order" className={getLinkClassName}>Заказ</NavLink>
          <NavLink to="/cart" className={getLinkClassName}>Корзина ({cartCount})</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;