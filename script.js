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
    square.style["background-color"] = "rgb(240,240,60)";
    gridContainer.appendChild(square);
    addHoverListener(square);
  }
}
createGrid(600, 16);
let mode = "simple";

function addHoverListener(element) {
  element.addEventListener("mouseover", () => {
    hoverEffect(element, mode);
  });
}

function hoverEffect(element, mode) {
  if (mode == "simple") {
    element.style["background-color"] = "rgb(255,255,255)";
  }

  if (mode == "rainbow") {
    element.style["background-color"] = `rgb(${getRandomNumber(
      256
    )}, ${getRandomNumber(256)}, ${getRandomNumber(256)})`;
  }

  if (mode == "blacken") {
    rgbValue = element.style["background-color"].slice(4, -1);
    let rgbArray = rgbValue.split(",");
    console.log(rgbArray);
    element.style["background-color"] = `rgb(${rgbArray[0] - 20},${
      rgbArray[0] - 20
    },${rgbArray[0] - 20})`;
  }
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

const newGridButton = document.querySelector("#new-grid");
newGridButton.addEventListener("click", () => {
  createGrid(600, parseInt(prompt("Squares per side?")));
});

const radiosMode = document.querySelectorAll("input[name='mode']");
for (let i = 0; i < radiosMode.length; i++) {
  radiosMode[i].addEventListener("click", () => {
    mode = radiosMode[i].value;
  });
}
