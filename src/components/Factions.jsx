import React from 'react';
import { factionsArr } from '../utils/constants';

export default function Factions({ selectedFaction, onFactionSelect }) {

  return (
    <ul className="factions list">
      {factionsArr.map((faction) => (
        <li
          className={`factions__option ${faction.name === selectedFaction ? 'factions__option_active' : ''}`}
          key={faction.name}
          onClick={() => onFactionSelect(faction.name)}
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
