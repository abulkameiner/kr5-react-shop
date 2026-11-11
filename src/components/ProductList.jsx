import ProductCard from './ProductCard.jsx';

function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return <p className="empty-state">По вашему запросу ничего не найдено.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;