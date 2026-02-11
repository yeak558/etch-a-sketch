// Select elements
const gridContainer = document.querySelector(".grid-container");
const pixelNumberButton = document.querySelector("#pixel-number-button");
const canvasInfo = document.querySelector("#canvas-info");

// General variables
let defaultPixelNumber = 64;
const pixelSize = 16;

pixelNumberButton.addEventListener("click", drawCanvas);


function drawCanvas() {
	let pixelNumber;
	do {
		pixelNumber = Number(prompt("Which width-height do you want?", String(defaultPixelNumber)));
		if (pixelNumber > 100) {
			alert("Please enter a positive value less than or equal to 100");
		}
	} while (pixelNumber <= 0 || pixelNumber > 100)

	gridContainer.style.width = `${pixelSize * pixelNumber}px`;
	gridContainer.style.height = `${pixelSize * pixelNumber}px`;
	canvasInfo.textContent = `Canvas size: ${pixelNumber}x${pixelNumber}`;
	for (let i = 1; i <= pixelNumber**2; i++) {
		let grid = document.createElement("div");
		grid.classList.add("grid");
		gridContainer.appendChild(grid);
	}
	defaultPixelNumber = pixelNumber;
}

// It adds the new grids, it should redraw, fix it