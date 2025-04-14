const container = document.querySelector("#container");

for (let i = 0; i <256 ; i++) {
    const div = document.createElement("div");
    div.className = "div";
    div.style.height = "30px";
    div.style.width = "30px";
    div.style.backgroundColor = "black";
    container.appendChild(div);
}

const divs = document.querySelectorAll(".div");

divs.forEach(div => {
  div.addEventListener('mouseover', function() {
    div.style.backgroundColor = 'gray';
    div.style.color = 'black';
    div.style.cursor = 'pointer';
  });
});