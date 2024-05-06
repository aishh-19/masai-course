class animal{
    #type;
    constructor(type){
this.#type = type;
    }
    get Type(){
        return this.#type;
    }
}
class mamals extends animal{
constructor(type){
    super(type);
}
}
class bird extends animal{
    constructor(type){
super(type)
type = "bird";
    }
    get Type (){
        return type;}
}
class cow extends mamals{
    #milkProduction;
    constructor(milkProduction , type){
super(type);
this.#milkProduction = "high";
    }
    get milkProduction(){
        return this.#milkProduction;
    }
    set milkProduction(value){
        return this.#milkProduction = value;
    }
}
class eagle extends bird{
    #wingspan;
    constructor(type , wingspan){
        super(type)
        this.#wingspan = "large";
    }
    get wingSpan(){
    return this.#wingspan;
    }
    set wingSpan(value){
        return this.#wingspan = value;
    }
}
class sparrow extends bird{
    #wingspan;
    constructor (type, wingspan){
        super(type);
        this.#wingspan = "small";
    }
    get wingSpan(){
        return this.#wingspan;
    }
    set wingSpan(value){
        return this.#wingspan = value;
    }
}
let bird1 = new sparrow("bird");
console.log(bird1);
bird1.wingSpan = "big";
console.log(bird1.wingSpan);