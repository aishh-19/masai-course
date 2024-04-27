function iphone1(ASIN, color, display, camera) {
    let obj1 = {};
    obj1.ASIN = ASIN;
    obj1.color = color;
    obj1.display = display;
    obj1.camera = camera;
    obj1.sendMessage = function() {
        return("sending message....");
    };
    obj1.camera = function() {
        return("clicked img...");
    };
    obj1.dail = function() {
return("ringing...");
    };
    return obj1;
}

let one = iphone1(23, "blue", 6.7 + "inch", 20 + "megapixels");
let two = iphone1(23, "blue", 6.7 + "inch", 20 + "megapixels");
let three = iphone1(23, "blue", 6.7 + "inch", 20 + "megapixels");
let four = iphone1(23, "blue", 6.7 + "inch", 20 + "megapixels");

console.log(one.sendMessage())
