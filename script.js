function createGrid(gridWidth, squaresPerSide) {
  const gridContainer = document.querySelector(".grid");
  gridContainer.style["width"] = gridWidth + "px";
  //reset existing Grid
  gridContainer.textContent = "";

  //max 100 per side
  squaresPerSide = squaresPerSide > 100 ? 16 : squaresPerSide;

  let squareDimensions = gridWidth / squaresPerSide;
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    let square = document.createElement("div");
    square.style.cssText = `width: ${squareDimensions}px; height: ${squareDimensions}px`;
    square.classList.add("square");
    square.setAttribute("id", `square${i}`);
    gridContainer.appendChild(square);
    addHoverListener(square);
  }
}
createGrid(600, 100);

function addHoverListener(element) {
  element.addEventListener("mouseover", () => {
    hoverEffect(element);
    console.log(element);
  });
}

function hoverEffect(element) {
  element.classList.add("activated");
}

const newGridButton = document.querySelector("#new-grid");
newGridButton.addEventListener("click", () => {
  createGrid(600, parseInt(prompt("Squares per side?")));
});
