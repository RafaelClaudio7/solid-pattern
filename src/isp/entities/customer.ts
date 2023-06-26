import {
  CustomerOrder,
  EnterpriseCustomerProtocol,
  IndividualCustomerProtocol,
} from './interfaces/customer-protocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder
{
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return this.firstName;
  }

  getIdn(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrder
{
  public readonly name: string;
  public readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.name;
  }

  getIdn(): string {
    return this.cnpj;
  }
}
