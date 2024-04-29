// **Problem 1:****************************************************
// write a "factory function iPhone1 to create iPhone objects in bulk quantity

function iPhone1(ASIN,color,display,camera) {
let i1 = {};
i1.ASIN = ASIN;
i1.color = color;
i1.display = display;
i1.camera = camera;
i1.dail = function(){
  return "ring ring....."
}
i1.sendMessage = function(){
  return"sending message";
}
i1.cameraClick = function(){
  return "camera clicked...."
}
return i1;
}

let i1 = iPhone1(
  1,
  "B09X67JBQV",
  "90mm",
  "2.0 MP"
);
console.log(i1.ASIN); 
console.log(i1.color); 
console.log(i1.display); 
console.log(i1.camera); 

console.log(i1.dial()); 
console.log(i1.sendMessage()); 
console.log(i1.cameraClick()); 

// **Problem 2:****************************************************
// write a "factory function iPhone2 to create iPhone objects in bulk quantity

function iPhone2(ASIN , color , display , camera , bluetooth) {
  let i2 = {};
  i2.ASIN = ASIN;
  i2.color = color;
  i2.display = display;
  i2.camera = camera;
  i2.bluetooth = bluetooth;
  i2.dail = function(){
    return "ring ring....."
  }
  i2.sendMessage = function(){
    return"sending message";
  }
  i2.cameraClick = function(){
    return "camera clicked...."
  }
i2.bluetoothConnection = function(){
return "bluetooth connected"
}
  return i2;
}

let i2 = iPhone2(
  1,
  "B09X67JBQV",
  7.8,
  "IOS",
  "128mb",
);
console.log(i2.ASIN); 
console.log(i2.color); 
console.log(i2.display);
console.log(i2.camera); 
console.log(i2.bluetooth); 

console.log(i2.dial()); 
console.log(i2.sendMessage()); 
console.log(i2.cameraClick()); 
console.log(i2.bluetoothConnection()); 

// **Problem 3:****************************************************
// Using Constructor Functions:

function IPhone3(ASIN , color , display , camera , bluetooth) {
  this.ASIN = ASIN ;
  this.color = color;
  this.display = display ;
  this.camera = camera ;
  this.bluetooth = bluetooth ;
this.dail = function(){
  return"ring ring..."
}
this.sendMessage = function(){
  return"sending message"
}
this.cameraClick = function(){
  return"clicked pic...."
}
this.connectBluetooth = function(){
  return"connected successfully.."
}
}


// // Example invocation:
let i3 = {};
IPhone3.call(i3, "B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");


console.log(i3.ASIN); // 1
console.log(i3.color); // B09X67JBQV
console.log(i3.display); // 7.8
console.log(i3.camera); // IOS
console.log(i3.bluetooth); // 128mb
console.log(i3.dial()); // "tring.. tring..."
console.log(i3.sendMessage()); // "Sending message..."
console.log(i3.cameraClick()); // "Camera clicked"
console.log(i3.connectBluetooth()); // "Bluetooth connected successfully..."

// **Problem 4:****************************************************
// Using ES6 classes:

class Iphone4 {
  constructor(ASIN, display, OS, RAM, color, weight, cameraResolution, bluetoothVersion) {
    this.ASIN = ASIN;
    this.display = display;
    this.OS = OS;
    this.RAM = RAM;
    this.color = color;
    this.weight = weight;
    this.cameraResolution = cameraResolution;
    this.bluetoothVersion = bluetoothVersion;
  }

  dial() {
    return "ring ring...";
  }

  sendMessage() {
    return "sending message";
  }

  cameraClick() {
    return "clicked pic....";
  }

  connectBluetooth() {
    return "connected successfully..";
  }
}

let i4 = new Iphone4(
  "B09X67JBQV",
  7.8,
  "IOS",
  "128mb",
  "Gray",
  "90mm",
  "2.0 MP",
  "5.1"
);

console.log(i4.ASIN); // B09X67JBQV
console.log(i4.display); // 7.8
console.log(i4.OS); // IOS
console.log(i4.RAM); // 128mb
console.log(i4.color); // Gray
console.log(i4.weight); // 90mm
console.log(i4.cameraResolution); // 2.0 MP
console.log(i4.bluetoothVersion); // 5.1

console.log(i4.dial()); // "ring ring..."
console.log(i4.sendMessage()); // "sending message"
console.log(i4.cameraClick()); // "clicked pic...."
console.log(i4.connectBluetooth()); // "connected successfully.."


//don't remove below export statement part
export { iPhone1, iPhone2, iPhone3, Iphone4 };
