// Select elements
const gridContainer = document.querySelector(".grid-container");
const pixelNumberButton = document.querySelector("#pixel-number-button");
const canvasInfo = document.querySelector("#canvas-info");


// General variables
let defaultPixelNumber = 64;


initCanvas();
pixelNumberButton.addEventListener("click", drawCanvas);

function initCanvas() {
	canvasInfo.textContent = "Canvas size: 64x64";
	putPixels(defaultPixelNumber);
}

function drawCanvas() {
	cleanCanvas();
	let pixelNumber = getPixelNumber();
	canvasInfo.textContent = `Canvas pixel number: ${pixelNumber}x${pixelNumber}`;
	putPixels(pixelNumber);
	defaultPixelNumber = pixelNumber;
}

function getPixelNumber() {
	let pixelNumber;
	do {
		pixelNumber = Number(prompt("Which width-height do you want?", String(defaultPixelNumber)));
		if (pixelNumber > 100) {
			alert("Please enter a positive value less than or equal to 100");
		}
	} while (pixelNumber <= 0 || pixelNumber > 100 || isNaN(pixelNumber))
	return pixelNumber;
}



function cleanCanvas() {
	gridContainer.innerHTML = "";
}

function putPixels(pixelNumber) {
	for (let i = 1; i <= pixelNumber; i++ ) {
		let gridLine = document.createElement("div");
		gridLine.classList.add("grid-line");
		for (let j = 1; j <= pixelNumber; j++) {
			let pixel = document.createElement("div");
			pixel.classList.add("pixel");
			gridLine.appendChild(pixel);
		}
		gridContainer.appendChild(gridLine);
	}
}