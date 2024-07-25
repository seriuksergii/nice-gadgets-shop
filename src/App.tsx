import React from "react";
import "./App.scss";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { PageNotFound } from "./components/PageNotFound";


export const App: React.FC = () => {
  return (
    <>
      <Header />
      <ProductCard />
      <Outlet />
      <Footer />
      <PageNotFound />
    </>
  );
};
