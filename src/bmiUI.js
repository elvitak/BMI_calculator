function onCalculateClick() {
  const weight = document.getElementById("weight").valueAsNumber;
  const height = document.getElementById("height").valueAsNumber;
  const resultDiv = document.getElementById("results");
  if (isNaN(weight) || isNaN(height)) {
    resultDiv.innerHTML = "<h2>Please specify your weight and height!</h2>";
  } else if (height === 0) {
    resultDiv.innerHTML = "<h2>Are you really THAT short?</h2>";
  } else if (height < 0 || weight < 0) {
    resultDiv.innerHTML = "<h2>Please write positive values!</h2>";
  } else {
    const calculator = new BMICalculator();
    const result = calculator.calculateMetric({
      weight: weight,
      height: height,
    });
    resultDiv.innerHTML = `<h2>Your BMI value is <strong>${result.value}</strong> and you are in <strong>${result.clasification}</strong> category! </h2>`;
  }
}

const button = document.getElementById("calculateBtn");
button.addEventListener("click", onCalculateClick);

if (typeof module !== "undefined" && module.exports) {
  module.exports = BMICalculator;
}
