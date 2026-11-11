function CatalogControls({
  searchQuery,
  selectedCategory,
  sortType,
  onSearchChange,
  onCategoryChange,
  onSortChange
}) {
  return (
    <section className="catalog-controls">
      <div className="catalog-controls__field">
        <label htmlFor="catalog-search">Поиск по названию</label>
        <input
          id="catalog-search"
          type="search"
          value={searchQuery}
          placeholder="Например, Бразилия"
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <div className="catalog-controls__field">
        <label htmlFor="catalog-category">Категория</label>
        <select
          id="catalog-category"
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <option value="all">Все товары</option>
          <option value="coffee">Кофе</option>
          <option value="accessories">Аксессуары</option>
        </select>
      </div>

      <div className="catalog-controls__field">
        <label htmlFor="catalog-sort">Сортировка</label>
        <select
          id="catalog-sort"
          value={sortType}
          onChange={(event) => onSortChange(event.target.value)}
        >
          <option value="default">По умолчанию</option>
          <option value="price-asc">Сначала дешёвые</option>
          <option value="price-desc">Сначала дорогие</option>
          <option value="rating-desc">По рейтингу</option>
          <option value="title">По названию</option>
        </select>
      </div>
    </section>
  );
}

export default CatalogControls;