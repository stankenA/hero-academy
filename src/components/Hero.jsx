import React, { useState } from 'react';

export default function Hero({ name, price, heroImage, lvls, types }) {

  const heroTypes = ['Guardian', 'Overseer'];

  const [activeType, setActiveType] = useState(0);
  const [activeLvl, setActiveLvl] = useState(0);

  return (
    <li className="hero">
      <img
        src={heroImage}
        alt="Hero"
        className="hero__img"
      />
      <h3 className="hero__name">{name}</h3>
      <div className="hero__chars">
        <ul className="hero__type list">
          {
            types.map((type) => (
              <li
                key={type}
                className={`hero__type-option ${activeType === type ? 'hero__type-option_active' : ''}`}
                onClick={() => setActiveType(type)}
              >
                {heroTypes[type]}
              </li>
            ))
          }
        </ul>
        <ul className="hero__experience list">
          {
            lvls.map((lvl, i) => (
              <li
                key={lvl}
                className={`hero__lvl ${activeLvl === i ? 'hero__lvl_active' : ''}`}
                onClick={() => setActiveLvl(i)}
              >
                {lvl + ' lvl.'}
              </li>
            ))
          }
        </ul>
      </div>
      <div className="hero__bottom">
        <div className="hero__price">
          <span className="hero__price-number">{price}</span>
          <span className="hero__price-dust"></span>
        </div>
        <button className="hero__add button">
          <span className="hero__add-plus"></span>
          <p className="hero__add-txt">Recruit </p>
          <span className="hero__add-counter">0</span>
        </button>
      </div>
    </li>
  )
}
