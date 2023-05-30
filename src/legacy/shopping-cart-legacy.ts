type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

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

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido de ${this.total()} R$ foi recebido`);
    this.saveOrder();
    this.clear();
  }

  sendMessage(message: string): void {
    console.log(message);
  }

  saveOrder(): void {
    console.log('Seu pedido foi salvo');
  }

  clear(): void {
    console.log('Carrinho limpo');
    this._items.length = 0;
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}

const shoppingCart = new ShoppingCartLegacy();

shoppingCart.addItem({ name: 'Arroz', price: 21.95 });
shoppingCart.addItem({ name: 'Feijão', price: 7.7 });
shoppingCart.addItem({ name: 'Leite', price: 5.85 });

shoppingCart.checkout();
