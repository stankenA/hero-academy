import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../components/CartItem';
import { clearItems } from '../redux/cart/slice';
import { selectCart } from '../redux/cart/selectors';
import CartEmpty from '../components/CartEmpty';
import { RootState } from '../redux/store';

const CartPage: FC = () => {

  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);
  const totalCount = items.reduce((sum: number, item) => sum + item.count, 0);
  const { totalPrice } = useSelector(selectCart);

  function clearCart() {
    dispatch(clearItems());
  }

  if (!totalCount) {
    return <CartEmpty />
  }

  return (
    <section className="cart">
      <div className="cart__top">
        <div className="cart__cart">
          <span className="cart__icon"></span>
          <h2 className="cart__title">Heroes cart</h2>
        </div>
        <button onClick={clearCart} type="button" className="cart__clear-button button">
          <span className="cart__clear-icon"></span> Clear cart
        </button>
      </div>
      <div className="cart__content">
        <ul className="cart__list list">
          {items.map((item: any) =>
            <CartItem
              key={item.id + item.lvl + item.type}
              {...item}
            />
          )}
        </ul>
      </div>
      <div className="cart__bottom">
        <div className="cart__amount">
          <p className="cart__txt">
            Hero number: <span className="cart__hero-number">{totalCount}</span>
          </p>
          <p className="cart__txt cart__txt">
            Total dust: <span className="cart__total-dust">{totalPrice}</span>
          </p>
        </div>
        <div className="cart__buttons">
          <NavLink to="/" className="cart__back">
            <span className="cart__back-arrow">Go back</span>
          </NavLink>
          <button className="cart__pay button">Pay now</button>
        </div>
      </div>
    </section>
  )
};

export default CartPage;
