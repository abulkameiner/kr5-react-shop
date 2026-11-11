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

## Структура

```
public/images/          SVG-изображения товаров
src/data/products.js    данные товаров
src/components/         Header, ProductCard, ProductList
src/App.jsx, main.jsx   корневой компонент и точка входа
```