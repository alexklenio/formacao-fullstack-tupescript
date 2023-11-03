import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number, balance?: number) {
        super(name, accountNumber, balance)
    }

    getLoan(loanValue: number): void {
        if (loanValue <= 0) {
            throw new Error("O valor do empréstimo deve ser maior que zero.");
        }

        if (!this.validadeStatus()) {
            throw new Error("Apenas contas com status ativo podem fazer empréstimo.");
        }

        this.balance += loanValue;
    }
}

