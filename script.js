const gridContainer = document.querySelector(".grid-container");

for (let i = 1; i <= 10000; i++) {
	let grid = document.createElement("div");
	grid.classList.add("grid");
	gridContainer.appendChild(grid);
}