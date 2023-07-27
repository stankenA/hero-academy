import React, { useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../redux/slices/filterSlice';

export default function Search() {

  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.filter.searchValue);

  const searchInput = useRef();

  function changeSearchValue(evt) {
    dispatch(setSearchValue(evt.target.value))
  }

  function clearSearchValue() {
    dispatch(setSearchValue(''));
    searchInput.current.focus();
  }

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search your hero..."
        onChange={changeSearchValue}
        value={searchValue}
        ref={searchInput}
      />
      {searchValue
        && <button
          type="button"
          className="search__clear"
          onClick={clearSearchValue}
        >&#215;</button>
      }
    </div>
  )
}
