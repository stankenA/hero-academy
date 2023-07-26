import React, { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';

export default function Search() {

  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search your hero..."
        onChange={(evt) => setSearchValue(evt.target.value)}
        value={searchValue}
      />
      {/* <img src="" alt="" className="search__icon" /> */}
    </div>
  )
}
