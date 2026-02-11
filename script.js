// Select elements
const gridContainer = document.querySelector(".grid-container");
const pixelNumberButton = document.querySelector("#pixel-number-button");
const canvasInfo = document.querySelector("#canvas-info");

// General variables
let defaultPixelNumber = 64;
const pixelSize = 16;

initCanvas();
pixelNumberButton.addEventListener("click", drawCanvas);

function initCanvas() {
	gridContainer.style.width = `${pixelSize * 64}px`;
	gridContainer.style.height = `${pixelSize * 64}px`;
	canvasInfo.textContent = "Canvas size: 64x64";
	let totalGrid = 64**2;
	for (let i = 1; i <= totalGrid; i++) {
		let grid = document.createElement("div");
		grid.classList.add("grid");
		gridContainer.appendChild(grid);
	}
}

function drawCanvas() {
	cleanCanvas();
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
	let totalGrid = pixelNumber**2;
	for (let i = 1; i <= totalGrid; i++) {
		let grid = document.createElement("div");
		grid.classList.add("grid");
		gridContainer.appendChild(grid);
	}
	defaultPixelNumber = pixelNumber;
}

function cleanCanvas() {
	gridContainer.innerHTML = "";
}