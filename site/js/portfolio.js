const avatarChange = document.querySelector('img[src="./image/avatar-bis.png"]');

avatarChange.addEventListener("click", function() {
    avatarChange.src = "./image/avatar.svg";
});

document.getElementById('changeNameBtn').addEventListener('click', function() {
    const firstname = document.getElementById('firstname');
    const newName = prompt("Please enter your name:");
    firstname.textContent = newName;
    firstname.style.color = 'red';
});