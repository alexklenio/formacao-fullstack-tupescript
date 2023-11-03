# Desenvolvendo o Dio Bank
desenvolvido por [Alex Lopes](https://github.com/alexklenio)

#### Projeto desenvolvido com conceitos básicos de typescript

### Tecnologias
- Typescript

#### Desafios

1 - Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
  - Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
  - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

## Resposta:
``` typescript

withdraw = (valor: number): void => {
        if (this.validadeStatus() && this.balance >= valor) {
            this.balance -= valor
        }
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

``` 


2 - Implementar o método de empréstimo (getLoan) na classe CompanyAccount
  - Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
  - Apenas contas com o status true podem fazer empréstimo


## Resposta:
``` typescript

getLoan(loanValue: number): void {
        if (loanValue <= 0) {
            throw new Error("O valor do empréstimo deve ser maior que zero.");
        }

        if (!this.validadeStatus()) {
            throw new Error("Apenas contas com status ativo podem fazer empréstimo.");
        }

        this.balance += loanValue;
    }
``` 

3 - Criar um novo tipo de conta a partir da DioAccount
  - Esta conta não deve receber novos atributos
  - Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)

## Resposta:
``` typescript
import { DioAccount } from "./DioAccount";

export class AccountPlus extends DioAccount {

    constructor(name: string, accountNumber: number, balance?: number) {
        super(name, accountNumber, balance);
    }

    override deposit = (balance: number): void => {
        if (this.validadeStatus()) {
            this.balance += (balance + 10)
        }
    }
}
```

4 - Todos os atributos de qualquer conta devem ser privados e Os atributos name e accountNumber não podem ser alterados internamente ou externamente

## Resposta:
``` typescript
export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    protected balance: number;
    private status: boolean = true
    protected dataCriacao: string
```

5 - Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.


## Resposta:
``` typescript
const peopleAccount: PeopleAccount = new PeopleAccount(382, 'Alex Lopes', 1)
console.log(peopleAccount)
peopleAccount.deposit(50)
console.log(peopleAccount)

peopleAccount.withdraw(25)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('Dio', 10)
companyAccount.deposit(200)
console.log(companyAccount)

companyAccount.withdraw(10)
console.log(companyAccount)

companyAccount.getLoan(500)
console.log(companyAccount)

const plus: AccountPlus = new AccountPlus('Kauã', 80, 10)
console.log(plus)
plus.deposit(30)
console.log(plus)
```