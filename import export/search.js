import navbaritem from "./utils/utils.js";
import add from "./utils/utils.js"; 
navbaritem();

let input = document.querySelector(".input");
let container = document.querySelector(".container"); 
let button = document.querySelector(".search");
let box = document.querySelector(".box");

button.addEventListener("click", async () => {
  box.innerHTML = ""
  let value = input.value; 
  await apifetch(value); 
});

function displayData(meals) {
  meals.forEach(element => {
    let boxes = document.createElement("div");
    boxes.classList.add("box");
    let name = document.createElement("h1");
    name.innerHTML = element.strMeal; 
    let about = document.createElement("p");
    about.innerHTML = element.strInstructions
    let img = document.createElement("img");
    img.src = element.strMealThumb
    box.append(boxes);
    boxes.append(img,name,about);
  });
}

let apifetch = async (value) => {
  try {
    let res = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${value}`);
    let read = await res.json();
    displayData(read.meals);
  } catch (err) {
    console.log("error found", err); 
  }
}
