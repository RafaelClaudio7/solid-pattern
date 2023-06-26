import { CartItem } from '../../../srp/entities/interfaces/cart-item';

export interface ShoppingCartProtocol {
  addItem(item: CartItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
  get items(): Readonly<CartItem[]>;
}
