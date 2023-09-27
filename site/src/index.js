import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post_HomePage from './pages/home2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Post_HomePage />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
