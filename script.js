const container = document.querySelector("#container");
const gridButton = document.querySelector("#newGrid");

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256); // 0–255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

function createDiv(percent) {
  const div = document.createElement("div");
  div.className = "div";
  div.style.flex = `0 0 ${percent}%`;
  div.style.aspectRatio = '1';
  div.style.backgroundColor = "white";

  div.addEventListener('mouseover', function () {
    div.style.backgroundColor = getRandomRGB();
    div.style.cursor = 'pointer';
  });

  container.appendChild(div);
}

for (let i = 0; i < 256; i++) {
  createDiv(100 / 16);
}

gridButton.addEventListener('click', function () {
  const newSize = parseInt(prompt("Enter new grid size (e.g., 16 for 16x16. Max = 100):"));

  if (newSize > 0 && newSize <= 100) {
    container.innerHTML = "";

    const percent = 100 / newSize;

    for (let i = 0; i < newSize * newSize; i++) {
      createDiv(percent);
    }
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});