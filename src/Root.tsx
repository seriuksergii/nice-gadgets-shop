import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Cart } from './components/Cart/Cart';
import { ProductPage } from './ProductPage';
import { ActionUserProvider } from './Contexts/UserActionProvider';
import { HomePage } from './pages/HomePage';
import { PhonePage } from './pages/PhonePage';
import { FavouritesPage } from './pages/FavouritesPage';


export const Root = () => (
  <Router>
    <ActionUserProvider>
      <React.StrictMode>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<HomePage />} />
            <Route path="phone" element={<PhonePage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="favourites" element={<FavouritesPage />} />
            <Route path=":category/:itemId" element={<ProductPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </React.StrictMode>
    </ActionUserProvider>
  </Router>
);
