const competence = ["VS Code", "Github", "Terminal"]

// Change the avatar on click
const avatar = document.querySelector(".avatar");

avatar.addEventListener("click", () =>
    avatar.src = 'image/avatar.svg')

// Add actions clicking the button

const button = document.querySelector(".button");
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

// Change links in purple 

let linksColor = document.querySelectorAll("a");
linksColor.forEach(a => a.style.color = "#750ff7");


// Modify values on click on modify button based on competence array 

const modifyButton = document.querySelector(".modify");
let listitems = document.querySelectorAll(".test");

modifyButton.addEventListener("click", (e) => {
    for (let i = 0; i < competence.length; i++) {
        listitems[i].innerHTML = competence[i];
    }
});


// Add new value to list on Back-End Section

const addButton = document.querySelector(".add");
const inputfield = document.querySelector(".text-area");
const backli = document.querySelector(".back-li");

addButton.addEventListener("click", () => {
    const textToAdd = inputfield.value;
    const newLi = document.createElement("li");
    newLi.innerHTML = textToAdd;
    backli.appendChild(newLi);
})
