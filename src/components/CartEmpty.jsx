import React from 'react';
import { NavLink } from 'react-router-dom';

import astronaut from '../images/astronaut.jpg';

export default function CartEmpty() {
  return (
    <div className="cart__empty">
      <h2 className="cart__empty-title">
        The cart is empty 😕
      </h2>
      <img src={astronaut} alt="Astronaut" className="cart__empty-img" />
      <p className="cart__empty-txt">
        It looks like you haven't recruited any heroes. <br />
        You can do this on the homepage.
      </p>
      <NavLink to="/" className="cart__back">
        Go back
      </NavLink>
    </div>
  )
}
