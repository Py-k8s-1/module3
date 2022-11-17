import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Container from './counter/Container';
import FormElements from './FormElements';
import Login from './pages/Login';
import AppRouter from './Routes/AppRouter';
import Store from './store/indes';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <AppRouter />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
