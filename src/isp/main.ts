/*
Liskov substituition principle (Princípio da substituição de Liskov)
Se ɸ(x) é uma propriedade  demonstrável dos objetos x de tipo T. Então ɸ(x)
deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T

Simplificando: Subtipos precisam ser substituíveis por seus tipos de base
*/

import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './useCases/shopping-cart';
import { NoDiscount } from './entities/discount';
import { EnterpriseCustomer, IndividualCustomer } from './entities/customer';

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

const customerEnterprise = new EnterpriseCustomer(
  'Microsoft',
  '111.111.111.111-11',
);

const order = new Order(shoppingCart, messaging, persistency, customerPerson);

shoppingCart.addItem(new Product('Arroz', 21.95));
shoppingCart.addItem(new Product('Camisa', 99.9));
shoppingCart.addItem(new Product('Torta', 25.5));

console.log(shoppingCart.total());
order.checkout();
