import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import './components/i18n/i18n.js';
import { Toaster } from 'react-hot-toast';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </>
  );
};
