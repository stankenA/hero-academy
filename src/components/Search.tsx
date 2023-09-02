import React, { useCallback, useRef, useState, FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../redux/filter/slice';
import debounce from 'lodash.debounce';
import { RootState } from '../redux/store';

const Search: FC = () => {

  const { searchValue } = useSelector((state: RootState) => state.filter);
  const [inputValue, setInputValue] = useState(searchValue);

  const dispatch = useDispatch();

  const searchInput = useRef<HTMLInputElement>(null);

  const updateSearchValue = useCallback(
    debounce((value: string) => {
      dispatch(setSearchValue(value));
    }, 500),
    []);

  function changeSearchValue(evt: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(evt.target.value);
    updateSearchValue(evt.target.value);
  }

  function clearSearchValue() {
    setInputValue('');
    dispatch(setSearchValue(''));
    searchInput.current?.focus();
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
};

export default Search;
