export type THeroItem = {
  id: string,
  name: string,
  types: number[],
  lvls: number[],
  price: number,
  heroImage: string,
  count: number,
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
};

export interface IHeroSliceState {
  heroes: THeroItem[],
  status: Status,
  errorMessage?: string,
};
