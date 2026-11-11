export function getFinalPrice(product) {
  return Math.round(product.price * (1 - product.discountPercent / 100));
}

export function filterProductsByCategory(products, category) {
  if (category === 'all') {
    return products;
  }

  return products.filter((product) => product.category === category);
}

export function searchProducts(products, query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (normalizedQuery === '') {
    return products;
  }

  return products.filter((product) =>
    product.title.toLowerCase().includes(normalizedQuery)
  );
}

export function sortProducts(products, sortType) {
  const productsCopy = [...products];

  switch (sortType) {
    case 'price-asc':
      return productsCopy.sort((a, b) => getFinalPrice(a) - getFinalPrice(b));
    case 'price-desc':
      return productsCopy.sort((a, b) => getFinalPrice(b) - getFinalPrice(a));
    case 'rating-desc':
      return productsCopy.sort((a, b) => b.rating - a.rating);
    case 'title':
      return productsCopy.sort((a, b) => a.title.localeCompare(b.title, 'ru'));
    default:
      return productsCopy;
  }
}

export function getPreparedProducts(products, searchQuery, selectedCategory, sortType) {
  const byCategory = filterProductsByCategory(products, selectedCategory);
  const bySearch = searchProducts(byCategory, searchQuery);
  return sortProducts(bySearch, sortType);
}