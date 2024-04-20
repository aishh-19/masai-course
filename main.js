// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${
  import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
let mainSection = document.getElementById("data-list-wrapper");
let getRecipesBtn = document.getElementById("fetch-recipes");
let totalResult = document.querySelector(".total-results");
const urlAllRecipes = `${baseServerURL}/recipes`;

let recipesArray = [];
let page = 1;

async function fetchAPI(page) {
  try {
    let res = await fetch(`${urlAllRecipes}?_page=${page}&_limit=5`);
    let data = await res.json();
    displayRecipes(data);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

function displayRecipes(data) {
  mainSection.innerHTML = "";
  data.forEach(element => {
    let box = document.createElement("div");
    box.classList.add("box");
    
    let img = document.createElement("img");
    img.src = element.image;
    
    let head1 = document.createElement("h1");
    head1.innerHTML = element.title;
    
    let about = document.createElement("p");
    about.innerHTML = element.about;
    
    mainSection.append(box);
    box.append(img, head1, about);
  });
}

getRecipesBtn.addEventListener("click", () => {
  fetchAPI(page);
});

window.addEventListener("scroll", () => {
  let clientHeight = document.documentElement.clientHeight;
  let scrollHeight = document.documentElement.scrollHeight;
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  console.log(clientHeight, scrollHeight, scrollTop);

  if (Math.ceil(scrollHeight - clientHeight) <= Math.ceil(scrollTop)) {
    console.log("Reached the bottom");
    page += 1; 
    fetchAPI(page);
    totalResult += 5;
  }
});
