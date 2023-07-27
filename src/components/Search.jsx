import React, { useCallback, useRef, useState } from 'react';

import { useDispatch } from 'react-redux';
import { setSearchValue } from '../redux/slices/filterSlice';
import debounce from 'lodash.debounce';

export default function Search() {

  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const searchInput = useRef();

  const updateSearchValue = useCallback(
    debounce((value) => {
      dispatch(setSearchValue(value));
      console.log('bruh');
    }, 1000),
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
