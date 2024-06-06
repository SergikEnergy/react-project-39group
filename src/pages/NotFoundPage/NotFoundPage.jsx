import { useNavigate } from 'react-router-dom';
/* TODO: 
  Сокращаем пути для удобства использования через файл index.ts
  */
import { APP_PATHS } from '../../route/paths';

import './NotFoundPage.css';

export const NotFoundPage = () => {
    const navigate = useNavigate();
    /* TODO: 
  console.log ? 
  */
    const handleBackHome = () => {
        console.log(APP_PATHS.MAIN_PAGE);
        navigate(APP_PATHS.MAIN_PAGE, { replace: true });
    };

    return (
        <div className="error_wrapper">
            <div className="error_botImg"></div>
            <div className="error">
                <h1>404 Страница не найдена</h1>
                <p>
                    Проверьте правильность ввода адреса, вернитесь на предыдущую страницу или попробуйте воспользоваться
                    поиском по сайту, чтобы найти что-то конкретное.
                </p>
                <button onClick={handleBackHome}>Вернуться на главную</button>
            </div>
        </div>
    );
};
