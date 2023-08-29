import React, { useState, useEffect } from 'react';

// import { useNavigate } from 'react-router-dom';
// import { setFilters } from '../redux/slices/filterSlice';
// import qs from 'qs';

import { Factions } from '../components/Factions';
import { Sort } from '../components/Sort';
import HeroLoader from '../components/HeroLoader';
import Hero from '../components/Hero';

import { useSelector } from 'react-redux';

import { fetchHeroes } from '../redux/heroes/asyncActions';
import { RootState, useAppDispatch } from '../redux/store';
import LoadingSpinner from '../components/LoadingSpinner';

export default function HomePage() {

  // const navigate = useNavigate();
  const dispatch = useAppDispatch();


  // redux logic
  const { selectedSort, selectedFaction, searchValue } = useSelector((state: RootState) => state.filter);
  const { heroes, status, errorMessage } = useSelector((state: RootState) => state.heroes);

  // достаём URL параметры
  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));
  //     dispatch(setFilters(params));
  //   }
  // }, []);

  // // сохраняем данные фильтрации в адресной строке
  // useEffect(() => {
  //   const queryString = qs.stringify({
  //     sort: selectedSort,
  //     faction: selectedFaction,
  //     search: searchValue,
  //   });

  //   navigate(`?${queryString}`);
  // }, [selectedSort, selectedFaction, searchValue]);


  useEffect(() => {
    async function getHeroes() {

      const baseUrl = 'https://645d3679e01ac610589fc7ea.mockapi.io/heroes?';
      const sort = 'sortBy=' + (selectedSort === 'alphabet' ? 'name' : selectedSort);
      const order = '&order=' + (selectedSort === 'alphabet' ? 'asc' : 'desc');
      const faction = selectedFaction === 'All' ? '' : `&faction=${selectedFaction}`;
      const search = searchValue ? `&search=${searchValue}` : '';

      dispatch((fetchHeroes(baseUrl + sort + order + search + faction)));
    }

    getHeroes();
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
          {status === 'loading'
            ? [...new Array(4)].map((el, i) => <HeroLoader key={i} />)
            : status === 'success' && heroes.length !== 0
              ?
              heroes.map((hero) =>
                <Hero
                  key={hero.id}
                  {...hero}
                />)
              : status === 'error'
                ? <h2 className="heroes__title heroes__title_error">
                  {`Something went wrong:`} <br />
                  {errorMessage}
                </h2>
                : <h2 className="heroes__title heroes__title_error">
                  {`No heroes? ( ͠° ͟ʖ ͡°)`}
                </h2>
          }
        </ul>
      </div>
    </section>
  )
}
