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
    const word1 = document.createElement("li");
    word1.classList.add("cheat");
    word1.innerText = "VScode"
    container.appendChild(word1);

    const word2 = document.createElement("li");
    word2.classList.add("cheat");
    word2.innerText = "github"
    container.appendChild(word2);

    const word3 = document.createElement("li");
    word3.classList.add("cheat");
    word3.innerText = "Terminal"
    container.appendChild(word3);
})

const pushInput = document.getElementById("pushInput")
pushInput.addEventListener("click", () => {
    const addInput = document.getElementById("addInput").value;
    const containerAdd = document.getElementById("addLi");

    const newWord = document.createElement("li");
    newWord.classList.add("newWord");
    newWord.innerText = `${addInput}`
    containerAdd.appendChild(newWord);


})