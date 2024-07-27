import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { PageNotFound } from './components/PageNotFound';
import { Burger } from './components/Burger/Burger';
import { Grid } from './components/Grid/Grid';
import { SliderSwiper } from './components/SliderSwiper';
// import { GridItem } from './components/Grid/GridItem';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <SliderSwiper />
      <Grid>
        <ProductCard />
        <Burger />
      </Grid>
      <Outlet />
      <Footer />
      <PageNotFound />
    </>
  );
};

export default App;
