import { BrowserRouter } from 'react-router-dom';

import { routes } from './route/routes';

export const App = () => {
  console.log(process.env.REACT_API_KEY);
  return <BrowserRouter>{routes}</BrowserRouter>;
};
