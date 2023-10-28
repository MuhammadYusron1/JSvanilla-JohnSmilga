const colors = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * colors.length);
        hexColor += colors[randomNumber];
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});