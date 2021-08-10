import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.scss';

import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { LangProvider } from './context/langContext';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LangProvider>

        <App />

      </LangProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


