import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App.tsx';
import { PageNotFound } from './components/PageNotFound/PageNotFound.tsx';

export const Root = () => (
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </Router>
);
