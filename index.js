const squares = document.querySelector(".squares");

let numberOrSquares = 16 * 16;

for (let i = 1; i <= numberOrSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square")
    squares.appendChild(square);
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
    })
}