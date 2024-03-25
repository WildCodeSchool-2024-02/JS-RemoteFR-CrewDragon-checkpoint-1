const avatar = document.querySelector("#avatar");

avatar.addEventListener("click", () => {
	/** Step 1 */
	avatar.src = "./image/avatar.svg";

	/** Step 1 with 💪 */
	const img = avatar.src;
	if (img.endsWith(".png")) {
		avatar.src = "./image/avatar.svg";
	} else {
		avatar.src = "./image/avatar-bis.png";
	}
});

/** Step 2 */
const firstname = document.querySelector("#firstname");
const buttonName = document.querySelector(".modifyName");

buttonName.addEventListener("click", () => {
	/** Step 3 */
	const pinkBG = document.querySelector(".pink-bg");

	const newName = prompt("New name : ");
	const color = prompt("Color hexa (ex : #750ff7)");

	firstname.style.color = "white";
	firstname.textContent = newName;

	pinkBG.style.backgroundColor = color;
});
