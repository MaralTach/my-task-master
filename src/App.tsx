import React from 'react';
import { Container } from '@mui/material';
import Main from './pages/Main';
import {ThemeContextProvider} from './components/ThemeContext'



function App() {
  return (
   <ThemeContextProvider>
    <Container className="App">
    <Main />
    </Container>
   </ThemeContextProvider>

  );
}

export default App;
