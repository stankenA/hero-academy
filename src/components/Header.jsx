import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import galaxy from '../images/Galaxy.svg';
import Search from './Search';

export default function Header() {

  const { items, totalPrice } = useSelector(state => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

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
            <Search />
            <NavLink to="/cart" className="header__cart">
              <div className="header__cart-content">
                <div className="header__price">
                  <span className="header__price-number">{totalPrice}</span>
                  <span className="header__dust"></span>
                </div>
                <span className="header__line"></span>
                <span className="header__cart-img"></span>
                <span className="header__counter">{totalCount}</span>
              </div>
            </NavLink>
          </>
        }>
        </Route>
      </Routes>
    </header>
  )
}
