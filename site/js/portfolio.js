const avatar = document.querySelector("#avatar");
avatar.addEventListener("click", () => {
avatar.src = "./image/avatar.svg";
});

const firstname = document.querySelector("#firstname");
const buttonName = document.querySelector("#modifyName");
buttonName.addEventListener("click", () => {

    const pinkBG = document.querySelectorAll(".pink-bg");
    const pinkText = document.querySelectorAll(".pink-text")

    const newName = prompt("New name : ");
    const color = prompt("Color hexa (ex : #750ff7)");
    firstname.style.color = "white";
    firstname.textContent = newName;

    pinkBG.forEach((bg) => {
        bg.style.backgroundColor = color;
    });
        pinkText.forEach((text => {
            text.style.color = color;
});
});