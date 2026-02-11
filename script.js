// Select elements
const gridContainer = document.querySelector(".grid-container");
const pixelNumberButton = document.querySelector("#pixel-number-button");


pixelNumberButton.addEventListener("click", drawCanvas);

function drawCanvas() {
	let pixelNumber;
	do {
		pixelNumber = Number(prompt("Which width-height do you want?", "64"));
		if (pixelNumber > 100) {
			alert("Please enter a positive value less than or equal to 100");
		}
	} while (pixelNumber <= 0 || pixelNumber > 100)

	for (let i = 1; i <= pixelNumber; i++) {
		let grid = document.createElement("div");
		grid.classList.add("grid");
		gridContainer.appendChild(grid);
	}
}