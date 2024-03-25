const avatar = document.querySelector("#avatar");

avatar.addEventListener("click", () => {
	/** Step 1 */
	// avatar.src = "./image/avatar.svg";

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
	// /** Step 4 */
	// const pinkBG = document.querySelectorAll(".pink-bg");
	// const pinkText = document.querySelectorAll(".pink-text");
	const allA = document.querySelectorAll("a");

	const newName = prompt("New name : ");
	const color = prompt("Color hexa (ex : #750ff7)");
	// pinkBG.forEach((bg) => {
	// 	bg.style.backgroundColor = color;
	// });
	// pinkText.forEach((text) => {
	// 	text.style.color = color;
	// });

	allA.forEach((a) => {
		a.style.color = color;
	});

	firstname.style.color = "white";
	firstname.textContent = newName;

	/** step 4 with 💪 */
	const root = document.querySelector(":root");
	root.style.setProperty("--lightWildColor", color);
});

const buttonDevTool = document.querySelector("#buttonDevTools");
const frontDevTools = document.querySelectorAll("#front-dev-tools li");

buttonDevTool.addEventListener("click", () => {
	const tools = ["Github", "VSC", "Terminal"];
	for (let i = 0; i < frontDevTools.length; i++) {
		frontDevTools[i].textContent = tools[i];
	}
});
