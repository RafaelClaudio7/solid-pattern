import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './useCases/shopping-cart';
import { NoDiscount } from './entities/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);

const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Arroz', 21.95));
shoppingCart.addItem(new Product('Camisa', 99.9));
shoppingCart.addItem(new Product('Torta', 25.5));

console.log(shoppingCart.total());
order.checkout();
