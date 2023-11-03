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