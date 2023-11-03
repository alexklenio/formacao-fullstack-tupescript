export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    protected balance: number;
    private status: boolean = true
    protected dataCriacao: string


    constructor(name: string, accountNumber: number, balance?: number) {
        this.name = name
        this.accountNumber = accountNumber
        this.balance = (balance || 0)
        this.dataCriacao = new Date().toLocaleDateString()
    }


    getName = (): string => {
        return this.name
    }

    deposit = (balance: number): void => {
        if (this.validadeStatus()) {
            this.balance += balance
        }
    }

    withdraw = (valor: number): void => {
        if (this.validadeStatus() && this.balance >= valor) {
            this.balance -= valor
        }
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    setBalance(balance: number): void {
        this.balance = balance
    }

    protected validadeStatus = (): boolean => {
        if (this.status) {
            return this.status
        }
        throw new Error('Conta inválida')
    }
}
