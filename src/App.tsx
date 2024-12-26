import React from 'react';
import { Container } from '@mui/material';
import Main from './pages/Main';
import image from "./components/assets/istockphoto-1332601848-170667a.webp"
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
