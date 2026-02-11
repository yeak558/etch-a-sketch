const gridContainer = document.querySelector(".grid-container");

for (let i = 1; i <= 1000; i++) {
	let grid = document.createElement("div");
	grid.classList.add("grid");
	// grid.style.display = "inline-block";
	gridContainer.appendChild(grid);
}