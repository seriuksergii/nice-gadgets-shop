
import React from "react";
import "./App.scss";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { Outlet } from "react-router-dom";
import { PageNotFound } from "./components/PageNotFound";
import { Burger } from "./components/Burger/Burger";
import { CartItem } from "./components/CartItem";
import { Footer } from './components/Footer/Footer';
import { SliderSwiper } from './components/SliderSwiper';



export const App: React.FC = () => {
  return (
    <>
      <Header />
        <main className='main'>
         <SliderSwiper />
        <Outlet />
      </main>
        <Footer />
        <CartItem/>
      <PageNotFound />
    </>
  );
};

export default App;
