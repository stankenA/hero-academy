import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './blocks/app.scss';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoadingSpinner from './components/LoadingSpinner';
// import CartPage from './pages/CartPage';
// import NotFoundPage from './pages/NotFoundPage';
// import ExtendedHero from './components/ExtendedHero';

const CartPage = lazy(() => import('./pages/CartPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ExtendedHero = lazy(() => import('./components/ExtendedHero'));


export default function App() {

  return (
    <div className="page">
      <div className="wrapper">
        <Header />
        <main className="main">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={
              <Suspense fallback={<LoadingSpinner />}>
                <CartPage />
              </Suspense>
            } />
            <Route path='/hero/:id' element={
              <Suspense fallback={<LoadingSpinner />}>
                <ExtendedHero />
              </Suspense>
            } />
            <Route path='*' element={
              <Suspense fallback={<LoadingSpinner />}>
                <NotFoundPage />
              </Suspense>
            } />
          </Routes>
        </main>
      </div>
    </div>
  )
}
