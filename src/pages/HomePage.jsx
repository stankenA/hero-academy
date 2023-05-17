import React, { useState, useEffect } from 'react';

import Factions from '../components/Factions';
import Sort from '../components/Sort';
import HeroLoader from '../components/HeroeLoader';
import Hero from '../components/Hero';

export default function HomePage() {

  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedSort, setSelectedSort] = useState('influence');
  const [selectedFaction, setSelectedFacion] = useState('All');

  console.log(selectedFaction)

  function setSort(sort) {
    setSelectedSort(sort);
  }

  function setFaction(faction) {
    setSelectedFacion(faction);
  }

  useEffect(() => {
    setIsLoading(true);

    const baseUrl = 'https://645d3679e01ac610589fc7ea.mockapi.io/heroes?';
    const sort = 'sortBy=' + (selectedSort === 'alphabet' ? 'name' : selectedSort);
    const order = '&order=' + (selectedSort === 'alphabet' ? 'asc' : 'desc');
    const faction = selectedFaction === 'All' ? '' : `&faction=${selectedFaction}`;

    fetch(baseUrl + sort + order + faction)
      .then((res) => res.json())
      .then((res) => {
        setHeroes(res)
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [selectedSort, selectedFaction]);

  return (
    <section className="heroes">
      <div className="heroes__top">
        <Factions
          selectedFaction={selectedFaction}
          onFactionSelect={setFaction}
        />
        <Sort
          selectedSort={selectedSort}
          onSort={setSort}
        />
      </div>
      <div className="heroes__content">
        <h2 className="heroes__title">All heroes</h2>
        <ul className="heroes__list list">
          {
            isLoading
              ? [...new Array(6)].map((el, i) => <HeroLoader key={i} />)
              : heroes.map((hero) =>
                <Hero
                  key={hero.id}
                  {...hero}
                />)
          }
        </ul>
      </div>
    </section>
  )
}
