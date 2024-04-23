let container = document.querySelector(".container")
let navbaritem = ()=>{
    let navbar = document.createElement("div")
    navbar.classList.add("navbar")
navbar.innerHTML = `  <a href="./search.html">Search</a>
<a href="./random.html">Random</a>
<a href="./ROD.html">Recipe of the day</a>`
container.append(navbar);
}

export default navbaritem;