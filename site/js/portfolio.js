//On cible l'img de l'avatar
const avatar = document.querySelector("#avatar");
//On écoute au clic
avatar.addEventListener("click", changeAvatar);
//On dit quoi faire au clic
function changeAvatar() {
    avatar.setAttribute("src", "image/avatar-bis.png");
}



//On cible le text à changer
const text = document.querySelector("#firstname");
const button = document.querySelector("#buttonName");
const section = document.querySelector(".pink-bg");
const root = document.querySelector(':root');


//On écoute au clic du button
button.addEventListener("click", changeItems);
//On dit quoi faire au clic
function changeItems() {
    text.style.color = "white";
    // section.style.backgroundColor = prompt("Quelle couleur voulez-vous ?");
    root.style.setProperty("--lightWildColor", prompt("Quelle couleur voulez-vous ?"));
    text.innerHTML = prompt("Quel est votre nom");
}


//On cible tous les links 
const links = document.querySelectorAll("a");

//On boucle sur tous les links
for (let i = 0; i < links.length; i++) {
    links[i].style.color = "#750ff7";
}


// On cible la liste 
const listFront = document.querySelector(".front-dev-tools");
const buttonFront = document.querySelector("#front");
const tools = document.querySelectorAll(".tool");
const toolsMastered = ["VsCode", "GitHub", "Terminal"];


// On écoute au clic
buttonFront.addEventListener("click", changeList);

//On dit quoi faire au clic
function changeList() {
    for (let i = 0; i < tools.length; i++) {
        tools[i].innerHTML = toolsMastered[i];
    }
}

