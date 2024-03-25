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


// const changeLi = document.getElementById("changeLi");
// changeLi.addEventListener("click", () => {
//     const ulContainer = document.getElementById("front-dev-tools li");
//     for (let i = 0, ii = ulContainer.length; i < ii; i++){

//     }
// })