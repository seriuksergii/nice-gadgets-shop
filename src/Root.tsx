import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Cart } from './components/Cart/Cart';
import { ProductPage } from './components/ProductPage/ProductPage';
import { ActionUserProvider } from './Contexts/UserActionProvider';
import { HomePage } from './pages/HomePage';
import AboutUs from './components/AboutUs/AboutUs';


export const Root = () => (
  <Router>
    <ActionUserProvider>
      <React.StrictMode>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<HomePage />} />
            <Route path="cart" element={<Cart />} />
            <Route path=":category/:itemId" element={<ProductPage />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="aboutUs" element={<AboutUs />} />
          </Route>
        </Routes>
      </React.StrictMode>
    </ActionUserProvider>
  </Router>
);
