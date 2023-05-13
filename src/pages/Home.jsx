import React, { useState, useEffect } from 'react';

import Factions from '../components/Factions';
import Sort from '../components/Sort';
import HeroLoader from '../components/HeroeLoader';
import Hero from '../components/Hero';

export default function Home() {

  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://645d3679e01ac610589fc7ea.mockapi.io/heroes')
      .then((res) => res.json())
      .then((res) => {
        setHeroes(res)
        setIsLoading(false);
      })
  }, []);

  return (
    <section className="heroes">
      <div className="heroes__top">
        <Factions />
        <Sort />
      </div>
      <div className="heroes__content">
        <h2 className="heroes__title">All heroes</h2>
        <ul className="heroes__list list">
          {
            isLoading
              ? [...new Array(6)].map((el, i) => <HeroLoader key={i} />)
              : heroes.map((hero) => <Hero key={hero.id} {...hero} />)
          }
        </ul>
      </div>
    </section>
  )
}
