const clickAvatar = document.getElementById("imgAvatar");
clickAvatar.addEventListener("click", () =>  {
    clickAvatar.setAttribute('src', 'image/avatar.svg');
    console.log("caca");
})

const firstname = document.getElementById("firstname");
const changeName = document.getElementById("changeName");
const allColor = document.querySelectorAll(".pink-bg");
const pink = document.querySelectorAll(".pink-text");
changeName.addEventListener("click", () =>  {
    const color = window.prompt("color en hexa ?");
    const name = window.prompt("votre nom ?");
    firstname.innerText = name;
    for (let i = 0, ii = pink.length; i < ii; i++){
        pink[i].style.color = color;
    }
    for (let i = 0, ii = allColor.length; i < ii; i++){
        allColor[i].style.backgroundColor = color;
    }
})


const allLinkChange = () => {
    const allLink = document.querySelectorAll("a");
    for (let i = 0, ii = allLink.length; i < ii; i++){
        allLink[i].style.color = "#750ff7";
    }
}
allLinkChange();



const changeLi = document.getElementById("changeLi");
changeLi.addEventListener("click", () => {
    const ulContainer = document.querySelectorAll(".cheat");
    const container = document.getElementById("front-dev-tools");
    for (let i = 0, ii = ulContainer.length; i < ii; i++){
        ulContainer.forEach(e => e.remove());
    }
    const card1 = document.createElement("li");
    card1.classList.add("cheat");
    card1.innerText = "VScode"
    container.appendChild(card1);

    const card2 = document.createElement("li");
    card2.classList.add("cheat");
    card2.innerText = "github"
    container.appendChild(card2);

    const card3 = document.createElement("li");
    card3.classList.add("cheat");
    card3.innerText = "Terminal"
    container.appendChild(card3);
})