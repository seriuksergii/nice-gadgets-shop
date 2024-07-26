import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { PageNotFound } from './components/PageNotFound';
import { Burger } from './components/Burger/Burger';
import { Grid } from './components/Grid/Grid';
import { TechSpecs } from './components/TechSpecs';


export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Grid>
        <ProductCard />
        <Burger />
      </Grid>
      <Outlet />
      <Footer />
      <PageNotFound />
      <TechSpecs />
    </>
  );
};

