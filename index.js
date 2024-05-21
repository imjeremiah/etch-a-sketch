const squares = document.querySelector(".squares");

const body = document.querySelector("body");

const button = document.createElement("button");
body.prepend(button);
button.textContent = "Resize Grid";
button.classList.add("button");

let size = 16;

button.addEventListener("click", () => {
    size = prompt("Resize Grid (up to 100): ");
    squares.innerHTML = "";
    if (size < 1) size = 1;
    if (size > 100) size = 100;
    createGrid(size);
});

function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        const row = document.createElement("div");
        for (let j = 1; j <= size; j++) {
            const column = document.createElement("div");
            column.classList.add("square");
            column.addEventListener("mouseenter", () => {
                column.style.backgroundColor = "black";
            });
            row.appendChild(column);
        }
        squares.appendChild(row);
    }
}

createGrid(size);
