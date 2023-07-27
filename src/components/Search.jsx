import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../redux/slices/filterSlice';

export default function Search() {

  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.filter.searchValue);

  function changeSearchValue(evt) {
    dispatch(setSearchValue(evt.target.value))
  }

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search your hero..."
        onChange={changeSearchValue}
        value={searchValue}
      />
      {/* <img src="" alt="" className="search__icon" /> */}
    </div>
  )
}
