import React from 'react';
import ReactDOM from 'react-dom/client';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import App from './App';







const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CssVarsProvider>
    <App />
  </CssVarsProvider>
);


