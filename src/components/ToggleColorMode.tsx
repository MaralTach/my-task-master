import * as React from 'react';

import { Experimental_CssVarsProvider as CssVarsProvider, useColorScheme } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DarkLightMode from './DarkLightMode';



const ToggleColorMode = ({ children }: { children: React.ReactNode }) => {
  const { mode, setMode } = useColorScheme();

  const themeMode = mode === 'system' ? 'light' : mode || 'light';


  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode || 'light', // `mode`'a göre tema (light veya dark)
        },
      }),
    [themeMode]
  );

  return (
    
    <ThemeProvider theme={theme}>
      <DarkLightMode />
      {children}
    </ThemeProvider>
  
);
};


export default ToggleColorMode;
