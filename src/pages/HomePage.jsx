import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Factions from '../components/Factions';
import Sort from '../components/Sort';
import HeroLoader from '../components/HeroLoader';
import Hero from '../components/Hero';

import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../redux/slices/filterSlice';

import axios from 'axios';
import qs from 'qs';

export default function HomePage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // redux logic
  const { selectedSort, selectedFaction, searchValue } = useSelector(state => state.filter);

  // достаём URL параметры
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setFilters(params));
    }
  }, []);

  // // сохраняем данные фильтрации в адресной строке
  useEffect(() => {
    const queryString = qs.stringify({
      sort: selectedSort,
      faction: selectedFaction,
      search: searchValue,
    });

    navigate(`?${queryString}`);
  }, [selectedSort, selectedFaction, searchValue]);


  useEffect(() => {
    async function fetchHeroes() {
      setIsLoading(true);

      const baseUrl = 'https://645d3679e01ac610589fc7ea.mockapi.io/heroes?';
      const sort = 'sortBy=' + (selectedSort === 'alphabet' ? 'name' : selectedSort);
      const order = '&order=' + (selectedSort === 'alphabet' ? 'asc' : 'desc');
      const faction = selectedFaction === 'All' ? '' : `&faction=${selectedFaction}`;
      const search = searchValue ? `&search=${searchValue}` : '';
      try {
        const res = await axios.get(baseUrl + sort + order + search + faction);
        setHeroes(res.data);
        setIsLoading(false);

      } catch (error) {
        console.log(error);
      }
    }

    fetchHeroes();
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
