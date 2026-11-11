import { useEffect, useState } from 'react';
import FormField from '../components/FormField.jsx';
import { validateOrderForm } from '../utils/formValidation.js';

const ORDER_DRAFT_STORAGE_KEY = 'kr5-react-shop-order-draft';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  comment: ''
};

function loadDraft() {
  try {
    const savedDraft = localStorage.getItem(ORDER_DRAFT_STORAGE_KEY);

    if (!savedDraft) {
      return initialFormData;
    }

    const parsedDraft = JSON.parse(savedDraft);
    return { ...initialFormData, ...parsedDraft };
  } catch {
    return initialFormData;
  }
}

function OrderPage() {
  const [formData, setFormData] = useState(loadDraft);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const errors = validateOrderForm(formData);
  const isFormValid = Object.keys(errors).length === 0;

  useEffect(() => {
    try {
      localStorage.setItem(ORDER_DRAFT_STORAGE_KEY, JSON.stringify(formData));
    } catch {
      // localStorage может быть недоступен — форма продолжит работать без черновика
    }
  }, [formData]);

  function handleFieldChange(event) {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    setFormMessage('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);

    if (!isFormValid) {
      setFormMessage('Проверьте поля формы: есть ошибки.');
      return;
    }

    try {
      localStorage.removeItem(ORDER_DRAFT_STORAGE_KEY);
    } catch {
      // игнорируем недоступность localStorage
    }

    setFormData(initialFormData);
    setIsSubmitted(false);
    setFormMessage('Спасибо! Заявка отправлена, черновик очищен.');
  }

  const visibleErrors = isSubmitted ? errors : {};

  return (
    <main className="container">
      <section className="order-page">
        <h2>Оформление заказа</h2>
        <p className="order-page__hint">
          Заполните форму. Введённые данные сохраняются как черновик и восстанавливаются после перезагрузки.
        </p>

        <form className="order-form" onSubmit={handleSubmit} noValidate>
          <FormField label="Имя" name="name" value={formData.name} error={visibleErrors.name} onChange={handleFieldChange} placeholder="Как к вам обращаться" />
          <FormField label="E-mail" name="email" type="email" value={formData.email} error={visibleErrors.email} onChange={handleFieldChange} placeholder="name@example.com" />
          <FormField label="Телефон" name="phone" type="tel" value={formData.phone} error={visibleErrors.phone} onChange={handleFieldChange} placeholder="+7 900 000-00-00" />
          <FormField label="Комментарий" name="comment" as="textarea" value={formData.comment} error={visibleErrors.comment} onChange={handleFieldChange} placeholder="Пожелания к заказу" />

          <button type="submit" className="button">Отправить заказ</button>
        </form>

        {formMessage && (
          <p className={!formMessage.startsWith('Спасибо') ? 'form-message form-message--error' : 'form-message form-message--ok'} role="status">
            {formMessage}
          </p>
        )}
      </section>
    </main>
  );
}

export default OrderPage;