let counter = 0;
const value = document.getElementById("counter-value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("increase")){
            counter++;
            // value.classList.toggle("value-positive");
            value.style.color = "green";
            setTimeout(() => {
                value.style.color = "var(--color-gray-1)";
            }, "500");
        } else if (styles.contains("decrease")){
            // value.classList.toggle("value-negative");
            counter--;
            value.style.color = "red";
            setTimeout(() => {
                value.style.color = "var(--color-gray-1)";
            }, "500");
        } else {
            counter = 0;
        }

        // Use this if you want to colorize the negative and positive state
        // if (counter > 0) {
        //     value.style.color = "green";
        // }
        // if (counter < 0) {
        //     value.style.color = "red";
        // }
        // if (counter === 0) {
        //     value.style.color = "#222";
        // }
        value.textContent = counter;
    });
});