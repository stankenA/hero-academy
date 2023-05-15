import React from 'react';
import { NavLink } from 'react-router-dom';

import img from '../images/Galaxy.svg';

export default function Cart() {
  return (
    <section className="cart">
      <div className="cart__top">
        <div className="cart__cart">
          <span className="cart__icon"></span>
          <h2 className="cart__title">Heroes cart</h2>
        </div>
        <button type="button" className="cart__clear-button button">
          <span className="cart__clear-icon"></span> Clear cart
        </button>
      </div>
      <div className="cart__content">
        <ul className="cart__list list">
          <li className="cart__item">
            <img src={img} alt="Hero" className="cart__img" />
            <div className="cart__info">
              <h3 className="cart__item-title">Hero name here</h3>
              <span className="cart__item-descr">Some description here</span>
            </div>
            <div className="cart__counter">
              <button type="button" className="cart__counter-button button">-</button>
              <span className="cart__counter-number">1</span>
              <button type="button" className="cart__counter-button button">+</button>
            </div>
            <span className="cart__sum">770</span>
            <button type="button" className="cart__clear-item button">x</button>
          </li>
          <li className="cart__item">
            <img src={img} alt="Hero" className="cart__img" />
            <div className="cart__info">
              <h3 className="cart__item-title">Hero name here</h3>
              <span className="cart__item-descr">Some description here</span>
            </div>
            <div className="cart__counter">
              <button type="button" className="cart__counter-button button">-</button>
              <span className="cart__counter-number">1</span>
              <button type="button" className="cart__counter-button button">+</button>
            </div>
            <span className="cart__sum">770</span>
            <button type="button" className="cart__clear-item button">x</button>
          </li>
        </ul>
      </div>
      <div className="cart__bottom">
        <div className="cart__amount">
          <p className="cart__txt">
            Hero number: <span className="cart__hero-number">10</span>
          </p>
          <p className="cart__txt">
            Total dust: <span className="cart__total-dust">100</span>
          </p>
        </div>
        <div className="cart__buttons">
          <NavLink to="/" className="cart__back">
            <span className="cart__back-arrow">Go back</span>
          </NavLink>
          <button className="cart__pay button">Pay now</button>
        </div>
      </div>
    </section>
  )
}
