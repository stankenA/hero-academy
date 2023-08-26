import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './blocks/app.scss';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import ExtendedHero from './components/ExtendedHero';

export default function App() {

  return (
    <div className="page">
      <div className="wrapper">
        <Header />
        <main className="main">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/hero/:id' element={<ExtendedHero />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
