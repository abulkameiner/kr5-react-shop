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
### Практическое занятие №21. useEffect и формы
- Компонент FormField и страница OrderPage с управляемой формой (ormData, handleFieldChange).
- Валидация alidateOrderForm в src/utils/formValidation.js, ошибки выводятся в интерфейсе (без lert).
- useEffect: черновик формы сохраняется в localStorage и восстанавливается (JSON.stringify/JSON.parse, 	ry/catch), после успешной отправки черновик очищается.
- Счётчик добавленных в корзину товаров сохраняется в localStorage.
### Практическое занятие №22. React Router
- Установлен eact-router-dom, BrowserRouter подключён в src/main.jsx, маршруты описаны в src/App.jsx.
- Маршруты: / - HomePage, /catalog - CatalogPage, /catalog/:productId - ProductPage (useParams, Number(), обработка отсутствующего товара), /order - OrderPage, /cart - CartPage, * - NotFoundPage.
- Header использует NavLink с активным стилем (getLinkClassName), карточки товаров ссылаются на страницу товара.
- Состояние корзины (cartItems) поднято в App и сохраняется в localStorage.
### Практическое занятие №23. Работа с API
- Данные товаров вынесены в public/products.json.
- API-слой src/api/productsApi.js: equestJson, getProducts, getProductById.
- CatalogPage и ProductPage загружают данные через API, показывают состояния isLoading и error, кнопку повторной загрузки (eloadKey), отменяют запрос через AbortController (обработка AbortError), для отсутствующего товара выводится сообщение «Товар не найден».

## Структура

```
public/images/          SVG-изображения товаров
src/data/products.js    данные товаров
src/components/         Header, ProductCard, ProductList, CatalogControls
src/pages/              CatalogPage
src/utils/productUtils.js  фильтрация, поиск, сортировка
src/App.jsx, main.jsx   корневой компонент и точка входа
```