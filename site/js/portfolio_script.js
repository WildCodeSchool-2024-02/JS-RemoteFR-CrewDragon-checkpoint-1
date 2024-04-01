//selection the avatar by "class"
const changeImg = document.querySelector(".avatar img");

//add listener and event click to change avatar by arrow function
changeImg.addEventListener("click", () => {
    const img = changeImg.src;
    /*endsWith for checked the end element*/
        if (img.endsWith(".png")) {
            changeImg.src = "./image/avatar.svg";
        }
        else {
            changeImg.src = "./image/avatar-bis.png";
        }
});


//add button with create element
const btn = document.createElement("button");
//add text on button
btn.textContent = "Modify text and color";
//change font color
btn.style.color = "#e6ecf8";
//change font size
btn.style.fontSize = "1.2em";
//add shadow
btn.style.boxShadow = "0.1em 0.1em 2em white"
//add hover
btn.style.textShadow = "0.06em 0.05em  black"
//add "id" on the button
btn.id = "button";
//selection element by TagName "2e section"
const button = document.getElementsByTagName("section")[1].appendChild(btn);
//add button as child in the second section


//add button2 with create element
const btn2 = document.createElement("button");
//add text on button
btn2.textContent = "Modify";
//change font color
btn2.style.color = "#e6ecf8";
//change font size
btn2.style.fontSize = "1em";
//add shadow
btn2.style.boxShadow = "0.1em 0.1em 2em white"
//add hover
btn2.style.textShadow = "0.06em 0.05em  black"
//add "id" on the button
btn2.id = "button2";
//selection element by TagName "1e column"
const button2 = document.getElementsByTagName("section")[3].appendChild(btn2);


//selection background all banner by "class"
const newColorBack = document.querySelectorAll(".pink-bg");
//selection all text pink by "class"
const newColorText = document.querySelectorAll(".pink-text");
//selection firstname by "id"
const newFirstName = document.querySelector("#firstname");
//selection all link by TagName
const newColorLink = document.querySelectorAll("a");


//selection button by "id"
const buttonClick = document.querySelector("#button");
//add listener and event
buttonClick.addEventListener("click", () => {
const color = prompt("What color ? ex : #750ff7"); 
const newName = prompt("What's your firstname ?");
//apply for each select element
newColorBack.forEach((bg) => {
    bg.style.backgroundColor = color;
});
//apply for each select element  
newColorText.forEach((text) => {
    text.style.color = color; 
});
//apply for each select element 
newColorLink.forEach((link) => {
    link.style.color = color;
});
    newFirstName.textContent = newName;
    newFirstName.style.color = "white";
});

//selection button2 by "id"
const buttonClick2 = document.querySelector("#button2");
//add listener and event
buttonClick2.addEventListener("click", () => {
//selection all li by "id" and "tagName"   
const frontDevTool = document.querySelectorAll("#front-dev-tools li");
//add an array
const tools = ["Github", "VSC", "Terminal"]

    for ( i = 0; i < frontDevTool.length ; i++) {
       frontDevTool[i].textContent = tools[i];
    }

});
