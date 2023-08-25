import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
import { heroLvls, heroTypes } from '../utils/constants';

export default function Hero({ name, price, heroImage, lvls, types, id }) {

  const dispatch = useDispatch();

  console.log(types)
  const [activeType, setActiveType] = useState(types.length === 1 && types[0] === 1 ? 1 : 0);
  const [activeLvl, setActiveLvl] = useState(0);

  const addedItem = useSelector((state) => state.cart.items.find((item) => item.id === id
    && item.type === heroTypes[activeType]
    && item.lvl === heroLvls[activeLvl])
  );

  const count = addedItem ? addedItem.count : 0;

  function onClickAdd() {
    const item = {
      id,
      name,
      price,
      img: heroImage,
      type: heroTypes[activeType],
      lvl: heroLvls[activeLvl],
    };

    dispatch(addItem(item));
  }

  return (
    <li className="hero">
      <img
        src={heroImage}
        alt="Hero"
        className="hero__img"
      />
      <h3 className="hero__name">{name}</h3>
      <div className="hero__chars">
        <ul className="hero__type list">
          {
            types.map((type) => (
              <li
                key={type}
                className={`hero__type-option ${activeType === type ? 'hero__type-option_active' : ''}`}
                onClick={() => setActiveType(type)}
              >
                {heroTypes[type]}
              </li>
            ))
          }
        </ul>
        <ul className="hero__experience list">
          {
            lvls.map((lvl, i) => (
              <li
                key={lvl}
                className={`hero__lvl ${activeLvl === i ? 'hero__lvl_active' : ''}`}
                onClick={() => setActiveLvl(i)}
              >
                {lvl + ' lvl.'}
              </li>
            ))
          }
        </ul>
      </div>
      <div className="hero__bottom">
        <div className="hero__price">
          <span className="hero__price-number">{price}</span>
          <span className="hero__price-dust"></span>
        </div>
        <button className="hero__add button" onClick={onClickAdd}>
          <span className="hero__add-plus"></span>
          <p className="hero__add-txt">Recruit </p>
          {count ? <span className="hero__add-counter">{count}</span> : ''}
        </button>
      </div>
    </li>
  )
}
