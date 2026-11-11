# kr5-react-shop — кофейня «СМЕНА» (React)

Учебный проект по практическим занятиям №19–24 (React).

Автор: Рахманов Абубакр, группа ЭФБО-16-25.

## Запуск

```bash
npm install
npm run dev
```

Сборка: `npm run build`, проверка кода: `npm run lint`.

## Что сделано

### Практическое занятие №19. Основы React
- Проект создан через Vite (шаблон React, JavaScript), шаблон очищен.
- Данные товаров вынесены в `src/data/products.js`.
- Функциональные компоненты `Header`, `ProductCard`, `ProductList` (JSX, `className`, props, `map` с `key={product.id}`).
- Базовые стили в `src/index.css` и `src/App.css`.
### Практическое занятие №20. Состояние и события
- Страница CatalogPage, компонент CatalogControls (поиск, категория, сортировка - управляемые элементы).
- useState для searchQuery, selectedCategory, sortType, ddedCount.
- Функции ilterProductsByCategory, searchProducts, sortProducts, getPreparedProducts в src/utils/productUtils.js.
- Список isibleProducts, пустое состояние, счётчик найденных товаров и счётчик добавленных в корзину.

## Структура

```
public/images/          SVG-изображения товаров
src/data/products.js    данные товаров
src/components/         Header, ProductCard, ProductList, CatalogControls
src/pages/              CatalogPage
src/utils/productUtils.js  фильтрация, поиск, сортировка
src/App.jsx, main.jsx   корневой компонент и точка входа
```