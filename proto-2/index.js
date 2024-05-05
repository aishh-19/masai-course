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
    constructor(name , balance){
        super(name)
this.#balance = balance;
    }
    get Balance(){
        return this.balance;
    }
}
class accountClass extends Account{
    #interestRate;
    constructor(name , balance, intrest){
    super(name ,balance);
        this.#interestRate = intrest;
    }
get Interest(){
    return this.#interestRate;
}
set Interest(value){
    return this.#interestRate = value;
}
}
let account1 = new accountClass("SBI" , 300000, 34+"%");
account1.Interest = 35+"%"
console.log(account1);
