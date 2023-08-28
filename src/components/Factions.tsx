import React from 'react';
import { factionsArr } from '../utils/constants';

import { useSelector, useDispatch } from 'react-redux';
import { setSelectedFaction } from '../redux/slices/filterSlice';
import { RootState } from '../redux/store';

export default function Factions() {

  const dispatch = useDispatch();
  const selectedFaction = useSelector((state: RootState) => state.filter.selectedFaction);

  return (
    <ul className="factions list">
      {factionsArr.map((faction) => (
        <li
          className={`factions__option ${faction.name === selectedFaction ? 'factions__option_active' : ''}`}
          key={faction.name}
          onClick={() => dispatch(setSelectedFaction(faction.name))}
        >
          {faction.name}
          {faction.icon
            ? <img src={faction.icon} alt="faction icon" className="factions__icon" />
            : ''
          }
        </li>
      ))}
    </ul>
  )
}
