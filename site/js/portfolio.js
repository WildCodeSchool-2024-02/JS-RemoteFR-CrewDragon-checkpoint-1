const avatar = document.querySelector(".avatar");

avatar.addEventListener("click", () =>
    avatar.src = 'image/avatar.svg')

const button = document.querySelector(".button");

let prenom = "";

button.addEventListener("click", (e) => {
    //Change background color to purple 
    let color = prompt("Choose color");
    let backgroundsColor = document.querySelectorAll(".pink-bg");
    let textsColor = document.querySelectorAll(".pink-text");
    backgroundsColor.forEach(b => b.style.backgroundColor = color);
    textsColor.forEach(t => t.style.color = color);


    // Change name using prompt
    let prenom = prompt("What is your name ?")
    const userPrenom = document.querySelector("#firstname");
    userPrenom.innerHTML = prenom;
    userPrenom.style.color = "white";
})
