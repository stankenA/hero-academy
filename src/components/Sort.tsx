import React, { useState } from 'react';
import { sortArr } from '../utils/constants';

import { useSelector, useDispatch } from 'react-redux';
import { setSelectedSort } from '../redux/slices/filterSlice';
import { RootState } from '../redux/store';

export default function Sort() {

  const dispatch = useDispatch();
  const selectedSort = useSelector((state: RootState) => state.filter.selectedSort);

  const [isSortOpened, setIsSortOpened] = useState(false);

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
            onClick={() => dispatch(setSelectedSort(sortType))}
          >
            {sortType}
          </li>
        )
        }
      </ul>
    </div>
  )
}
