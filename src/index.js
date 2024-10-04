import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterPage from './routes/RegisterPage';
import LoginPage from './routes/LoginPage';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />,
  },
  {
    path: '/register',
    element: <RegisterPage/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
