import { Discount } from '../entities/discount';
import { CartItem } from '../entities/interfaces/cart-item';
import { ShoppingCartProtocol } from '../entities/interfaces/shopping-cart-protocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discountStrategy: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return Number(
      this._items
        .reduce((acc, nextValue) => (acc += nextValue.price), 0)
        .toFixed(2),
    );
  }

  totalWithDiscount(): number {
    return this.discountStrategy.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho limpo');
    this._items.length = 0;
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
}
