function product() {
    const rendom = () => {
        console.log(this)
    }
    rendom()
}
// product()

function username(name, phoneno) {
    this.name = name
    this.phoneno = phoneno
    return this;
}
//  ----------> normal ---------------->
// const username1 = username("manish" , 1234556789)
// console.log(username1.name);
// const username2 = username("varun" , 1234356789)
// console.log(username2.name);
// console.log(username1.name);

// // with new use 
// const username1 =  new username("manish" , 1234556789)
// console.log(username1.name);
// const username2 = new username("varun" , 1234356789)
// console.log(username2.name);
// console.log(username1.name); 


class user {
    age = 4;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printname() {
        console.log(this.name);
    }
}
const u1 = new user("manish", 16)
console.log(u1);
const u2 = new user("manish kumar", 15)
console.log(u2);




class BankAccount {
    #balance;
    static totalBankAccount = 0;
    constructor(initialBalance) {
        this.#balance = initialBalance
        BankAccount.totalBankAccount++;
    }
    get() {// method
        console.log(this.#balance);
    }
    withdraw(amount) {// method
        if (amount > this.#balance) {
            console.log("Bete itne paise na hai tere pass");
            return
        }
        this.#balance = this.#balance - amount
    }
    deposit(amount) {// method
        if (amount <= 0) {
            console.log("Bete pagal samjha hua kya, muje aate hai edge cases handle krne garib");
            return
        }
        this.#balance = this.#balance + amount
    }
    static calculateTax() { // static method]
        console.log("calculating tax ... ");
    }
}
let acc1 = new BankAccount(500);
let acc2 = new BankAccount(500);

// acc1.get()
// acc1.withdraw(500)
// acc1.get()
// acc1.deposit(14322)
// acc1.get()
// acc1.withdraw(14000)
// acc1.get()

// acc1.#balance = 1200213123 // Private field '#balance' must be declared in an enclosing class


acc1.get()

acc1.deposit(-111)
acc1.get()
// acc1.calculateTax() // acc1.calculateTax is not a function
console.log(BankAccount.totalBankAccount);