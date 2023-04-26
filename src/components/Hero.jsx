import React, { useState } from 'react';

export default function Hero({ name, price }) {

  const [heroCount, setHeroCount] = useState(0);

  function incrHeroCount() {
    setHeroCount(heroCount + 1);
  }


  return (
    <li className="hero">
      <img
        src="https://sun9-14.userapi.com/impg/FaJfbXF5W0dTIXo5aPuhiQ7F8Ami0rIp3wulcw/8dq8uTMloII.jpg?size=180x240&quality=96&sign=8e5092838e5549bf856afe9bca489617&type=album"
        alt="Hero"
        className="hero__img"
      />
      <h3 className="hero__name">{name}</h3>
      <div className="hero__chars">
        <ul className="hero__status list">
          <li className="hero__status-option">Guardian</li>
          <li className="hero__status-option">Overseer</li>
        </ul>
        <ul className="hero__experience list">
          <li className="hero__lvl">1 lvl.</li>
          <li className="hero__lvl">20 lvl.</li>
          <li className="hero__lvl">50 lvl.</li>
        </ul>
      </div>
      <div className="hero__bottom">
        <div className="hero__price">
          <span className="hero__price-number">{price}</span>
          <span className="hero__price-dust"></span>
        </div>
        <button className="hero__add button" onClick={() => incrHeroCount()}>
          <span className="hero__add-plus"></span>
          <p className="hero__add-txt">Recruit </p>
          <span className="hero__add-counter">{heroCount}</span>
        </button>
      </div>
    </li>
  )
}
