
import React from "react";
import "./App.scss";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { Outlet } from "react-router-dom";
import { PageNotFound } from "./components/PageNotFound";
import { Burger } from "./components/Burger/Burger";
import { CartItem } from "./components/CartItem";
import { Footer } from './components/Footer/Footer';
import { Grid } from './components/Grid/Grid';
import { GridItem } from './components/Grid/GridItem';



export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Grid>
        <GridItem>
          <ProductCard />
        </GridItem>
        <GridItem>
          <Burger />
        </GridItem>
      </Grid>
      <Outlet />
      <CartItem />
      <Footer />
      <PageNotFound />
    </>
  );
};

export default App;
