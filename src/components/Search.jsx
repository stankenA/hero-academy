import React from 'react';

export default function Search({ searchValue, setSearchValue }) {
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
