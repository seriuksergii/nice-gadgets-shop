import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <HomePage />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
