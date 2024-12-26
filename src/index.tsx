import React from 'react';
import ReactDOM from 'react-dom/client';
import { Experimental_CssVarsProvider as CssVarsProvider, useColorScheme } from '@mui/material/styles';
import App from './App';
import DarkLightMode from './components/DarkLightMode';






const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CssVarsProvider>
    <App />
  </CssVarsProvider>
);


