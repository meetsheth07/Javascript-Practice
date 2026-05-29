const stpbutton = document.getElementById("stopColor");
const genbutton = document.getElementById("generateColor");
let intervalId; 
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function startColorGeneration() {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomColor();
    }, 1000);
}
function stopColorGeneration() {
    clearInterval(intervalId);
}
genbutton.addEventListener("click", startColorGeneration);
stpbutton.addEventListener("click", stopColorGeneration);