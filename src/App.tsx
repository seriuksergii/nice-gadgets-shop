import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { SliderSwiper } from './components/SliderSwiper';
import { PageNotFound } from './components/PageNotFound';


export const App: React.FC = () => {
  return (
    <>
      <Header />
        <main className='main'>
         <SliderSwiper />
        <Outlet />
        <PageNotFound />
      </main>
        <Footer />
    </>
  );
};


