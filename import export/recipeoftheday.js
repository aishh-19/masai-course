import navbaritem from "./utils/utils.js"
import add from "./utils/utils.js"
navbaritem();
let random = document.querySelector(".random")
async function fetchapi(){
try{
    let api = await fetch (`https://www.themealdb.com/api/json/v1/1/random.php`)
    let read = await api.json();
    console.log(read);
displayData(read.meals);
}catch{
    console.log("error found")
}
} 
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
    random.append(boxes)
    boxes.append(name,img,about);
    });
  }
  fetchapi();
