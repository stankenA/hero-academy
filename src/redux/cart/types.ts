export type TCartItem = {
  id: string,
  type: string,
  lvl: number,
  name: string,
  price: number,
  img: string,
  count: number,
};

export interface ICartSliceState {
  items: TCartItem[],
  totalPrice: number,
};
