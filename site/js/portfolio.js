//step1
const avatarImage = document.querySelector("#avatar-image");
avatarImage.addEventListener("click", () => {
    avatarImage.src = "image/avatar.svg";
})

//step2
const buttonTextColor = document.querySelector("#button-text-color");
const firstname = document.querySelector("#firstname");
buttonTextColor.addEventListener("click", () => {
    const question = prompt("Enter your name");
    firstname.innerHTML = question;
    firstname.style.color = "white";
})
