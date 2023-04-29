import React from 'react';
import './blocks/app.scss';

import Header from './components/Header';
import Factions from './components/Factions';
import Sort from './components/Sort';
import Hero from './components/Hero';

import heroesList from './utils/heroes.json';

export default function App() {
  return (
    <div className="page">
      <div className="wrapper">
        <Header />
        <main className="main">
          <section className="heroes">
            <div className="heroes__top">
              <Factions />
              <Sort />
            </div>
            <div className="heroes__content">
              <h2 className="heroes__title">All heroes</h2>
              <ul className="heroes__list list">
                {heroesList.map((hero) =>
                  <Hero
                    {...hero}
                    key={hero.id}
                  />
                )}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
