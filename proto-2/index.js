class bank{
    #name;
    constructor(name){
this.#name = name;
    }
    get Name(){
        return this.#name;
    }
}
class Account extends bank{
    #balance;
    constructor(balance){
this.#balance = balance;
    }
    get Balance(){
        return this.balance;
    }
}
class accountClass extends Account{
    #interestRate;
    constructor(intrest){
        this.#interestRate = intrest;
    }
get Interest(){
    return this.#interestRate = interest;
}
set Interest(value){
    return this.#interestRate = value;
}
}