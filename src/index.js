import React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';

import { AuthContextProvider } from '@/context/AuthContextProvider';

import { App } from './App';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <CssBaseline>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </CssBaseline>
  </React.StrictMode>,
);
