const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn'); // sensor
const color = document.querySelector(".color"); //selector

btn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});