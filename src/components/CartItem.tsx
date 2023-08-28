import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, decrementItem, removeItem } from '../redux/slices/cartSlice';

type TCartItemProps = {
  id: string,
  name: string,
  type: string,
  lvl: number,
  price: number,
  img: string,
  count: number,
};

export default function CartItem(heroItem: TCartItemProps) {
  const dispatch = useDispatch();
  const [isDecrementDisabled, setIsDecrementDisabled] = useState(false);

  function onIncrement() {
    dispatch(addItem(heroItem))
  };

  function onDecrement() {
    dispatch(decrementItem(heroItem));
  }

  function onRemove() {
    dispatch(removeItem(heroItem));
  };

  useEffect(() => {
    if (heroItem.count === 1) {
      setIsDecrementDisabled(true);
    } else {
      setIsDecrementDisabled(false);
    }
  }, [heroItem.count]);

  return (
    <li className="cart__item">
      <img src={heroItem.img} alt="Hero" className="cart__img" />
      <div className="cart__info">
        <h3 className="cart__item-title">{heroItem.name}</h3>
        <span className="cart__item-descr">{`${heroItem.type}, ${heroItem.lvl} lvl.`}</span>
      </div>
      <div className="cart__counter">
        <button
          type="button"
          className={`cart__counter-button button ${isDecrementDisabled ? 'cart__counter-button_disabled' : ''}`}
          disabled={isDecrementDisabled}
          onClick={onDecrement}
        >-</button>
        <span className="cart__counter-number">{heroItem.count}</span>
        <button
          type="button"
          className="cart__counter-button button"
          onClick={onIncrement}
        >+
        </button>
      </div>
      <span className="cart__sum">{heroItem.price * heroItem.count}</span>
      <button
        type="button"
        className="cart__clear-item button"
        onClick={onRemove}
      >&#215;</button>
    </li>
  )
}
