document.addEventListener("DOMContentLoaded", function() {
    const greyButton = document.getElementById("grey");
    const redButton = document.getElementById("red");
    const greenButton = document.getElementById("green");
    const blueButton = document.getElementById("blue");
    const body = document.body;
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", function() {
            const color = this.id;
            body.style.backgroundColor = color;
        });
    });
});

