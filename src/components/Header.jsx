function Header({ title, subtitle }) {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="site-header__logo">{title}</h1>
        <p className="site-header__subtitle">{subtitle}</p>
      </div>
    </header>
  );
}

export default Header;