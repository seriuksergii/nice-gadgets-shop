import "./App.css";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { PageNotFound } from "./components/PageNotFound";

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <PageNotFound />
    </>
  );
};
