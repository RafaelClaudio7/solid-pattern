/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são as que gerenciam as classes de baixo nível.
*/

import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './useCases/shopping-cart';
import { NoDiscount } from './entities/discount';
import { EnterpriseCustomer, IndividualCustomer } from './entities/customer';
import { MessagingProtocol } from './entities/interfaces/messaging-protocol';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);

const messaging = new Messaging();
const persistency = new Persistency();

const customerPerson = new IndividualCustomer(
  'Rafael',
  'Tula',
  '146.101.776-92',
);

class MessagingMock implements MessagingProtocol {
  sendMessage(message: string): void {
    console.log('Olá');
  }
}

const messagingMock = new MessagingMock();

const order = new Order(
  shoppingCart,
  messagingMock,
  persistency,
  customerPerson,
);

shoppingCart.addItem(new Product('Arroz', 21.95));
shoppingCart.addItem(new Product('Camisa', 99.9));
shoppingCart.addItem(new Product('Torta', 25.5));

console.log(shoppingCart.total());
order.checkout();
