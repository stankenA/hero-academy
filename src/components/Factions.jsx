import React, { useState } from 'react';
import { factionsArr } from '../utils/constants';

export default function Factions() {

  const [selectedFaction, setSelectedFaction] = useState(0);

  return (
    <ul className="factions list">
      {factionsArr.map((faction, index) => (
        <li
          className={`factions__option ${index === selectedFaction ? 'factions__option_active' : ''}`}
          key={faction.name}
          onClick={() => setSelectedFaction(index)}
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
