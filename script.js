const gridContainer = document.querySelector(".grid-container");

for (let i = 1; i <= 10; i++) {
	let grid = document.createElement("div");
	grid.style.border = "1px solid gray";
	grid.style.width = "16px";
	grid.style.height = "16px";
	gridContainer.appendChild(grid);
}