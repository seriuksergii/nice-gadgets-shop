import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Cart } from './pages/Cart/Cart';
import { ProductPage } from './components/ProductPage';
import { ActionUserProvider } from './Contexts/UserActionProvider';
import { ThemeProvider } from './Contexts/ThemeContext';
import { HomePage } from './pages/HomePage';
import { PhonePage } from './pages/PhonePage';
import { FavouritesPage } from './pages/FavouritesPage';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import AboutUs from './components/AboutUs/AboutUs';
import { ThankYou } from './pages/ThankYou/ThankYou';
import ScrollToTop from './services/ScrollToTop';


export const Root = () => (
   <Router>
   <ScrollToTop />
    <ThemeProvider>
      <ActionUserProvider>
        <React.StrictMode>
          <Routes>
            <Route element={<App />}>
              <Route path="/" element={<HomePage />} />
              <Route path="phones" element={<PhonePage />} />
              <Route path="tablets" element={<TabletsPage />} />
              <Route path="accessories" element={<AccessoriesPage />} />
              <Route path="thank-you" element={<ThankYou />} />
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
