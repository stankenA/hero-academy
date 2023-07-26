import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './blocks/app.scss';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import { SearchContext } from './contexts/SearchContext';

export default function App() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="page">
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <main className="main">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </main>
        </SearchContext.Provider>
      </div>
    </div>
  )
}
