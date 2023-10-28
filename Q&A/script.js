const buttons = document.querySelectorAll(".question-btn");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        // console.log(e.currentTarget.parentNode.parentNode);
        const question = e.currentTarget.parentNode.parentNode;
        question.classList.toggle("show-text");
    });
});
