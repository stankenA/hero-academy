import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './blocks/app.scss';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

export default function App() {

  return (
    <div className="page">
      <div className="wrapper">
        <Header />
        <main className="main">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
