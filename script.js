function createGrid(totalWidth, squareAmount) {
  const gridContainer = document.querySelector(".grid");
  let squareDimensions = totalWidth / Math.sqrt(squareAmount);
  for (let i = 0; i < squareAmount; i++) {
    let square = document.createElement("div");
    square.style.cssText = `width: ${squareDimensions}px; height: ${squareDimensions}px`;
    square.classList.add("square");
    square.setAttribute("id", `square${i}`);
    gridContainer.appendChild(square);
    addHoverListener(square);
  }
}
createGrid(800, 16);

function addHoverListener(element) {
  element.addEventListener("mouseover", () => {
    hoverEffect(element);
    console.log(element);
  });
}

function hoverEffect(element) {
  element.classList.toggle("activated");
}
