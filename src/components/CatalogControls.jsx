import { FormControl, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';

function CatalogControls({
  searchQuery,
  selectedCategory,
  sortType,
  onSearchChange,
  onCategoryChange,
  onSortChange
}) {
  return (
    <Paper variant="outlined" sx={{ p: 2, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      <TextField
        label="Поиск по названию"
        type="search"
        value={searchQuery}
        placeholder="Например, Бразилия"
        onChange={(event) => onSearchChange(event.target.value)}
        sx={{ flex: '1 1 220px' }}
      />

      <FormControl sx={{ flex: '1 1 200px' }}>
        <InputLabel id="catalog-category-label">Категория</InputLabel>
        <Select
          labelId="catalog-category-label"
          label="Категория"
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <MenuItem value="all">Все товары</MenuItem>
          <MenuItem value="coffee">Кофе</MenuItem>
          <MenuItem value="accessories">Аксессуары</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ flex: '1 1 200px' }}>
        <InputLabel id="catalog-sort-label">Сортировка</InputLabel>
        <Select
          labelId="catalog-sort-label"
          label="Сортировка"
          value={sortType}
          onChange={(event) => onSortChange(event.target.value)}
        >
          <MenuItem value="default">По умолчанию</MenuItem>
          <MenuItem value="price-asc">Сначала дешёвые</MenuItem>
          <MenuItem value="price-desc">Сначала дорогие</MenuItem>
          <MenuItem value="rating-desc">По рейтингу</MenuItem>
          <MenuItem value="title">По названию</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
}

export default CatalogControls;