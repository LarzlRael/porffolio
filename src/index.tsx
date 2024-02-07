import React from 'react'
import ReactDOM from 'react-dom'
import './styles/globals.scss'

import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import { LangProvider } from './context/langContext'
import { AuthProvider } from './context/AuthContext'

/* ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <LangProvider>
          <App />
        </LangProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
 */
ReactDOM.render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
