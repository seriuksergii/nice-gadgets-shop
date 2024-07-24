import React from 'react';
import './App.css'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { PageNotFound } from './components/PageNotFound';



export const App = () => {

  return (
    <>
      <Outlet />
      <Footer />
      <PageNotFound />
    </>
  )
}


