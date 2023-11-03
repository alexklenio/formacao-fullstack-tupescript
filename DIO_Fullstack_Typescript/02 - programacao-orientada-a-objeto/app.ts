import { PeopleAccount } from "./class/PeopleAccount"
import { CompanyAccount } from "./class/CompanyAccount"
import { AccountPlus } from "./class/AccountPlus"

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