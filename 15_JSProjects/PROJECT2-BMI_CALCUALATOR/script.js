const form = document.querySelector("#bmi-form");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultDiv = document.getElementById("results");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100;
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        resultDiv.textContent = "Please enter valid weight and height.";
        return;
    }
    const bmi = weight / (height * height);
    resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    
});