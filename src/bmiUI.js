const BMICalculator = require("../src/bmiCalculator");


function onCalculateClick() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const resultDiv = document.getElementById("results");
    const calculator = new BMICalculator();
    const result = calculator.calculateMetric({weight: weight, height: height});
    
    resultDiv.innerHTML = `<h2>Your BMI value is <strong>${result.value}</strong>and you in ${result.category} category! </h2>`;
}

//({height: 1.61, weight: 56})

const button = document.getElementById("calculateBtn");
button.addEventListener("click", onCalculateClick);
