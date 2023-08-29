export type THeroComponentProps = {
  name: string,
  price: number,
  heroImage: string,
  lvls: number[],
  types: number[],
  id: string,
};

export type TCartItemComponentProps = {
  id: string,
  name: string,
  type: string,
  lvl: number,
  price: number,
  img: string,
  count: number,
};
