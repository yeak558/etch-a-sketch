// Select elements
const gridContainer = document.querySelector(".grid-container");
const pixelNumberButton = document.querySelector("#pixel-number-button");
const canvasInfo = document.querySelector("#canvas-info");


// General variables
let defaultPixelNumber = 64;
let pixelSize; // will be decided according to pixel number
const width = 640;
const height = 640;


initCanvas();
pixelNumberButton.addEventListener("click", drawCanvas);

function initCanvas() {
	canvasInfo.textContent = "Canvas size: 64x64";
	for (let i = 1; i <= 64; i++ ) {
		let gridLine = document.createElement("div");
		gridLine.classList.add("grid-line");
		for (let j = 1; j <= 64; j++) {
			let pixel = document.createElement("div");
			pixel.style.width = `${width / 64}px`;
			pixel.style.height = `${height / 64}px`;
			pixel.classList.add("pixel");
			gridLine.appendChild(pixel);
		}
		gridContainer.appendChild(gridLine);
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
	canvasInfo.textContent = `Canvas size: ${pixelNumber}x${pixelNumber}`;
	for (let i = 1; i <= pixelNumber; i++) {
		let gridLine = document.createElement("div");
		gridLine.classList.add("grid-line");
		for (let j = 1; j <= pixelNumber; j++) {
			let square = document.createElement("div");
			square.classList.add("square");
			gridLine.appendChild(square);
		}
		gridContainer.appendChild(gridLine);
	}
	defaultPixelNumber = pixelNumber;
}

function cleanCanvas() {
	gridContainer.innerHTML = "";
}