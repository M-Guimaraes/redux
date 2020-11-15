export interface IProduct {
  id: string;
  title: string;
  price: number;
}
export interface ICartItem {
  product: IProduct;
  quantity: number;
}
export interface ICarState {
  items: ICartItem[];
}
