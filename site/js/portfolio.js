
const avatar = document.querySelector("#avatar#);


avatar.addEventListener('click',  () == {

    if (avatar.src.endsWith('avatar-bis.png')) {
        avatar.src = "./image/avatar.svg";
    } else {
        avatar.src = 'image/avatar-bis.png';
    });


function changeName() {

    const newName = prompt('Please enter your name:');

    // Check if the user entered a name
    if (newName) {
        // Get the span element by its ID
        const nameSpan = document.getElementById('nameSpan');

        // Update the content of the span element with the new name
        nameSpan.textContent = newName;
        nameSpan.style.color = 'white'; // Change text color to white
    }
}
function changeBackgroundColor() {

    const newColor = prompt('Background color #750ff7):');

    if (newColor) {

        const descriptionSection = document.getElementById('descriptionSection');
        descriptionSection.style.backgroundColor = newColor;
    }
}
