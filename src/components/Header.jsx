import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import galaxy from '../images/Galaxy.svg';
import Search from './Search';

export default function Header({ searchValue, setSearchValue }) {
  return (
    <header className="header">
      <NavLink to="/" className="header__link">
        <img src={galaxy} alt="logo" className="header__logo" />
        <div className="header__container">
          <h1 className="header__title">Hero Academy</h1>
          <p className="header__txt">
            Recruit the best heroes in the galaxy!
          </p>
        </div>
      </NavLink>
      <Routes>
        <Route path='/' element={
          <>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <NavLink to="/cart" className="header__cart">
              <div className="header__cart-content">
                <div className="header__price">
                  <span className="header__price-number">520</span>
                  <span className="header__dust"></span>
                </div>
                <span className="header__line"></span>
                <span className="header__cart-img"></span>
                <span className="header__counter">3</span>
              </div>
            </NavLink>
          </>
        }>
        </Route>
      </Routes>
    </header>
  )
}
