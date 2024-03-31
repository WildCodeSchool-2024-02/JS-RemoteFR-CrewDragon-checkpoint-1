const changeImg = (document.querySelector(".avatar img"));

changeImg.addEventListener("click", () => {
    changeImg.src = "./image/avatar.svg"
});

const btn = document.createElement("button");
btn.textContent = "Modify text and color";

const body = document.getElementsByTagName("section")[1];
body.appendChild(btn);

btn.id = "button";
body.appendChild(btn);

btn.addEventListener("click", function () {
        this.h2.innerHTML("David");
    })