import { PersistencyProtocol } from '../entities/interfaces/persistency-protocol';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Seu pedido foi salvo');
  }
}
