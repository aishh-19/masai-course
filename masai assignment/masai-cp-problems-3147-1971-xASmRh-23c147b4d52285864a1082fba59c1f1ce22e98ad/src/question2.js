// **Problem 5:****************************************************
// Write a factory function that can be used to create animal objects in bulk quantity.

function animal(legs , nonVeg ) {
 let a1 = {};
 a1.legs = legs ;
 a1.nonVeg = true ;
 a1.eat = function(){
    return "eating";
 }
 a1.greet = function(){
    return `hi I have ${a1.legs} legs.`
 }
 return a1;
}

let a1 = animal(4, true);
console.log(a1.eat()); // eating...
console.log(a1.greet()); // Hi, I have 4 legs.


//don't remove below export statement part
export { animal };