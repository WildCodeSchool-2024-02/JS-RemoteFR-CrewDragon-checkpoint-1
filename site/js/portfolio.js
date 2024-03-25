const avatar = document.querySelectorAll('.avatar');

avatar.forEach(function(avatar) {
  avatar.addEventListener('click', function() {
    this.src = 'image/avatar.svg';
  });
});

const newnameColorButton = document.getElementById('nameColorButton')
newnameColorButton.addEventListener('click', function() {
    
    const newName = prompt("Enter new name:");
    const nameElement = document.getElementById('firstname');
    nameElement.textContent = newName;
    nameElement.style.color = "white";
    
    
    
    const newColor = prompt("Entrez une couleur ( #750ff7) :") 
    const contentElement = document.querySelector('.description.pink-bg');
   contentElement.style.backgroundColor = newColor;
 
   
    });
