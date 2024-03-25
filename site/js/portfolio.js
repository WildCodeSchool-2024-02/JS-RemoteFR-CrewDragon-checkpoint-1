
//step 1

var imageInitiale = document.getElementById("logo");
var imageApresClic = document.getElementById("imageApresClic");


imageInitiale.addEventListener("click", function() {
    
    imageInitiale.style.display = "none";
    imageApresClic.style.display = "block";
});

// step 2 

function modifyText() {
        const newName = prompt("Veuillez saisir votre nom :");
          document.getElementById("firstname").innerText = newName;
          document.getElementById("firstname").style.color = "white"; 
//step 3
         const newColor = prompt("Veuillez saisir une couleur");
         document.querySelector("#backColors") = newColor;
         document. getElementById("backColors").style.backgroundColor = newColor;
          
    } 
    
    
     
     

  