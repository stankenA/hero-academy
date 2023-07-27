import React, { useState, useEffect } from 'react';

import Factions from '../components/Factions';
import Sort from '../components/Sort';
import HeroLoader from '../components/HeroLoader';
import Hero from '../components/Hero';

import { useSelector } from 'react-redux';

export default function HomePage() {

  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // redux logic
  const { selectedSort, selectedFaction, searchValue } = useSelector(state => state.filter);

  useEffect(() => {
    setIsLoading(true);

    const baseUrl = 'https://645d3679e01ac610589fc7ea.mockapi.io/heroes?';
    const sort = 'sortBy=' + (selectedSort === 'alphabet' ? 'name' : selectedSort);
    const order = '&order=' + (selectedSort === 'alphabet' ? 'asc' : 'desc');
    const faction = selectedFaction === 'All' ? '' : `&faction=${selectedFaction}`;
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(baseUrl + sort + order + search + faction)
      .then((res) => res.json())
      .then((res) => {
        setHeroes(res)
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [selectedSort, selectedFaction, searchValue]);

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
              ? [...new Array(4)].map((el, i) => <HeroLoader key={i} />)
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
