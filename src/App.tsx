import "./App.scss";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { PageNotFound } from "./components/PageNotFound";
import { Burger } from "./components/Burger/Burger";

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <PageNotFound />
      <Burger />
    </>
  );
};
