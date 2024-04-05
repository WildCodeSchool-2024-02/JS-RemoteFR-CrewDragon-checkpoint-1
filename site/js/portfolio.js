const avatarChange = document.querySelector('img[src="./image/avatar-bis.png"]');

avatarChange.addEventListener("click", function() {
    avatarChange.src = "./image/avatar.svg";
});

document.getElementById('changeNameBtn').addEventListener('click', function() {
    /*Step 3 */
    const pinkBg = document.querySelectorAll(".pink-bg");
    const pinkText = document.querySelectorAll(".pink-text");
    /*Step 3 */
    const firstname = document.getElementById('firstname');
    const newName = prompt("Please enter your name:");

    firstname.textContent = newName;
    firstname.style.color = 'white';

    const color = prompt("Color hexa (ex: #750ff7)");

    pinkBg.forEach(bg => {
        bg.style.backgroundColor = color;
    });
    pinkText.forEach(text => {
        text.style.color = color;
    })

});

