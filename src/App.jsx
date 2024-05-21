import { BrowserRouter } from 'react-router-dom';
import { routes } from './route/routes';

export const App = () => {
  return <BrowserRouter>{routes}</BrowserRouter>;
};
