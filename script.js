const container = document.querySelector("#container");

for (let i = 0; i <256 ; i++) {
    const div = document.createElement("div");
    div.className = "div";
    div.style.height = "100px";
    div.style.width = "100px";
    div.style.backgroundColor = "black";
    container.appendChild(div);
}
