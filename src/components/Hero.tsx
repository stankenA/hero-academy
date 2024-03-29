import { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cart/slice';
import { heroLvls, heroTypes } from '../utils/constants';
import { RootState } from '../redux/store';
import { THeroComponentProps } from '../utils/types/componentsTypes';

const Hero: FC<THeroComponentProps> = ({ name, price, heroImage, lvls, types, id }) => {

  const dispatch = useDispatch();

  const [activeType, setActiveType] = useState(types.length === 1 && types[0] === 1 ? 1 : 0);
  const [activeLvl, setActiveLvl] = useState(0);

  const addedItem = useSelector((state: RootState) => state.cart.items.find((item) => item.id === id
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
      count: 0,
    };

    dispatch(addItem(item));
  }

  return (
    <li className="hero">
      <Link to={`/hero/${id}`} className="hero__link">
        <img
          src={heroImage}
          alt="Hero"
          className="hero__img"
        />
      </Link>
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

export default Hero;
