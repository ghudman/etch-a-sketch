const container = document.querySelector("#container");

for (let i = 0; i <256 ; i++) {
    const div = document.createElement("div");
    div.className = "div";
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.backgroundColor = "black";
    container.appendChild(div);
}
