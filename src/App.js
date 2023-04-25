import React from 'react';
import './blocks/app.scss';
import galaxy from './images/Galaxy.svg';

export default function App() {
  return (
    <div className="page">
      <div className="wrapper">
        <header className="header">
          <a href="#" className="header__link">
            <img src={galaxy} alt="logo" className="header__logo" />
            <div className="header__container">
              <h1 className="header__title">Hero Academy</h1>
              <p className="header__txt">
                Recruit the best heroes in the galaxy!
              </p>
            </div>
          </a>
          <a href="#" className="header__cart">
            <div className="header__cart-content">
              <div className="header__price">
                <span className="header__price-number">520</span>
                <span className="header__dust"></span>
              </div>
              <span className="header__line"></span>
              <span className="header__cart-img"></span>
              <span className="header__counter">3</span>
            </div>
          </a>
        </header>
        <main className="main">
          <section className="heroes">
            <div className="heroes__top">
              <ul className="factions list">
                <li className="factions__name">United Empire</li>
                <li className="factions__name">Sophons</li>
                <li className="factions__name">Umbral Choir</li>
                <li className="factions__name">Riftborns</li>
                <li className="factions__name">Cravers</li>
                <li className="factions__name">Lumeris</li>
                <li className="factions__name">Unfallen</li>
                <li className="factions__name">Vaulters</li>
              </ul>
              <div className="sort">
                <p className="sort__txt">
                  Sort by:
                </p>
                <span className="sort__selected">influence</span>
                <ul className="sort__list list">
                  <li className="sort__option">influence</li>
                  <li className="sort__option">price</li>
                  <li className="sort__option">alphabet</li>
                </ul>
              </div>
            </div>
            <div className="heroes__content">
              <h2 className="heroes__title">All heroes</h2>
              <ul className="heroes__list list">
                <li className="hero">
                  <img src="#" alt="Hero" className="hero__img" />
                  <h3 className="hero__name">Hero</h3>
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
                      <span className="hero__price-number">450</span>
                      <span className="hero__price-dust"></span>
                    </div>
                    <button className="hero__add button">
                      <span className="hero__add-plus"></span>
                      <p className="hero__add-txt">Add</p>
                      <span className="hero__add-counter">2</span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
