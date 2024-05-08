import navbar from "./utility.js";

let navdiv = document.querySelector(".navbar");
navdiv.innerHTML = navbar();
let pagination = document.querySelector(".pagination");
function btns(){
    let noOfbtns = 5;
    for(let i = 1 ; i<= noOfbtns ; i++){
let btn = document.createElement("button");
btn.classList.add("buttons")
btn.innerText = i;
pagination.append(btn);

    }
}
btns()