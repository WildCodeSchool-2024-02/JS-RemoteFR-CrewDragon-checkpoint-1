//step1
const avatarImage = document.querySelector("#avatar-image");
avatarImage.addEventListener("click", () => {
    avatarImage.src = "image/avatar.svg";
})

//step2, step3
const buttonTextColor = document.querySelector("#button-text-color");
const descriptionPinkBg = document.querySelector(".pink-bg");
const firstname = document.querySelector("#firstname");
buttonTextColor.addEventListener("click", () => {
    const questionColor = prompt("Enter a color");
    const questionName = prompt("Enter your name");
    firstname.innerHTML = questionName;
    firstname.style.color = "white";
    descriptionPinkBg.style.backgroundColor = questionColor;
})
