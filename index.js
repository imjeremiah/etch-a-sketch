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
    if (size < 1) size = 16;
    if (size > 100) size = 100;
    createGrid(size);
});

function changeOpacity(squareID) {
    let currentSquare = document.querySelector(`#${squareID}`);
    let squareStyle = window.getComputedStyle(currentSquare);
    let opacity = squareStyle.getPropertyValue("opacity");
    console.log(typeof opacity);
    opacity = Number(opacity);
    opacity += .10;
    currentSquare.style.opacity = opacity;
}

function createGrid(size) {
    let k = 1;
    let screen = (930 - (size * 4)) / size;
    for (let i = 1; i <= size; i++) {
        const row = document.createElement("div");
        for (let j = 1; j <= size; j++) {
            const column = document.createElement("div");
            const innerColumn = document.createElement("div");
            column.appendChild(innerColumn);
            innerColumn.classList.add("squareBackground");
            innerColumn.setAttribute("id", `s${k++}`);
            column.classList.add("squareBorder");
            column.style.minHeight = `${screen}px`;
            column.style.minWidth = `${screen}px`;
            innerColumn.addEventListener("mouseenter", (e) => {
                let squareID = e.target.id;
                // const randomColor = Math.floor(Math.random()*16777215).toString(16);
                // column.style.backgroundColor = `#${randomColor}`;
                changeOpacity(squareID);
            });
            row.appendChild(column);
        }
        squares.appendChild(row);
    }
}

createGrid(size);
