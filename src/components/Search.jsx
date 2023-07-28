import React, { useCallback, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../redux/slices/filterSlice';
import debounce from 'lodash.debounce';

export default function Search() {

  const { searchValue } = useSelector(state => state.filter);
  const [inputValue, setInputValue] = useState(searchValue);

  const dispatch = useDispatch();

  const searchInput = useRef();

  const updateSearchValue = useCallback(
    debounce((value) => {
      dispatch(setSearchValue(value));
    }, 500),
    [])

  function changeSearchValue(evt) {
    setInputValue(evt.target.value);
    updateSearchValue(evt.target.value);
  }

  function clearSearchValue() {
    setInputValue('');
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
        value={inputValue}
        ref={searchInput}
      />
      {inputValue
        && <button
          type="button"
          className="search__clear"
          onClick={clearSearchValue}
        >&#215;</button>
      }
    </div>
  )
}
