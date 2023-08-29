import { TCartItem } from "../redux/cart/types";

export function calcTotalPrice(items: TCartItem[]) {
  return items.reduce((sum, item) => {
    return (item.count * item.price) + sum;
  }, 0);
}
