import React, { useState } from 'react';

export default function Sort() {
  const sortArr = ['influence', 'price', 'alphabet'];

  const [isSortOpened, setIsSortOpened] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sortArr[0]);

  return (
    <div className="sort">
      <p className="sort__txt" onClick={() => setIsSortOpened(!isSortOpened)}>
        Sort by: <span className="sort__selected">{selectedSort}</span>
      </p>
      <ul
        className={`sort__list list ${isSortOpened ? 'sort__list_opened' : ''}`}
        onMouseLeave={() => setIsSortOpened(false)}
      >
        {sortArr.map((sortType) =>
          <li
            key={sortType}
            className={`sort__option ${sortType === selectedSort ? 'sort__option_active' : ''}`}
            onClick={() => setSelectedSort(sortType)}
          >
            {sortType}
          </li>
        )
        }
      </ul>
    </div>
  )
}
