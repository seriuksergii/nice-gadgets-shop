import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Cart } from './components/Cart/Cart';
import { ProductPage } from './components/ProductPage';
import { ActionUserProvider } from './Contexts/UserActionProvider';
import { ThemeProvider } from './Contexts/ThemeContext';
import { HomePage } from './pages/HomePage';
import { PhonePage } from './pages/PhonePage';
import { FavouritesPage } from './pages/FavouritesPage';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import AboutUs from './components/AboutUs/AboutUs';


export const Root = () => (
  <Router>
    <ThemeProvider>
      <ActionUserProvider>
        <React.StrictMode>
          <Routes>
            <Route element={<App />}>
              <Route path="/" element={<HomePage />} />
              <Route path="phone" element={<PhonePage />} />
              <Route path="tablets" element={<TabletsPage />} />
              <Route path="accessories" element={<AccessoriesPage />} />
              <Route path="cart" element={<Cart />} />
              <Route path="favorites" element={<FavouritesPage />} />
              <Route path=":category/:itemId" element={<ProductPage />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="aboutUs" element={<AboutUs />} />
            </Route>
          </Routes>
        </React.StrictMode>
      </ActionUserProvider>
    </ThemeProvider>
  </Router>
);
