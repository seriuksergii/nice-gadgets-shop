import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Cart } from './components/Cart/Cart';
import { ProductPage } from './components/ProductPage/ProductPage';

export const Root = () => (
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="cart" element={<Cart />} />
          <Route path=":category/:itemId" element={<ProductPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </Router>
);
