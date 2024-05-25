import './NotFoundPage.css';

export const NotFoundPage = () => (
    <div class="error_wrapper">
      <div class="error_botImg"></div>
      <div class="error">
        <h1>404 Страница не найдена</h1>
        <p>
          Проверьте правильность ввода адреса, вернитесь на предыдущую страницу или попробуйте
          воспользоваться поиском по сайту, чтобы найти что-то конкретное.
        </p>
        <button>Вернуться на главную</button>
      </div>
    </div>
);