import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './blocks/app.scss';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="page">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <main className="main">
          <Routes>
            <Route path='/' element={<HomePage searchValue={searchValue} />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
