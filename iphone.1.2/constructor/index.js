function Iphone3(ASIN, color, display, camera){
this.ASIN = ASIN;
this.color = color;
this.display = display;
this.camera2 = camera;
this.dail = function (){
    return "ring ring...."
}
this.camera = function (){
    return "clicked picture...."
}
this.sending = function (){
    return "sending text..."
}
}
let i3 = {};
Iphone3.call(i3,"B09X67JBQV", "Gray", 7.8, "2.0 MP");
console.log(i3.ASIN);
console.log(i3.color);
console.log(i3.display);
console.log(i3.camera2);

//i3 methods///
console.log(i3.camera())
console.log(i3.dail())
console.log(i3.sending())
